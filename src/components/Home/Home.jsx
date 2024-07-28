import React from 'react';
import Project from '../Project/Project';
import ProjectCard from '../Project/ProjectCard';
import './Home.css'; 
import gridx from '../../assets/projects/gridx.webp'; // Adjusted path

function Home() {
  return (
    <main className="main">
      <div className="welcome-content" id="welcome">
        <p className="welcome-greeting">Hey there!</p>
        <h1 className="welcome-title">
          I'm Godwin Daniel, a Software Developer<br /> based in Berlin, Germany.
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

        <Project
          title="A fresh take on an AI toolkit for employees"
          subtitle="UX | UI | User research"
          description="KPMG employees balance many different responsibilities. What if there was a way to take the more time-consuming, menial tasks off their plate? Enter: KPMG GenAI Enterprise. I'll take you behind the scenes of how and why I designed this site."
          imgSrc="./images/Group 1.webp"
        />
        <Project
          title="A (hypothetical) new chapter for the Goodreads mobile app"
          subtitle="UX | UI | User research"
          description="One of my most loved apps gets a well-deserved refresh in this personal project. Check out how I did it."
          imgSrc="./images/Group 2.webp"
        />
        <Project
          title="An amplified digital presence for a local business"
          subtitle="UX | UI"
          description="Three Rivers Community Care is a Pittsburgh-based company offering in-home and community support services. They needed a refreshed website that was as impactful as their inspiring story."
          imgSrc="./images/Group 3.webp"
        />
      </div>
    </main>
  );
}

export default Home;
