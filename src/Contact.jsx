import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import contact from "./assets/contact-img.png";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message Send");

    emailjs
      .sendForm(
        "service_7h44gl1",
        "template_3yt2bxr",
        form.current,
        "8b0vMzPp_hvudeaR6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <div className="contact_detail">
        <div className="cimage">
          <img src={contact} alt="contact" />
        </div>
        <div className="form_control">
          <form ref={form} onSubmit={sendEmail} netlify>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" required />
            <label htmlFor="text">Message</label>
            <textarea id="message" name="message" rows="8" required />
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
