import React from "react";
import ProjectCard from "../Project/ProjectCard";
import "./Home.css";
import gridx from "../../assets/projects/gridx.webp";

function Home() {
  return (
    <main className="main">
      <div className="welcome-content" id="welcome">
        <p className="welcome-greeting">Hey there!</p>
        <h1 className="welcome-title">
          I'm Godwin Daniel, a Software Developer
          <br /> based in Berlin, Germany.
        </h1>
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
          codeUrl="https://github.com/ckdonah/"
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
