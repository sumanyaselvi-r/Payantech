import React from "react";
import { motion } from "framer-motion";
import "../styles/WhatWeDo.css";

const services = [
  {
    title: "Creative Work",
    description: "Transform imagination into reality with our creative design approach.",
  },
  {
    title: "Guaranteed Success",
    description: "We turn your goals into achievements with data-driven results.",
  },
  {
    title: "Innovative Ideas",
    description: "    We think differently to create solutions that inspire growth.       ",
  },
];

const WhatWeDo = () => {
  return (
    <section className="whatwedo">
      <h2 className="whatwedo-title">What We Do</h2>
      <div className="whatwedo-flow">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="whatwedo-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>

            {index < services.length - 1 && (
              <div className="connector-line">
                <span className="glow-pulse"></span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
