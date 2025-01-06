import FoodItem from "./FoodItem";
import { useState } from "react";
const FoodItems = ({ foodItems }) => {

  const [items, setItems] = useState([]);
  let handleAddBtn = (item) => {
    let newItems = [...items, item];
    setItems(newItems);
  };

  return (
    <div>
      <ul className="list-group list-group-flush">
        {foodItems.map((item, index) => (
          <FoodItem item={item} key={index} handleAddBtn = {()=>handleAddBtn(item)}
          bought = {items.includes(item) }
          ></FoodItem>
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;
