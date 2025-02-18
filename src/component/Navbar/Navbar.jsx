

import React from "react";
// import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";


const Navbar = () => {

  return (
      <>
          <nav className={styles.navbar}>
              <Logo />
              <SearchBar search={"Search a song of your choice"} />
              <Button children={"Give Feedback"} />
          </nav>

      </>

  );
}

export default Navbar;

