import React from "react";
import Projects from "../Project/Projects";
import "./Home.css";
import handIcon from "../../assets/icons/hand-icon.png";
function Home() {
  return (
    <div className="main">
      <section className="welcome-section page-section" id="home">
        <div className="welcome-icon-container">
          <img src={handIcon} alt="Hand Icon" className="welcome-icon" />
        </div>
        <div className="welcome-text">
          <h2>Hi there!</h2>
          <p>
            I'm Godwin Daniel, a Software Developer <br /> specializing in
            building web applications.
          </p>
        </div>
      </section>
      <div className="arrow-down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <hr className="content-divider" />
      
      {/* Projects Section */}
      <section className="projects-content" id="projects">
      <Projects />
      </section>
    </div>
  );
}

export default Home;
