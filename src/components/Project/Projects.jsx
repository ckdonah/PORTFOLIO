import React from "react";
import Powerhour from "./Powerhour"; 
import GridX from "./Gridx"; 

function Projects() {
  return (
    <section className="projects-content">
    
      <div className="mb-20"> 
        <Powerhour />
      </div>

  
      <div>
        <GridX />
      </div>
    </section>
  );
}

export default Projects;
