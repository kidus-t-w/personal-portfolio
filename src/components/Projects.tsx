import { FaCircleArrowRight } from "react-icons/fa6";

const projects = [
  {
    title: "AZ Trading",
    description: "Website",
    image: "/assets/projects/az-trading.png",
    link: "https://az-trading-thab.vercel.app/",
  },
  {
    title: "Lulu Catering",
    description: "Website",
    image: "/assets/projects/lulu.png",
    link: "https://lulu-pi.vercel.app/",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-gray-800 to-black text-white py-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase tracking-wide text-blue-400 mb-2">
            MY WORK
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">RECENT PROJECTS</h2>
        </div>

        <div className="overflow-hidden">
          <div
            className={`grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 transition-all duration-700 ease-in-out"
            }`}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-105"
                />
                <div className="p-6 flex flex-row justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-500 hover:underline flex items-center text-5xl"
                    target="_blank"
                  >
                    <FaCircleArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
