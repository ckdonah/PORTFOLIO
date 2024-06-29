import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <section className="about">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title">About me</h2>
            <h3 className="about-subtitle">
              A lover of oat milk lattes, my dog, and good design, (not in that order).
            </h3>
            <p className="about-description">
              What began as a desire to be both technical and creative has evolved into a career that I am completely passionate about. I’m proud to have designed digital products and services that improve peoples' lives, from getting work done to sending mail across the country to accessing healthcare in their local community.
            </p>
          </div>
          <div className="about-image-container">
            <img src="/images/images.jpeg" alt="Megan McCormick" className="about-image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
