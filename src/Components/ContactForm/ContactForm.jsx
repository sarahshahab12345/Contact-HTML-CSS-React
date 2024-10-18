import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import ContactButton from "../ContactButton/ContactButton";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import ContactImg from "../../assets/images/Contact.png";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const formName = event.target[0].value;
    const formEmail = event.target[1].value;
    const formText = event.target[2].value;

    setName(formName);
    setEmail(formEmail);
    setText(formText);

    console.log({
      name: formName,
      email: formEmail,
      text: formText,
    });
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <ContactButton
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px" />}
            />
            <ContactButton
              text="VIA CALL"
              icon={<FaPhoneAlt fontSize="24px" />}
            />
          </div>
          <ContactButton
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<GrMail fontSize="24px" />}
          />

          <form onSubmit={onSubmit}>
            {/* <div>{"Name: " + name + " Email: " + email + " Message: " + text}</div> */}
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="text">Message</label>
              <textarea name="text" rows="4" />
            </div>
            <div className={styles.submit_btn}>
              <ContactButton text="SUBMIT" />
            </div>
          </form>
        </div>
        <div className={styles.contact_image}>
          <img src={ContactImg} alt="Contact image" />
        </div>
      </section>
    </>
  );
}

export default ContactForm;
