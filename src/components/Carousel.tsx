import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed:5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const techLogos = [
    '/assets/technologies/react-logo.png',
    '/assets/technologies/node-js.png',
    '/assets/technologies/javascrit.png',
    '/assets/technologies/html5.png',
    '/assets/technologies/css3.png',
    '/assets/technologies/tailwind_css.svg.png',
    '/assets/technologies/typescript.webp',
    '/assets/technologies/mysql.png',
    '/assets/technologies/python.png',
    '/assets/technologies/express-js.png',
  ];

  return (
    <section className="bg-gradient-to-r from-gray-800 to-black py-10">
      <div className="container mx-auto">
        <Slider {...settings}>
          {techLogos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Technology ${index + 1}`}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
