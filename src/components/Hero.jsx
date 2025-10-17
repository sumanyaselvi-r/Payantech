import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import HeroVisual from "../assets/hero-visual.png"; // replace with your visual image

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Left Text */}
      <div className="hero-left">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Smart Solutions for Your Business Growth
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-subtitle"
        >
        From smart software to secure digital solutions, we help businesses simplify operations, save time, and grow faster.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hero-cta"
        >
          <a href="#services">Explore Services</a>
        </motion.button>
      </div>

      {/* Right Visual */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={HeroVisual} alt="Hero Visual" />
      </motion.div>
    </section>
  );
};

export default Hero;
