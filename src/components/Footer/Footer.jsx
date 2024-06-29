import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="footer-left">
          <p className="footer-name">Godwin Daniel</p>
          <p className="footer-title">Software Developer</p>
        </div> */}
        <div className="footer-right">
          <a href="resume-link" className="footer-link">Resume</a>
          <a href="https://www.linkedin.com/in/godwinonah007" className="footer-link">LinkedIn</a>
          <a href="dribbble-link" className="footer-link">Dribbble</a>
          <a href="mailto:ckdonah@gmail.com" className="footer-link">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
