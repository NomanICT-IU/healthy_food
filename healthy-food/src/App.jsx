import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./component/Container";
import ErrorMessage from "./component/ErrorMessage";
import FoodItems from "./component/FoodItems";
import ItemInput from "./component/ItemInput";

const App = () => {
  const [foodItems, setFoodItems] = useState(["Rice", "Bread", "Green Vegetable"]);

  let handleInputChange = () => {
    if (event.key === "Enter") {
      let newItem = event.target.value;
      event.target.value = "";
      let newFoodItems = [...foodItems, newItem];
      setFoodItems(newFoodItems);
    }
  };
  // const foodItems = [];
  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <ItemInput handleInputChange={handleInputChange}></ItemInput>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
    </>
  );
};

export default App;
