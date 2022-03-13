// Main Imports
import Head from "next/head";
// Components
import Category from "../components/Category";
import { getData } from "../components/FetchData";
// Styles
import styles from "../styles/Menu.module.css";

export const getStaticProps = async () => {
  const data = await getData("/categories");

  return {
    props: { categories: data },
  };
};

const Home = ({ categories }) => {
  return (
    <article className={styles.content}>
      <Head>
        <title>Food - Texas Chicken®</title>
      </Head>
      <div className={styles.stamp}>
        <div className="container">
          <div className={styles.row}>
            {categories?.map((cat) => (
              <Category key={cat.ID} cat={cat} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
