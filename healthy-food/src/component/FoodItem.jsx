import styles from "./FoodItem.module.css";
const FoodItem = ({ item, handleAddBtn, bought }) => {
  return (
    <div>
      <li
        className={`${styles.listGroup} list-group-item ${
          bought ? "active" : ""
        }`}
      >
        {item}
        <button
          className={`${styles.addBtn} btn btn-primary`}
          onClick={handleAddBtn}
        >
          Add
        </button>
      </li>
    </div>
  );
};

export default FoodItem;
