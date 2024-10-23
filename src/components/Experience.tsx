import React from "react";

const experiences = [
  {
    title: "Front-End Developer | Zare Innovations",
    company: "Remote",
    date: "July 2024 - September 2024",
    type: "Project based",
    description:
      "As a Front-End Developer at Zare Innovations, I played a key role in developing and optimizing user interfaces for three major projects. I collaborated closely with designers to translate design mockups into high-quality, responsive websites using React.js, TypeScript, Tailwind CSS, JavaScript, CSS, and Styled-Components. My responsibilities included ensuring cross-browser compatibility, implementing interactive features, and maintaining a seamless user experience across all devices. By working alongside back-end developers and designers, I contributed to the successful delivery of visually appealing and fully responsive web applications that met client requirements and project deadlines.",
  },
  {
    title: "Web Designer | Home Pack Medical",
    company: "Remote",
    date: "September 2024 - Present",
    type: "Project based",
    description:
      "As a Web Designer for Home Pack Medical Services, I designed a user-friendly and visually appealing web application tailored to their specific needs. Using tools such as Figma and Photoshop, I created wireframes and high-fidelity prototypes to deliver a clean, responsive design that enhanced user experience across various devices. I worked closely with stakeholders to ensure the design aligned with the companys branding and functionality requirements, ultimately creating a seamless interface that supported their business operations and improved client engagement."  },
];

const Experience: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-black text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase tracking-wide text-blue-400 mb-2">
            EXPERIENCE
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            MY WORK <span className="text-blue-500">EXPERIENCE</span>
          </h2>
        </div>

        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-gray-900 bg-opacity-70 text-white rounded-lg overflow-hidden shadow-lg mb-8 p-6"
          >
            <div className="md:flex md:items-center md:justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-400">
                  {experience.title}
                </h3>
                <p className="text-sm text-gray-400">{experience.company}</p>
                <p className="text-sm text-gray-400">{experience.date}</p>
                <span className="inline-block bg-blue-500 text-white px-3 py-1 text-sm rounded-full mt-2">
                  {experience.type}
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-6">
              <h4 className="text-xl font-semibold text-white">
                About Experience
              </h4>
              <p className="text-gray-300 mt-2">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
