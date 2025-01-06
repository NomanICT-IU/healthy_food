import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ foodItems }) => {
  let errorMessage =
    foodItems.length === 0 ? <h2>There is no food available.</h2> : null;
  return <div className={styles.error}>{errorMessage}</div>;
};

export default ErrorMessage;
