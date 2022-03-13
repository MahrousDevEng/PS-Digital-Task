// Main Imports
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// Components
import NavbarCart from "./NavbarCart";
// Styles
import styles from "../../styles/components/Navbar.module.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const pageLinks = [
  { to: "/", text: "Story" },
  { to: "/", text: "Food" },
  { to: "/", text: "Locations" },
];

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <span className={styles.brand}>
          <Image src="/logo.png" alt="Texas Logo" width={106} height={92} />
        </span>
        <button
          className={styles.toggler}
          onClick={() => setCollapse((prev) => !prev)}
        >
          <span></span>
        </button>
        <div className={`${styles.collapse} ${collapse ? styles.show : null}`}>
          <ul className={styles["page-links"]}>
            {pageLinks?.map((link) => (
              <li key={link.text}>
                <Link href={link.to}>
                  <a className="smooth">{link.text}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ol className={styles.options}>
            <li className={styles.account}>
              <FontAwesomeIcon icon={faUserCircle} />
            </li>
            <li className={styles.cart}>
              <a
                className={styles["cart-toggler"]}
                onClick={() => setShowCart((prev) => !prev)}
              >
                <Image src="/cart.png" alt="texas" width={28} height={28} />
              </a>
              {showCart && <NavbarCart />}
            </li>
            <li className={styles.locations}>
              <FontAwesomeIcon icon={faGlobeAmericas} />
            </li>
            <li className={styles.lang}>
              <Link href="/">
                <a>عربي</a>
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
