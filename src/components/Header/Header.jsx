import React from "react";
import cx from "class-names";

import Button from "../../ui/Button/Button";
import logoImg from "../../assets/img/Logo.svg";
import styles from "./Header.module.sass";

const { header, headerWrapper, logo, headerButton } = styles;
const wrapperClasses = cx("wrapper", headerWrapper);

export default function Header() {
  return (
    <header className={header}>
      <div className={wrapperClasses}>
        <img src={logoImg} alt="logo" className={logo} />

        <div>
          <Button className={headerButton} href="#users">
            Users
          </Button>
          <Button href="#signup">Sign up</Button>
        </div>
      </div>
    </header>
  );
}
