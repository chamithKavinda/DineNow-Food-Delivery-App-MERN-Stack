import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      if (response.data.success) {
        // Fix: Access foods array instead of data
        setList(response.data.foods || []);
      } else {
        toast.error(response.data.message);
        setList([]);
      }
    } catch (error) {
      console.error("Error fetching food list:", error);
      toast.error("Failed to fetch food list");
      setList([]);
    } finally {
      setLoading(false);
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error removing food");
      }
      await fetchList();
    } catch (error) {
      console.error("Error removing food:", error);
      toast.error("Failed to remove food");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : list && list.length > 0 ? (
          list.map((item, index) => (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={() => removeFood(item._id)} className="cursor">
                X
              </p>
            </div>
          ))
        ) : (
          <div className="no-items">No food items available</div>
        )}
      </div>
    </div>
  );
};

export default List;