import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaUpwork } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            form.current?.reset();
          },
          (error) => {
            console.log("Error in sending email:", error.text);
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-800 to-black text-white py-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="md:flex md:justify-between md:space-x-8">
          {/* Left Contact Information */}
          <div className="bg-gray-900  bg-opacity-70 flex md:justify-center md:w-1/3 ">
            <div className="p-8 rounded-lg">
              <img
                src="/assets/kidus-tilahun.JPG"
                alt="Contact"
                className="w-24 h-24 mb-6 rounded-full "
              />
              <div>
                <h4 className="text-lg font-semibold mb-4">WRITE AN E-MAIL</h4>
                <p className="text-lg text-blue-500 mb-8">
                  kidustilahunet@gmail.com
                </p>

                <h4 className="text-lg font-semibold mb-4">CALL ME</h4>
                <p className="text-lg text-blue-500 mb-8">+251915579335</p>

                <div className="flex space-x-4">
                  <a
                    href="#https://github.com/kidus-t-w"
                    target="_blank"
                    className="text-white text-2xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~011b911959f2334026"
                    className="text-green-500 text-2xl"
                    target="_blank"
                  >
                    <FaUpwork />
                  </a>
                  <a
                    href="www.linkedin.com/in/kidus-tilahun-wube"
                    className="text-blue-500 text-2xl"
                    target="_blank"
                  >
                    <FiLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="md:w-2/3 mt-12 md:mt-0 ">
            <h3 className="text-3xl font-bold mb-4">
              Let’s Discuss Your Project
            </h3>
            <p className="text-lg text-gray-400 mb-8">
              Always available for freelancing if the right project comes along.
              Feel free to contact me.
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input
                  type="text"
                  name="user_name"
                  placeholder="First Name *"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email *"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message *"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
