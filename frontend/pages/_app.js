import { useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import Theme from "../theme/theme";
import Layout from "../components/layout";
import "../styles/global.css";

import AlertState from "../Context/Alert/AlertState";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <AlertState>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AlertState>
    </ThemeProvider>
  );
}