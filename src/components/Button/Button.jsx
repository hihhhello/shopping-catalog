import React from "react";

import styles from "./Button.module.scss";

export const Button = ({ text, color, onClick }) => {
  return (
    <button onClick={onClick} className={[styles.btn, styles[color]].join(" ")}>
      {text}
    </button>
  );
};
