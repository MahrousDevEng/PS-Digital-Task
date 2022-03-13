// Main Imports
import Link from "next/link";
import Image from "next/image";
// Styles
import styles from "../styles/Products.module.css";

const Product = ({ product, categoryName, showModalWithId, catID }) => {
  const {
    ID,
    Name = "Unknown",
    ImagePath = "",
    DefaultPrice = 0,
    HaveACombo = false,
  } = product;

  const categoryTag = categoryName?.trim().split(" ").join("-");
  const productTag = Name?.trim().split(" ").join("-");

  return (
    <section className={styles["col"]}>
      <div className={styles["product"]}>
        {HaveACombo ? (
          <a className="btn" onClick={() => showModalWithId(ID, Name)}>
            <Image src={ImagePath} alt={Name} width={250} height={250} />
            <h3 className="smooth">
              <span className="smooth">{Name}</span>
              <span className="smooth">
                <sup>aed</sup>
                {DefaultPrice}
              </span>
            </h3>
          </a>
        ) : (
          <Link
            href={`/category/${categoryTag}/${catID}/product/${productTag}/${ID}`}
          >
            <a>
              <Image src={ImagePath} alt={Name} width={250} height={250} />
              <h3 className="smooth">
                <span className="smooth">{Name}</span>
                <span className="smooth">
                  <sup>aed</sup>
                  {DefaultPrice}
                </span>
              </h3>
            </a>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Product;
