import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
