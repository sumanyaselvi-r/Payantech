import React from "react";
import { motion } from "framer-motion";
import "../styles/Problem.css";
import ProblemVisual from "../assets/problem-vis.png"; // replace with your illustration

const ProblemSection = () => {
  return (
    <section className="problem-section">
      {/* Left Visual */}
      <motion.div
        className="problem-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img src={ProblemVisual} alt="Problem Visual" />
      </motion.div>

      {/* Right Text */}
      <motion.div
        className="problem-right"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="problem-title">
          Problems with Software, Payments, or Cloud Systems?
        </h2>
        <p className="problem-subtitle">
          Managing software, payments, cloud systems, and digital marketing can be overwhelming. Businesses waste time, face security risks, and miss growth opportunities without the right technology
       <br/><br/>We help businesses overcome these challenges with smart, secure, and simple technology solutions.
        </p>
       
      </motion.div>
    </section>
  );
};

export default ProblemSection;
