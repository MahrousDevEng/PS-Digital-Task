// Main Imports
import Link from "next/link";
// Styles
import styles from "../styles/components/Sidebar.module.css";

const Sidebar = ({ categories = [], active }) => {
  return (
    <aside className={styles.sidebar}>
      <ul>
        {categories?.map((el) => (
          <li key={el.ID}>
            <Link href={`/category/${el.Name}/${el.ID}`}>
              <a
                className={`smooth ${
                  active === el.Name ? styles.active : null
                }`}
              >
                {el.Name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
