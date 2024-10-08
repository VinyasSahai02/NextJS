import "../styles/globals.css";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

//this is the main file in NEXT

//layput component is used see carefully