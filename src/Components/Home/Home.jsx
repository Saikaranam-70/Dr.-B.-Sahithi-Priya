import React from "react";
import "./Home.css";
import image from "../../assets/image.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="parent">
      {/* Left Section (Text) */}
      <motion.div
        ref={leftRef}
        initial={{ opacity: 0, x: -100 }}
        animate={leftInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="div1"
      >
        <h1 className="doctor-name">Dr. B. Sahithi Priya</h1>
        <h2 className="designation">
          Endocrine and Oncoplastic Breast Surgeon
        </h2>
        <span className="qualification">
          M.S (General Surgery), M.Ch (Endocrine Surgery)
        </span>
        <div className="inner">
          <button className="button">Book An Appointment</button>
          <span className="experience">6+ Years Experience</span>
        </div>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        ref={rightRef}
        initial={{ opacity: 0, x: 100 }}
        animate={rightInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="div2"
      >
        <img src={image} alt="Doctor" className="doctor-imag" />
      </motion.div>
    </div>
  );
};

export default Home;
