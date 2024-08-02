import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-right">
          <a
            href="https://drive.google.com/file/d/1RFbPwd4EIxYhBA6Gbsrtm7_lYIeruUh3/view?usp=sharing"
            className="footer-link"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/godwinonah007"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a href="https://github.com/ckdonah" className="footer-link">
            Github
          </a>
          <a href="mailto:ckdonah@gmail.com" className="footer-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
