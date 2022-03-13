// Main Imports
import Link from "next/link";
import Image from "next/image";
//Styles
import styles from "../styles/components/Category.module.css";

const Category = ({ cat }) => {
  const { ID, Name = "UnKnown", ImagePath = "" } = cat;

  const categorTag = Name?.trim().split(" ").join("-");

  return (
    <section className={styles.col}>
      <div className={styles.category}>
        <Link href={`/category/${categorTag}/${ID}`}>
          <a className={styles["category-img"]}>
            <Image src={ImagePath} alt={Name} width={250} height={250} />
          </a>
        </Link>
        <Link href={`/category/${Name}/${ID}`}>
          <a>
            <h3 className="smooth">
              <span className={`smooth ${styles.title}`}>{Name}</span>
            </h3>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Category;
