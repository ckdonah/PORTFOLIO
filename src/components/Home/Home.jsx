// Home.js
import React from "react";
import Projects from "../Project/Projects"; // Import the Projects component
import "./Home.css";
import handIcon from "../../assets/icons/hand-icon.png";

function Home() {
  return (
    <main className="main">
      {/* Welcome Section */}
      <div className="welcome-section" id="welcome">
        <div className="welcome-icon-container">
          <img src={handIcon} alt="Hand Icon" className="welcome-icon" />
        </div>
        <div className="welcome-text">
          <h2>Hi there!</h2>
          <p>
            I'm Godwin Daniel, a Software Developer <br /> specializing in building web applications.
          </p>
        </div>
      </div>
      <hr className="content-divider" /> {/* Add this line */}

      
      <div className="projects-content" id="projects">
        <Projects /> 
      </div>
    </main>
  );
}

export default Home;
