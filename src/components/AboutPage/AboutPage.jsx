import React, { useState } from "react";
import "./AboutPage.css";
import Skillscontainer from "../Skill/SkillsContainer";

function AboutPage() {
  const [activeTab, setActiveTab] = useState("learning");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about-page">
      <section className="about">
        <div className="about-container">
          <div className="about-content">
            <h1 className="about-title">Nice to meet you!</h1>
            <h3 className="about-subtitle">
              I'm Godwin Daniel, a Software Developer with experience in
              combining technical expertise and creativity to design and develop
              functional, visually appealing software solutions. My work spans
              across various industries, including commercial, healthcare, and
              non-profit sectors, always with a focus on delivering high-quality
              user experiences that align with business goals.
            </h3>
            <p className="about-description">
              My friends describe me as kind, detail-oriented, innovative, and
              a good listener - skills I strive to bring into every aspect of my work. 
            </p>
            
          </div>
          <div className="about-image-container">
            <img
              src="/images/about_img_me.jpg"
              alt="OGD"
              className="about-image"
            />
          </div>
          
        </div>
        <hr className="content-divider" /> 
      </section>

      {/* "Some things that I'm..." Section */}
      <section className="skills-section">
        <h2>Some things that I'm...</h2>
        <div className="tabs-container">
          <button
            className={`tab-button ${activeTab === "learning" ? "active" : ""}`}
            onClick={() => handleTabClick("learning")}
          >
            Learning
          </button>
          <button
            className={`tab-button ${activeTab === "proud" ? "active" : ""}`}
            onClick={() => handleTabClick("proud")}
          >
            Proud of
          </button>
          <button
            className={`tab-button ${activeTab === "excited" ? "active" : ""}`}
            onClick={() => handleTabClick("excited")}
          >
            Excited about
          </button>
        </div>

        <div className="content-container">
          {activeTab === "learning" && (
            <ul>
              <li>Illustration in Procreate</li>
              <li>How to bake the perfect gluten-free cookie</li>
              <li>Acrylic painting</li>
            </ul>
          )}
          {activeTab === "proud" && (
            <ul>
              <li>Completed a full marathon</li>
              <li>Launched a personal blog</li>
              <li>Built a custom PC</li>
            </ul>
          )}
          {activeTab === "excited" && (
            <ul>
              <li>Learning about AI and machine learning</li>
              <li>Starting a new open-source project</li>
              <li>Exploring new UX/UI trends</li>
            </ul>
          )}
        </div>
      </section>
      <hr className="content-divider" /> {/* Add this line */}
      <Skillscontainer />
    </div>
  );
}

export default AboutPage;
