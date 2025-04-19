import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart from localStorage on component mount
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });
  
  const url = "http://localhost:4000";
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [food_list, setFoodList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("Saved cart to localStorage:", cartItems);
  }, [cartItems]);

  const addToCart = async (itemId) => {
    const updatedCart = {...cartItems};
    
    if (!updatedCart[itemId]) {
      updatedCart[itemId] = 1;
    } else {
      updatedCart[itemId] = updatedCart[itemId] + 1;
    }
    
    // Update state
    setCartItems(updatedCart);
    
    // Save to localStorage immediately
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    
    // Update server if logged in
    if(token){
      try {
        await axios.post(url+"/api/cart/add", {itemId}, {headers:{token}});
      } catch (err) {
        console.error("Error adding to cart on server:", err);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    const updatedCart = {...cartItems};
    updatedCart[itemId] = updatedCart[itemId] - 1;
    
    // Update state
    setCartItems(updatedCart);
    
    // Save to localStorage immediately
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    
    // Update server if logged in
    if(token){
      try {
        await axios.post(url+"/api/cart/remove", {itemId}, {headers:{token}});
      } catch (err) {
        console.error("Error removing from cart on server:", err);
      }
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  // Try different API endpoints
  const fetchFoodList = async () => {
    setLoading(true);
    setError(null);
    
    // Endpoints to try
    const endpoints = [
      "/api/food/list",
      "/food/list",
      "/api/food/all",
      "/food/all"
    ];
    
    for (const endpoint of endpoints) {
      try {
        console.log(`Trying to fetch from: ${url}${endpoint}`);
        const response = await axios.get(`${url}${endpoint}`);
        
        if (response.data) {
          // Try different data structures
          let foodData;
          if (response.data.data) {
            foodData = response.data.data;
          } else if (Array.isArray(response.data)) {
            foodData = response.data;
          } else if (typeof response.data === 'object') {
            // Maybe the data is directly in the response
            const possibleArrays = Object.values(response.data).filter(val => Array.isArray(val));
            if (possibleArrays.length > 0) {
              foodData = possibleArrays[0];
            }
          }
          
          if (foodData && Array.isArray(foodData) && foodData.length > 0) {
            setFoodList(foodData);
            setLoading(false);
            return; // Successfully found data, exit the function
          }
        }
      } catch (err) {
        console.log(`Error with endpoint ${endpoint}:`, err.message);
        // Continue to the next endpoint
      }
    }
    
    // If we get here, none of the endpoints worked
    setError("Could not fetch food data from any endpoint");
    setLoading(false);
    // Set a fallback food list for testing
    setFoodList([
      {
        _id: "fallback1",
        name: "Test Pizza",
        description: "A fallback item for testing",
        price: 12.99,
        image: "pizza.jpg",
        category: "Pizza"
      },
      {
        _id: "fallback2",
        name: "Test Burger",
        description: "Another fallback item",
        price: 8.99,
        image: "burger.jpg",
        category: "Burger"
      }
    ]);
  };

  // Try to load cart from server if user is logged in
  const loadCartFromServer = async (userToken) => {
    try {
      const response = await axios.post(
        `${url}/api/cart/get`, 
        {}, 
        { headers: { token: userToken } }
      );
      
      if (response.data && response.data.cartItems) {
        // Only update cart if we got data from server
        setCartItems(response.data.cartItems);
        localStorage.setItem("cartItems", JSON.stringify(response.data.cartItems));
      }
    } catch (err) {
      console.error("Error loading cart from server:", err);
      // We'll keep using the localStorage cart if server fails
    }
  };

  useEffect(() => {
    // Load food list
    fetchFoodList();
    
    // Try to load cart from server if logged in
    if (token) {
      loadCartFromServer(token);
    }
  }, [token]);

  const clearCart = () => {
    setCartItems({});
  };
  

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    loading,
    error,
    clearCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;