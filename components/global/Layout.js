// Main Imports
import Head from "next/head";
// Components
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Texas Chicken, SERVING REALLY GOOD CHICKEN TO THOSE WHO ENJOY REALLY GOOD CHICKEN. THE TEXAS WAY"
        />
        <meta
          name="keywords"
          content="Texas Chicken, Texas Chicken Menu, Texas Chicken home delivery, Texas Chicken Mobile App, Texas Chicken locations, Texas Chicken Story "
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
