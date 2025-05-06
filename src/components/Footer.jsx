import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} StayEase. All rights reserved.</p>
        <p>Designed with Love for seamless living.</p>
      </div>
    </footer>
  );
};

export default Footer;
