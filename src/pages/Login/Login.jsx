import React from "react";
import styles from "./Login.module.scss";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

export const Login = () => {
  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <button onClick={login} className={styles.btn}>
          Log in with google
        </button>
      </div>
    </>
  );
};
