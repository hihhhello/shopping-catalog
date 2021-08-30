import React from "react";
import styles from "./NavButton.module.scss";

export const NavButton = ({ text, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};
