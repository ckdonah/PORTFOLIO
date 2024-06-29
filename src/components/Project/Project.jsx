import React from 'react';
import './Project.css';

function Project({ title, subtitle, description, imgSrc }) {
  return (
    
    <div className="project">
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-subtitle">{subtitle}</p>
        <p className="project-description">{description}</p>
        <button className="project-button">Enter password</button>
      </div>
      <div className="project-image-container">
        <img src={imgSrc} alt={title} className="project-image" />
      </div>
    </div>
  );
}

export default Project;
