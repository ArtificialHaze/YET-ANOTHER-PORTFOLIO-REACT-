import React, { useState } from "react";
import Wrapper from "./Wrapper";
import MotionWrap from "./MotionWrap";
// import { client } from "../../client";
import "./Footer.scss";
import emailImg from "./assets/email.png";
import mobile from "./assets/mobile.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    // client
    //   .create(contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee and chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={emailImg} alt="Email-image" />
          <a href="mailto:hello@micael.com" className="p-text">
            example@email.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={mobile} alt="Phone-Image" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +995 555 55 55 55
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Name.."
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Email.."
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Message.."
              style={{ resize: "none" }}
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch.</h3>
        </div>
      )}
    </>
  );
};

export default Wrapper(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
