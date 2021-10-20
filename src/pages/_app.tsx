import "@styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import theme from "ui/themes/theme";
import { Header, Footer } from "ui/components";
import { AppContainer } from "ui/styles/pages/_app.style";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fabiana Modas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header></Header>
          <Component {...pageProps} />
          <Footer></Footer>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
