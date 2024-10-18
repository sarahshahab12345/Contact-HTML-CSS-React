import React from "react";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <>
      <nav>
        <div className={styles.nav}>
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
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
