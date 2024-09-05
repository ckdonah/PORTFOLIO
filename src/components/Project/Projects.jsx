import React from "react";
import Powerhour from "./Powerhour"; // Ensure correct path
import GridX from "./Gridx"; // Ensure correct path

function Projects() {
  return (
    <section className="projects-content">
      {/* Powerhour Project */}
      <div className="mb-20"> {/* Adds bottom margin */}
        <Powerhour />
      </div>

      {/* GridX Project */}
      <div>
        <GridX />
      </div>
    </section>
  );
}

export default Projects;
