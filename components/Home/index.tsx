import Head from "next/head";
import router from "next/router";

import Header from "_shared/Header";
import DevisshTypographicLogo from "assets/images/devissh-typographic.svg";

import styles from "./home.module.scss";
import Button from "@/_shared/Button";

const Main = () => {
  return (
    <div className={styles["banner-ctr"]}>
      <h1 className={styles["company-name"]}>
        <DevisshTypographicLogo />
      </h1>

      <h4>We are a web apps development company.</h4>
      <br />

      <div className={styles["button-ctr"]}>
        <Button name="Let's Talk" action={() => router.push(`/connect`)} />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Head>
        <title> Devissh</title>
      </Head>
      <Header />
      <main>
        <Main />
      </main>
    </div>
  );
};

export default Home;
