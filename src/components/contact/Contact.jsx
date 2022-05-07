import React from "react";
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md'


const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


    <div className="containercontact__container">
      <div className="contact__options">
        <article className="contact__option">
          <h4>Email</h4>
          <h5>lesliee.icc@gmail.com</h5>
          <a href="mailto: lesliee.icc@gmail.com">Send a message</a>
        </article>
      </div>
    </div>
    </section>
  );
};

export default Contact;
