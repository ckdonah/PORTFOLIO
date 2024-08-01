import React from 'react';
// Icons
import { IoPlaySharp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({
  imageUrl,
  image,
  altTitle,
  title,
  description,
  demoUrl,
  codeUrl,
}) => {
  const btnStyle = "bg-black text-white py-1.5 px-3 rounded-md transition-colors duration-200 ease-in-out hover:bg-gray-800 flex items-center justify-center gap-1";

  return (
    <article className="project small">
      <div className="rounded overflow-hidden">
        <a href={imageUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={altTitle}
            className="mb-2 w-full h-auto object-cover object-center transition-all duration-200 ease-in-out hover:contrast-50"
          />
          <h3 className="py-2 text-center text-base font-bold uppercase transition-all duration-200 ease-in-out hover:underline">
            {title}
          </h3>
        </a>
        <p className="p-2 text-center text-bg">{description}</p>
        <div className="flex justify-between px-2 py-2">
          <div className="w-fit">
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className={btnStyle}>
              Code <BsGithub />
            </a>
          </div>
          {demoUrl && (
            <div className="w-fit">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={btnStyle}>
                Live Demo <IoPlaySharp />
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
