// Main Imports
import Image from "next/image";
// Components
import InputNumber from "./InputNumber";
// Styles
import styles from "../styles/Ingrediants.module.css";

const Ingrediant = ({ el, increaseQuantity, decreaseQuantity }) => {
  const { ImagePath = "", Name = "Unknown", Price = 0 } = el;
  return (
    <tr>
      <td>
        <Image src={ImagePath} alt={Name.trim()} width={70} height={40} />
      </td>
      <td className={styles["ingredient-name"]}>
        <span>Add {Name.trim()}</span>
      </td>
      <td>AED {Price}</td>
      <td>
        <div className={styles["ingredient-control"]}>
          <InputNumber
            el={el}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        </div>
      </td>
    </tr>
  );
};

export default Ingrediant;
