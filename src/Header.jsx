import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import profile from "./assets/profile.png";
import circle from "./assets/circle.svg";
import flutter from "./assets/flutter.png";
import redux from "./assets/redux.png";
import sass from "./assets/sass.png";
import Wrapper from "./Wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Vakho</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, delayChildren: 1.5 }}
        className="app__header-img"
      >
        <img src={profile} alt="Profile-image" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={circle}
          alt="Circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circle"
      >
        {[flutter, redux, sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={index}>
            <img src={circle} alt="Circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Wrapper(Header, "home");
