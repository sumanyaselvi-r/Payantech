import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Navbar.css";
import LogoImg from "../assets/Payatech_PNG.png"; 
const Navbar = () => {
  const navItems = ["Home", "About", "Services", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="navbar"
    >
      {/* Logo */}
      <div className="logo">
        <img src={LogoImg} alt="Logo" />
      </div>

      {/* Hamburger menu for mobile */}
      {isMobile && (
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? "bar rotate1" : "bar"}></span>
          <span className={isOpen ? "bar fade" : "bar"}></span>
          <span className={isOpen ? "bar rotate2" : "bar"}></span>
        </div>
      )}

      {/* Navigation Links */}
      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.ul
            className={`nav-links ${isOpen ? "open" : ""}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <li key={item} className="nav-item">
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
