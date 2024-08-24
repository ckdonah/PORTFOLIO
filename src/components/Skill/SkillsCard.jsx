import React from 'react';

const SkillsCard = ({ icon, altTitle, iconName }) => {
  return (
    <div className="skills-card flex flex-col items-center justify-center m-4">
      {/* Removed the card-like styles */}
      <div className="icon-background w-20 h-20 flex items-center justify-center">
        <img src={icon} alt={altTitle} className="icon w-10 h-10" />
      </div>
      <p className="text-center mt-2 text-sm font-semibold">{iconName}</p>
    </div>
  );
};

export default SkillsCard;
