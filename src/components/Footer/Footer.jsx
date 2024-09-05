import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 text-base p-4">
      <div className="flex justify-center items-center p-4 lg:px-20 md:px-8">
        <div className="flex space-x-6">
          <a
            href="https://drive.google.com/file/d/1RFbPwd4EIxYhBA6Gbsrtm7_lYIeruUh3/view?usp=sharing"
            className="text-gray-800 no-underline hover:underline"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/godwinonah007"
            className="text-gray-800 no-underline hover:underline"
          >
            LinkedIn
          </a>
          <a href="mailto:ckdonah@gmail.com" className="text-gray-800 no-underline hover:underline">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
