// Projects.js
import React from "react";
import ProjectCard from "./ProjectCard"; // Adjust the import path as necessary
import gridx from "../../assets/projects/gridx.webp";
import powerhourgym from "../../assets/projects/powerhourgym.webp";

function Projects() {
  return (
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
  );
}

export default Projects;
