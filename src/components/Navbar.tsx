import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(false);
        setIsOpen(false)
      } else {
        setScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-screenc fixed top-0 left-0 z-[1000] transition-all duration-300 ${scroll ? 'shadow-md bg-gray-900' : 'bg-gradient-to-r from-gray-800 to-black'}`}>
      <div className="w-screen flex items-center justify-between py-4 px-5 md:px-16">
        {/* Logo */}
        <div className="flex items-center space-x-3 text-2xl font-bold">
          <a href="/">
            <img src="/assets/logo.png" alt="Logo" className="w-8 h-8" />
          </a>
          <a href="/" className="text-white font-signature">
            Kidus Tilahun
          </a>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden mr-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`md:flex md:items-center absolute md:static transition-all duration-300 ease-in-out ${isOpen ? 'top-16 left-0 w-full bg-gray-700' : 'top-[-490px] left-0 w-full'} md:w-auto md:bg-transparent z-[-1] md:z-auto md:pl-0 pl-9`}
        >
          <li className="md:ml-8 text-lg font-semibold md:my-0 my-7">
            <a href="#hero" className="text-white hover:text-blue-600 duration-500">
              HOME
            </a>
          </li>
          <li className="md:ml-8 text-lg font-semibold md:my-0 my-7">
            <a href="#about" className="text-white hover:text-blue-600 duration-500">
              ABOUT ME
            </a>
          </li>
          <li className="md:ml-8 text-lg font-semibold md:my-0 my-7">
            <a href="#projects" className="text-white hover:text-blue-600 duration-500">
              PROJECTS
            </a>
          </li>
          <li className="md:ml-8 text-lg font-semibold md:my-0 my-7">
            <a href="#services" className="text-white hover:text-blue-600 duration-500">
              SERVICES
            </a>
          </li>
          <li className="md:ml-8 text-lg font-semibold md:my-0 my-7">
            <a href="#contact" className="text-white hover:text-blue-600 duration-500">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
