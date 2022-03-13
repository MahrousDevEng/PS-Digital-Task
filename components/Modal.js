// Main Imports
import Link from "next/link";
import Image from "next/image";
// Styles
import styles from "../styles/components/Modal.module.css";

const Modal = ({
  setShowModal,
  categoryName = "Unknown",
  productData,
  catID,
}) => {
  const categoryTag = categoryName?.trim().split(" ").join("-");
  const productTag = productData?.name.trim().split(" ").join("-");

  return (
    <article className={styles.overlay} onClick={() => setShowModal(false)}>
      <section className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>ORDER NOW</h3>
          <button className="btn smooth" onClick={() => setShowModal(false)}>
            <span>×</span>
          </button>
        </div>
        <div className={styles.body}>
          <Link
            href={`/category/${categoryTag}/${catID}/product/${productTag}/${productData.id}`}
          >
            <a>
              <Image src="/mealicon.webp" alt="combo" width={70} height={70} />
              <span className="smooth">Combo</span>
            </a>
          </Link>
          <Link
            href={`/category/${categoryTag}/${catID}/product/${productTag}/${productData.id}`}
          >
            <a>
              <Image
                src="/sandicon.webp"
                alt="sandwich"
                width={70}
                height={70}
              />
              <span className="smooth">Sandwich</span>
            </a>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default Modal;
