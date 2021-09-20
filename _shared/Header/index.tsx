import router from "next/router";

import DevisshLogo from "@/assets/images/devissh-logo.svg";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles["header-ctr"]} onClick={() => router.push(`/`)}>
      <DevisshLogo />
    </header>
  );
};

export default Header;
