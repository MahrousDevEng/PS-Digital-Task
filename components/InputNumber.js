// Styles
import styles from "../styles/components/InputNumber.module.css";

const InputNumber = ({ el, increaseQuantity, decreaseQuantity }) => {
  const { Quantity = 1, ID } = el;

  return (
    <div className={styles.container}>
      <button className={styles.decrease} onClick={() => decreaseQuantity(ID)}>
        -
      </button>
      <span>{Quantity}</span>
      <button className={styles.increase} onClick={() => increaseQuantity(ID)}>
        +
      </button>
    </div>
  );
};

export default InputNumber;
