// Main Imports
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Components
import { getData } from "../../../../../../components/FetchData";
import Ingrediant from "../../../../../../components/Ingrediant";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
// Styles
import styles from "../../../../../../styles/Ingrediants.module.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../../../../redux/cart/cart";

export const getStaticPaths = async () => {
  const categoreis = await getData("/categories");
  const products = await Promise.all(
    categoreis.map((cat) => {
      return getData("/products?catID=" + cat.ID);
    })
  );

  const initPaths = products?.map((prod, i) => {
    return prod.map((det) => ({
      params: {
        catID: categoreis[i]?.ID?.toString(),
        categoryName: categoreis[i]?.Name,
        prodID: det?.ID?.toString(),
        productName: det?.Name,
      },
    }));
  });

  let paths = [];
  for (let i in initPaths) {
    paths.concat(initPaths[i]);
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { categoryName, catID, productName, prodID } = params;
  const products = await getData("/products?catID=" + catID);
  const product = products.find((el) => el.ID === parseInt(prodID));

  return {
    props: { product },
  };
};

const ProductDetails = ({ product = {} }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [modProduct, setModProduct] = useState({});

  useEffect(() => {
    if (Object.keys(product).length) {
      setModProduct(product);
    }
  }, [product]);

  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className={styles.wrapper}>
        <h1>Loading...</h1>
      </div>
    );
  }

  const { Name, Description, Ingridents = [] } = modProduct;

  const increaseQuantity = (id) => {
    setModProduct((prev) => {
      return {
        ...prev,
        Ingridents: [...prev.Ingridents].map((ing) => {
          if (ing?.ID === id) {
            if (ing.Quantity < ing.MaxQuantity) {
              return {
                ...ing,
                Quantity: ing.Quantity + 1,
              };
            }
          }
          return ing;
        }),
      };
    });
  };

  const decreaseQuantity = (id) => {
    setModProduct((prev) => {
      return {
        ...prev,
        Ingridents: [...prev.Ingridents].map((ing) => {
          if (ing?.ID === id) {
            if (ing.Quantity > 0) {
              return {
                ...ing,
                Quantity: ing.Quantity - 1,
              };
            }
          }
          return ing;
        }),
      };
    });
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(modProduct));
    router.push("/cart");
  };

  return (
    <div className={styles.wrapper}>
      <article className="container">
        <section className={styles.header}>
          <h1>{Name}</h1>
          <p>{Description}</p>
        </section>
        <section className={styles.tabs}>
          <button className="btn">
            <FontAwesomeIcon icon={faBurger} fixedWidth size="3x" />
            <span>Ingredients</span>
          </button>
        </section>
        <section className={styles.ingrediants}>
          <table>
            <tbody>
              {Ingridents.length !== 0 &&
                Ingridents.map((el) => (
                  <Ingrediant
                    key={el.ID}
                    el={el}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                  />
                ))}
            </tbody>
          </table>
        </section>
        <section className={styles.links}>
          <Link href="/">
            <a className="smooth btn">Back</a>
          </Link>
          <a className="smooth btn" onClick={handleAddToCart}>
            Continue
          </a>
        </section>
      </article>
    </div>
  );
};

export default ProductDetails;
