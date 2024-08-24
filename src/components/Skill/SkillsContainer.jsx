import React from "react";
import SkillsCard from "./SkillsCard";

import bootstrap from "../../assets/icons/icon-bootstrap.png";
import css from "../../assets/icons/icon-css.png";
import express from "../../assets/icons/icon-express.png";
import git from "../../assets/icons/icon-git.png";
import github from "../../assets/icons/icon-github.png";
import html from "../../assets/icons/icon-html.png";
import js from "../../assets/icons/icon-js.png";
import markdown from "../../assets/icons/icon-markdown.png";
import mongodb from "../../assets/icons/icon-mongodb.png";
import node from "../../assets/icons/icon-node.webp";
import react from "../../assets/icons/icon-react.png";
import sass from "../../assets/icons/icon-sass.png";
import tailwind from "../../assets/icons/icon-tailwind.png";
import vscode from "../../assets/icons/icon-vscode.png";

const SkillsContainer = () => {
  return (
    <section className="skills-container flex flex-col items-center justify-center bg-gray-50 text-black py-12">
      <h2 className="mb-12 text-3xl font-bold text-gray-800">Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-6 w-full max-w-5xl">
        {/* Responsive grid layout for varying screen sizes */}
        <SkillsCard icon={react} altTitle="React" iconName="React" />
        <SkillsCard icon={js} altTitle="JavaScript" iconName="JavaScript" />
        <SkillsCard icon={mongodb} altTitle="MongoDB" iconName="MongoDB" />
        <SkillsCard icon={express} altTitle="Express.js" iconName="Express.js" />
        <SkillsCard icon={node} altTitle="Node.js" iconName="Node.js" />
        <SkillsCard icon={tailwind} altTitle="Tailwind" iconName="Tailwind" />
        <SkillsCard icon={html} altTitle="HTML" iconName="HTML" />
        <SkillsCard icon={css} altTitle="CSS" iconName="CSS" />
        <SkillsCard icon={git} altTitle="Git" iconName="Git" />
        <SkillsCard icon={github} altTitle="GitHub" iconName="GitHub" />
        <SkillsCard icon={bootstrap} altTitle="Bootstrap" iconName="Bootstrap" />
        <SkillsCard icon={sass} altTitle="Sass" iconName="Sass" />
      </div>
    </section>
  );
};

export default SkillsContainer;
