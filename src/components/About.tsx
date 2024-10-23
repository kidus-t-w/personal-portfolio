import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-gray-800 to-black text-white py-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        {/* Left Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 hidden md:flex md:justify-center">
          <img
            src="/assets/projects.png"
            alt="Projects"
            className="w-[400px] h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="mb-4">
            <h3 className="text-sm uppercase tracking-wide text-blue-400">
              ABOUT ME
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              I AM AVAILABLE FOR{" "}
              <span className="text-blue-500">WEB PROJECTS</span>{" "}
            </h2>
            <p className="text-lg mb-6">
              I specialize in designing and developing modern web, mobile, and
              progressive web applications. With over a year of experience, I’ve
              worked with multiple clients to bring their ideas to life,
              delivering high-quality, responsive, and user-friendly solutions.
              Whether you need a new website, an app, or a redesign, I’m here to
              help elevate your business and create digital experiences that
              stand out.
            </p>
          </div>

          

          {/* Call to Action */}
          <a
            href="#contact"
            className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 inline-block text-center"
          >
            GET IN TOUCH →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
