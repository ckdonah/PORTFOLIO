import React, { useState } from 'react';
import './AboutPage.css'; 
import Skillscontainer from '../Skill/SkillsContainer';

function AboutPage() {
  const [activeTab, setActiveTab] = useState('learning');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about-page">
      <section className="about">
        <div className="about-container">
          <div className="about-content">
            <h3 className="about-subtitle">
              I'm a web developer who loves big dogs, good design, and coding. I enjoy combining technical skills with creativity to build useful and beautiful web experiences. I’ve worked on projects that help people get things done, from sending mail to accessing healthcare..
            </h3>
            <p className="about-description">
              I focus on creating websites that are functional, visually appealing, and easy to use. I’m committed to quality and making sure users have a great experience.
            </p>
          </div>
          <div className="about-image-container">
            <img src="/images/about_img_me.jpg" alt="OGD" className="about-image" />
          </div>
        </div>
      </section>

      {/* "Some things that I'm..." Section */}
      <section className="skills-section">
        <h2>Some things that I'm...</h2>
        <div className="tabs-container">
          <button
            className={`tab-button ${activeTab === 'learning' ? 'active' : ''}`}
            onClick={() => handleTabClick('learning')}
          >
            Learning
          </button>
          <button
            className={`tab-button ${activeTab === 'proud' ? 'active' : ''}`}
            onClick={() => handleTabClick('proud')}
          >
            Proud of
          </button>
          <button
            className={`tab-button ${activeTab === 'excited' ? 'active' : ''}`}
            onClick={() => handleTabClick('excited')}
          >
            Excited about
          </button>
        </div>

        <div className="content-container">
          {activeTab === 'learning' && (
            <ul>
              <li>Illustration in Procreate</li>
              <li>How to bake the perfect gluten-free cookie</li>
              <li>Acrylic painting</li>
            </ul>
          )}
          {activeTab === 'proud' && (
            <ul>
              <li>Completed a full marathon</li>
              <li>Launched a personal blog</li>
              <li>Built a custom PC</li>
            </ul>
          )}
          {activeTab === 'excited' && (
            <ul>
              <li>Learning about AI and machine learning</li>
              <li>Starting a new open-source project</li>
              <li>Exploring new UX/UI trends</li>
            </ul>
          )}
        </div>
      </section>
      <Skillscontainer />
    </div>
  );
}

export default AboutPage;
