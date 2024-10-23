import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-black text-white flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left p-6">
          <h1 className="text-sm uppercase tracking-wide mb-4">
            Kidus Tilahun
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-500">
            FULLSTACK DEV
          </h2>
          <p className="text-base md:text-lg mb-6">
            Fullstack web developer using the latest frameworks and practices,
            specializing in frontend development with Next-Js. I use Node.js
            to develop APIs on REST architecture.
            I write code in a test-driven development pattern to validate and
            verify that requirements are met.
          </p>
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="#contact"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 inline-block text-center"
            >
              GET IN TOUCH →
            </a>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#github" className="text-white">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="#linkedin" className="text-white">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="#upwork" className="text-white">
                <i className="fab fa-upwork fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end p-6">
          <img
            src="/assets/kidus-tilahun-2.png"
            alt="Kidus Tilahuna"
            className="w-full md:w-3/4 h-auto hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
