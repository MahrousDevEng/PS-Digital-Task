// Main Imports
import Link from "next/link";
// Styles
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles["not-found"]}>
      <div className="container">
        <h1>404</h1>
        <p>Sorry the page not found</p>
        <Link href="/">
          <a className="smooth">Go Back</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
