// Main Imports
import Link from "next/link";
import Image from "next/image";
// Components
import InputNumber from "../components/InputNumber";
// Styles
import styles from "../styles/CartPage.module.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { decrement, deleteFood, increment } from "../redux/cart/cart";

const CartPage = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const calcSubTotal = (cartProducts) => {
    return cartProducts.reduce(
      (prev, current) => prev + current.Price * current.Quantity,
      0
    );
  };

  const totalPrice = (cartProducts) => {
    return calcSubTotal(cartProducts) * 1.14;
  };

  return (
    <article className={styles.wrapper}>
      {cartProducts?.length ? (
        <div className="container">
          <h1 className={styles.title}>Shopping Cart</h1>
          <Link href="/">
            <a className={`smooth ${styles["add-more"]}`}>+ Add More Food</a>
          </Link>
          <div className={styles.row}>
            <section className={styles.details}>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>product</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts?.map((prod) => (
                    <tr key={prod.ID}>
                      <td>
                        <button
                          className={`btn smooth ${styles.delete}`}
                          onClick={() => dispatch(deleteFood(prod.ID))}
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </td>
                      <td>
                        <Image
                          src={prod.ImagePath}
                          alt=""
                          width={138}
                          height={100}
                        />
                      </td>
                      <td className={styles["food-details"]}>
                        <h3>{prod.Name.trim()}</h3>
                        {prod.Ingridents && (
                          <ul>
                            {prod?.Ingridents.filter(
                              (ing) => ing.Quantity > 0
                            )?.map((ing) => (
                              <li key={ing.ID}>
                                X {ing.Quantity} - {ing.Name.trim()}
                              </li>
                            ))}
                          </ul>
                        )}
                      </td>
                      <td>
                        AED
                        <br />
                        {parseFloat(prod.Price).toFixed(2)}
                      </td>
                      <td>
                        <InputNumber
                          el={prod}
                          increaseQuantity={(id) => dispatch(increment(id))}
                          decreaseQuantity={(id) => dispatch(decrement(id))}
                        />
                      </td>
                      <td>
                        AED
                        <br />
                        {parseFloat(prod.Price * prod.Quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            <section className={styles.payment}>
              <h3 className={styles["pay-title"]}>Payment Summary</h3>
              <p className={styles.subtotal}>
                <span>Subtotal</span>
                <span>
                  AED {parseFloat(calcSubTotal(cartProducts)).toFixed(2)}
                </span>
              </p>
              <p className={styles.subtotal}>
                <span>Delivery Surcharge</span>
                <span>
                  AED {parseFloat(0.14 * calcSubTotal(cartProducts)).toFixed(2)}
                </span>
              </p>
              <hr className={styles.hr} />
              <p className={styles.total}>
                <span>total</span>
                <span>
                  AED {parseFloat(totalPrice(cartProducts)).toFixed(2)}
                </span>
              </p>
              <div className={styles.final}>
                <a href="#" className="btn smooth">
                  add to favourites
                </a>
                <a href="#" className="btn smooth">
                  checkout
                </a>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className={styles.title}>Shopping Cart</h1>
          <h2>No Items In Cart</h2>
          <Link href="/">
            <a
              style={{
                backgroundColor: "var(--main-color)",
                padding: "0.5rem 1rem",
                borderRadius: "9px",
                fontWeight: 700,
              }}
            >
              Back Home
            </a>
          </Link>
        </div>
      )}
    </article>
  );
};

export default CartPage;
