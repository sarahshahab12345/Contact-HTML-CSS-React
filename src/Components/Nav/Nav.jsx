import React from "react";
import styles from "./Nav.module.css";
import Logo from "../../assets/images/logo.png";

function Nav() {
  return (
    <>
      <nav>
        <div className={styles.nav}>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
