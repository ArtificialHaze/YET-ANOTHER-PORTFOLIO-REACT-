import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, classNames) =>
  function HOC() {
    return (
      <motion.div
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
