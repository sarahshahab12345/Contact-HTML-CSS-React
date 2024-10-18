import React from "react";
import styles from "./ContactButton.module.css";
import { MdMessage } from "react-icons/md";

function ContactButton(props) {
  return (
    <>
      <button className={props.isOutline ? styles.outline_btn : styles.dark_btn}>
        {props.icon}
        {props.text}
      </button>
    </>
  );
}

export default ContactButton;
