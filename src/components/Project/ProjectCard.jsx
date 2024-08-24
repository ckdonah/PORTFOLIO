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
  const btnStyle = "text-black bg-white py-1.5 px-3 rounded-md transition-colors duration-200 ease-in-out hover:bg-[#1e3a8a] hover:text-white flex items-center justify-center gap-1";

  return (
    <article className="project small p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
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
        <p className="p-2 text-center text-gray-700">{description}</p>
        <div className="flex justify-between px-2 py-2">
          <div className="w-fit">
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className={btnStyle} aria-label="View Code">
              Code <BsGithub />
            </a>
          </div>
          {demoUrl && (
            <div className="w-fit">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={btnStyle} aria-label="Live Demo">
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
