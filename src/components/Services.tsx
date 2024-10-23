import React from 'react';

const services = [
  {
    title: 'Web Design',
    description:
      '',
      image: '/assets/services/web-design.png',
    stars: 4,
  },
  {
    title: 'Website Development',
    description:
      '',
      image: '/assets/services/web.avif',
    stars: 4,
  },
  {
    title: 'Web App Development',
    description:
      '',
    image: '/assets/services/web-app.png',
    stars: 4,
  },
];

const Services: React.FC = () => {
  return (
    <section id = 'services'className="bg-gradient-to-r from-gray-800 to-black text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase tracking-wide text-blue-400 mb-2">
            SERVICES
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            SOFTWARE <span className="text-blue-500">SERVICES</span> I AM PROVIDING
          </h2>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-70 text-white rounded-lg overflow-hidden shadow-lg relative"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover opacity-50"
              />
              <div className="p-6 absolute top-0 left-0 w-full h-full flex flex-col justify-end">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{service.description}</p>
                <div className="flex">
                  {[...Array(service.stars)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049.34l2.454 6.82 7.182.027a.5.5 0 01.288.89l-5.812 4.002 2.182 7.014a.5.5 0 01-.774.57L10 16.168l-6.569 3.492a.5.5 0 01-.774-.57l2.182-7.014-5.812-4.002a.5.5 0 01.288-.89l7.182-.027 2.454-6.82a.5.5 0 01.952 0z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
