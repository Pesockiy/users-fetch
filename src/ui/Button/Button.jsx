import React from "react";
import cn from "class-names";
import styles from "./Button.module.sass";

export default function Button(props) {
  const { type, children, className, onClick, disabled, href, active } = props;

  const classes = cn(styles.button,disabled ? styles.disabled : '', className, active ? styles.active : "");

  return href ? (
    <a className={classes} href={href}>
      {children}
    </a>
  ) : (
    <button disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
