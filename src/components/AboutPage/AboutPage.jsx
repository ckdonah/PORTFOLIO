import React from 'react';
import './AboutPage.css';
import SkillsContainer from '../Skill/SkillsContainer';

function AboutPage() {
  return (
    <div className="about-page">
      <section className="about">
        <div className="about-container">
          <div className="about-content">
            {/* <h2 className="about-title">About me</h2> */}
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
      <SkillsContainer />
    </div>
  );
}

export default AboutPage;
