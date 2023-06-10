import "./Skills.scss";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import MotionWrap from "./MotionWrap";
// import { urlFor, client } from "./client";
import { Tooltip } from "react-tooltip";

const experiences = [{}];
const skills = [{}];

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type=="experiences"]';
  //   const skillsQuery = '*[_type=="skills"]';
  //   client.fetch(query).then((data) => {
  //     setExperience(data);
  //   });
  //   client.fetch(skillsQuery).then((data) => {
  //     setSkills(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">Skills and Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt="Skill-image" />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences?.works?.map((work, index) => (
            <>
              <motion.div
                key={index}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip
                data-for={work.name}
              >
                <h4 className="bold-text">{work.name}</h4>
                <p className="p-text">{work.company}</p>
              </motion.div>
              <Tooltip
                id={work.name}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                {work.desc}
              </Tooltip>
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default Wrapper(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
