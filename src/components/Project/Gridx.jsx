import React from "react";
import gridx1 from "../../assets/projects/gridx1.webp"; // First image
import gridx2 from "../../assets/projects/gridx2.webp"; // Second image

function GridX() {
  return (
    <div className="projects-content bg-gray-50 py-12 px-8" id="work">
      <div className="case-study-container max-w-6xl mx-auto flex flex-col lg:flex-row items-start">
        {/* Text Section with Vertical Line */}
        <div className="text-section flex items-start mb-8">
          {/* Vertical Line */}
          <div className="border-l-4 border-black mr-4" style={{ minHeight: '100px' }}></div>
          {/* Text Content */}
          <div>
            <h1 className="text-5xl font-bold text-black mb-2">GridX Portfolio</h1>
            <p className="text-xl text-gray-700 mb-4">CASE STUDY</p>
            <p className="text-lg text-gray-800 max-w-2xl mb-6">
              GridX is a responsive portfolio template with a clean design and smooth animations, built with HTML, CSS, and JavaScript.
            </p>
            <a href="https://gridxportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 bg-lime-400 text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-lime-500 transition-colors duration-200 ease-in-out flex items-center shadow-md">
                View project 
                <span className="ml-2 bg-white text-black rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section flex space-x-4 lg:w-1/2">
          {/* Larger Image */}
          <div className="w-2/3">
            <img src={gridx1} alt="GridX Portfolio Screenshot 1" className="w-full rounded-none" />
          </div>
          {/* Second Image */}
          <div className="w-1/3">
            <img src={gridx2} alt="GridX Portfolio Screenshot 2" className="w-full rounded-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridX;
