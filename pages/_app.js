// Main Imports
import { Provider } from "react-redux";
import store from "../redux/store";
// Components
import Layout from "../components/global/Layout";
// Styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
