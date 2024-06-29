// SkillsCard.js
import React from 'react';

const SkillsCard = ({ icon, altTitle, iconName }) => {
  return (
    
    <div className="skills-card flex flex-col items-center m-2">
      <img src={icon} alt={altTitle} className="w-8 h-8" />
      <p className="text-center mt-2 text-sm">{iconName}</p>
    </div>
  );
};

export default SkillsCard;
