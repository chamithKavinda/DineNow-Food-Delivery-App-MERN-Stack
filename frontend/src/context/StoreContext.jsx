import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
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
        console.log(`Response from ${endpoint}:`, response);
        
        if (response.data) {
          console.log("Data structure:", Object.keys(response.data));
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
            console.log("Found food data:", foodData);
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

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

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
    error
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;