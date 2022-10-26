import React from "react";
import cx from "class-names";
import styles from "./Signup.module.sass";
import FormSignup from "../FormSignup/FormSignup";

export default function Signup() {
  const classes = cx("wrapper", styles.inner);
  return (
    <div>
      <h2 className={styles.title}>Working with POST request</h2>
      <div className={classes}>
        <FormSignup />
      </div>
    </div>
  );
}
