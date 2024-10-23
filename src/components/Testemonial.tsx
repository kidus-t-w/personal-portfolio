import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    text: "Kidus was an essential part of our front-end development team at Zare Innovations. His ability to translate complex design mockups into responsive and user-friendly interfaces was impressive. He consistently delivered high-quality work while ensuring cross-browser compatibility and smooth user experiences. Kidus' attention to detail, collaborative spirit, and technical expertise helped us meet tight project deadlines and exceed client expectations.",
    author: '— Project Manager, Zare Innovations',
  },
  
];

const Testimonial: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-black text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase tracking-wide text-blue-400 mb-2">
            TESTIMONIAL
          </h3>
        </div>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <p className="text-lg italic mb-4">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-gray-400">
                {testimonial.author}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Testimonial;
