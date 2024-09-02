import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <a href="/" className="font-signature">
            Kidus Tilahun
          </a>
        </div>
        <div className="flex space-x-8">
          <a href="#home" className="text-white hover:underline">
            HOME
          </a>
          <a href="#about" className="text-white hover:underline">
            ABOUT ME
          </a>
          <a href="#projects" className="text-white hover:underline">
            PROJECTS
          </a>
          <a href="#services" className="text-white hover:underline">
            SERVICES
          </a>
          <a href="#contact" className="text-white hover:underline">
            CONTACT
          </a>
        </div>
        <div>
          <a
            href="#contact"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
