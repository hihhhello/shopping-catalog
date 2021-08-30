import React from "react";
import NavButton from "../NavButton";
import styles from "./Navbar.module.scss";
import { useHistory } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { ADD_ROUTE, CATALOG_ROUTE } from "../../utils/consts";
export const Navbar = () => {
  const history = useHistory();
  return (
    <nav className={styles.main}>
      <h2 onClick={() => history.push(CATALOG_ROUTE)} className={styles.logo}>
        Catalog
      </h2>
      <div className={styles.buttons}>
        <>
          <NavButton
            text={"Add product"}
            onClick={() => history.push(ADD_ROUTE)}
          />
          <NavButton text={"Logout"} onClick={() => signOut(auth)} />
        </>
      </div>
    </nav>
  );
};
