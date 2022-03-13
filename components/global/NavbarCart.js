// Main Imports
import Link from "next/link";
import Image from "next/image";
// Styles
import styles from "../../styles/components/Navbar.module.css";
// Redux
import { useSelector } from "react-redux";

const NavbarCart = () => {
  const productsInCart = useSelector((state) => state.cart);

  const totalPrice = (productsInCart) => {
    const subTotal = productsInCart.reduce(
      (prev, current) => prev + current.Price * current.Quantity,
      0
    );
    return subTotal * 1.14;
  };

  return (
    <div
      className={
        productsInCart?.length
          ? `${styles["cart-content"]} ${styles["not-empty"]}`
          : `${styles["cart-content"]}`
      }
    >
      {productsInCart?.length ? (
        <div>
          <h6 className="title">My cart contains:</h6>
          <ul>
            {productsInCart?.map((prod) => (
              <li key={prod.ID}>
                <div className={styles["cart-image"]}>
                  <Image
                    src={prod.ImagePath}
                    alt={prod.Name.trim()}
                    width={90}
                    height={90}
                  />
                </div>
                <div className={styles.details}>
                  <p>{prod.Name.trim()}</p>
                  <span>
                    {prod.Quantity} x AED {parseFloat(prod.Price).toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <p className={styles.total}>
            Subtotal:{" "}
            <span>{parseFloat(totalPrice(productsInCart)).toFixed(2)}</span>
          </p>
          <section>
            <Link href="/cart">
              <a>view cart</a>
            </Link>
            <Link href="/">
              <a>checkout</a>
            </Link>
          </section>
        </div>
      ) : (
        <div>
          <p className={styles["cart-title"]}>Your Cart is Empty</p>
          <Link href="/">
            <a className={styles["order-now"]}>Order Now</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarCart;
