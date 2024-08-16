import React from "react";
import ProjectCard from "../Project/ProjectCard";
import "./Home.css";
import gridx from "../../assets/projects/gridx.webp";
import powerhourgym from "../../assets/projects/powerhourgym.webp";
import handIcon from "../../assets/icons/hand-icon.png";

function Home() {
  return (
    <main className="main">
      <div className="welcome-section" id="welcome">
        <div className="welcome-icon-container">
          <img src={handIcon} alt="Hand Icon" className="welcome-icon" />
        </div>
        <div className="welcome-text">
          <h2>Hi there!</h2>
          <p>
            I'm Godwin Daniel, a Software Developer <br /> based in Berlin, Germany.
          </p>
        </div>
      </div>

      <div className="projects-content" id="projects">
        <h2>Projects</h2>

        <ProjectCard
          image={gridx}
          altTitle="gridx"
          imageUrl="https://gridxportfolio.netlify.app/"
          title="gridx portfolio"
          description="GridX is a responsive portfolio template with a clean design and smooth animations, built with HTML, CSS, and JavaScript."
          demoUrl="https://gridxportfolio.netlify.app/"
          codeUrl="https://github.com/ckdonah/gridX"
        />

        <ProjectCard
          image={powerhourgym}
          altTitle="powerhourgym"
          imageUrl="https://powerhourgym.netlify.app"
          title="POWERHOUR GYM"
          description="Powerhour Gym is a responsive gym website offering a sleek design and an intuitive user experience, built with the MERN stack (MongoDB, Express.js, React, Node.js)."
          demoUrl="https://powerhourgym.netlify.app"
          codeUrl="https://github.com/ckdonah/POWERHOUR-FITNESS"
        />
        
        <ProjectCard
          image={gridx}
          altTitle="gridx"
          imageUrl="https://gridxportfolio.netlify.app/"
          title="gridx portfolio"
          description="GridX is a responsive portfolio template with a clean design and smooth animations, built with HTML, CSS, and JavaScript."
          demoUrl="https://gridxportfolio.netlify.app/"
          codeUrl="https://github.com/ckdonah/"
        />
      </div>
    </main>
  );
}

export default Home;
