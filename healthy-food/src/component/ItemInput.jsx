import styles from "./ItemInput.module.css";
const ItemInput = ({handleInputChange}) => {
  
  return (
    <>
      <input
        type="text"
        placeholder="Food item input here"
        className={styles.itemInput}
        onKeyDown={handleInputChange}
      />
    </>
  );
};

export default ItemInput;
