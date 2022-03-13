// Main Imports
import { useState } from "react";
// Components
import { getData } from "../../../components/FetchData";
import Sidebar from "../../../components/Sidebar";
import Product from "../../../components/Product";
// Styles
import styles from "../../../styles/Products.module.css";
import Modal from "../../../components/Modal";

export const getStaticPaths = async () => {
  const data = await getData("/categories");

  const paths = data?.map((path) => ({
    params: { categoryName: path?.Name, catID: path?.ID?.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { categoryName, catID } = params;

  const products = await getData("/products?catID=" + catID);

  const categories = await getData("/categories");

  return {
    props: { products, categoryName, categories, catID },
  };
};

const Products = (props) => {
  const {
    products = [],
    categoryName = "Unknown",
    categories = [],
    catID,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [productData, setProductData] = useState({});

  const showModalWithId = (id, name) => {
    setShowModal(true);
    setProductData({ id, name });
  };

  return (
    <>
      <article className={styles.container}>
        <Sidebar categories={categories} active={categoryName} />
        <div className={styles.content}>
          <h1 className={styles.title}>{categoryName}</h1>
          <div className={styles["row"]}>
            {products?.map((p) => (
              <Product
                key={p.ID}
                product={p}
                categoryName={categoryName}
                catID={catID}
                showModalWithId={showModalWithId}
              />
            ))}
          </div>
        </div>
      </article>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          categoryName={categoryName}
          productData={productData}
          catID={catID}
        />
      )}
    </>
  );
};

export default Products;
