import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list, loading, error } = useContext(StoreContext);

  console.log("FoodDisplay rendering with:", { 
    foodListExists: !!food_list, 
    foodListLength: food_list?.length || 0,
    loading,
    error,
    category
  });

  if (loading) {
    return (
      <div className="food-display" id="food-display">
        <h2>Loading dishes...</h2>
        <div className="food-display-list">
          <p>Please wait while we fetch the menu...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="food-display" id="food-display">
        <h2>Error loading dishes</h2>
        <div className="food-display-list">
          <p>{error}</p>
          <p>Please check your API connection and try again.</p>
        </div>
      </div>
    );
  }

  if (!food_list || food_list.length === 0) {
    return (
      <div className="food-display" id="food-display">
        <h2>No dishes available</h2>
        <div className="food-display-list">
          <p>There are currently no items in the menu.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;