import React from "react";
import { motion } from "framer-motion";
import "../styles/ValueProposition.css";

const ValueProposition = () => {
  return (
    <section className="value-section" id="value">
      <div className="value-container">
        <motion.div
          className="value-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="value-title">Why Businesses Choose Us</h2>
          <p className="value-subtitle">
            We craft smart, secure, and scalable tech solutions that help businesses simplify operations, boost efficiency, and grow faster.
          </p>
        </motion.div>

        <motion.div
          className="value-cards"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="value-card">
            <span className="icon">⚙️</span>
            <h3>Tailored for You</h3>
            <p>Every business is unique — our solutions are built to fit your goals, not the other way around.</p>
          </div>

          <div className="value-card">
            <span className="icon">⚡</span>
            <h3>Fast & Scalable</h3>
            <p>Designed to perform today and grow with you tomorrow.</p>
          </div>

          <div className="value-card">
            <span className="icon">🔒</span>
            <h3>Secure by Design</h3>
            <p>We combine innovation with reliability to keep your systems and data safe.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
