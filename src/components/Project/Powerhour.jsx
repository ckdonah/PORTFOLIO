import React from "react";
import powerhourImage1 from "../../assets/projects/powerhour1.webp";
import powerhourImage2 from "../../assets/projects/powerhour2.webp";

function Powerhour() {
  return (
    <div className="projects-content page-section bg-gray-50 py-12 px-8" id="work">
      <div className="case-study-container max-w-6xl mx-auto flex flex-col lg:flex-row items-start">
        {/* Text Section with Vertical Line */}
        <div className="text-section flex items-start mb-8">
          {/* Vertical Line */}
          <div className="border-l-4 border-black mr-4" style={{ minHeight: '100px' }}></div>
          {/* Text Content */}
          <div>
            <h1 className="text-5xl font-bold text-black mb-2">Powerhour Gym</h1>
            <p className="text-xl text-gray-700 mb-4">CASE STUDY</p>
            <p className="text-lg text-gray-800 max-w-2xl mb-6">
              Powerhour Gym is a modern, responsive gym website offering a sleek design and an intuitive user experience. Built with the MERN stack (MongoDB, Express.js, React, Node.js), it integrates seamlessly with gym management systems to provide a holistic fitness experience for users.
            </p>
            <button className="mt-4 bg-lime-400 text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-lime-500 transition-colors duration-200 ease-in-out flex items-center shadow-md">
              View project 
              <span className="ml-2 bg-white text-black rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section flex space-x-4 lg:w-1/2">
          {/* Larger Image */}
          <div className="w-2/3">
            <img src={powerhourImage1} alt="Powerhour Gym Screenshot 1" className="w-full rounded-none" />
          </div>
          {/* Smaller Image */}
          <div className="w-1/3">
            <img src={powerhourImage2} alt="Powerhour Gym Screenshot 2" className="w-full rounded-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Powerhour;
