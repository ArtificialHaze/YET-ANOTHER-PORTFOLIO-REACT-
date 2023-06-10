import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import about01 from "./assets/about01.png";
import about02 from "./assets/about02.png";
import about03 from "./assets/about03.png";
import about04 from "./assets/about04.png";
import Wrapper from "./Wrapper";
import MotionWrap from "./MotionWrap";
// import { urlFor, client } from "./client";

const abouts = [
  {
    title: "Web Development",
    desc: "I am a good Web Developer",
    imgUrl: about01,
  },
  {
    title: "Web Design",
    desc: "I am a good Web Designer",
    imgUrl: about02,
  },
  {
    title: "UI / UX",
    desc: "I am a good UI / UX Designer",
    imgUrl: about03,
  },
  {
    title: "Coder",
    desc: "I am a good Coder",
    imgUrl: about04,
  },
];

const About = () => {
  const [about, setAbout] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type=="abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbout(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Development </span> <br />
        means <span> Good Business </span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={about.imgUrl} alt="About-Image" />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Wrapper(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
