import React, { useState } from "react";
import "./Testimonial.scss";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Wrapper from "./Wrapper";
import MotionWrap from "./MotionWrap";
// import { urlFor, client } from "./client";

const experiences = [{}];
const skills = [{}];

const Testimonial = () => {
  const [brands, setbrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const query = '*[_type=="testimonials"]';
  //   const brandsQuery = '*[_type=="brands"]';
  //   client.fetch(brandsQuery).then((data) => {
  //     setBrands(data);
  //   });
  //   client.fetch(query).then((data) => {
  //     setTestimonials(data);
  //   });
  // }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonials[currentIndex].imgUrl}
              alt="Testimonial-Image"
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand, index) => (
          <motion.div
            transition={{ duration: 0.5, type: "tween" }}
            key={index}
            whileInView={{ opacity: [0, 1] }}
          >
            <img src={brand.imgUrl} alt="Brand-Image" />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Wrapper(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
