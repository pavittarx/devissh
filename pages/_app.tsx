import type { AppProps } from "next/app";

import "@/assets/styles/normalize.css";
import "@/assets/styles/index.css";
import "@/assets/styles/variables.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
