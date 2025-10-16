import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.css";
import LogoImg from "../assets/Payatech_PNG.png"; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="logo">
          <img src={LogoImg} alt="Logo" />
        </div>

        <div className="footer-links">
      <FaMapMarkerAlt/>Tenkasi Main Road, Punnaiyapuram, Puliyangudi, Tenkasi - 627855
        </div>

        <div className="footer-socials">
          <a href="#Contact"><FaFacebookF /></a>
          <a href="#Contact"><FaTwitter /></a>
          <a href="#Contact"><FaLinkedinIn /></a>
          <a href="#Contact"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PAYANTECH. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
