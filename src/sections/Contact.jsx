import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <section className="py-20 bg-gray-200" id="contact">
      <div className="container items-center mx-auto flex flex-col">
        <h1 className="text-4xl font-extrabold">Let's get in touch!</h1>
        <p className="p-4 w-full md:w-1/2 text-center sm:m-2 md:m-0">
          I'm always looking for new opportunities to collaborate and learn from
          others. Feel free to reach out to me through any of the following
          platforms.
        </p>
        <div className={`h-1 w-1/6 bg-indigo-600 m-4 shadow-md`}></div>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/dohyunnam/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-500 social-icon" />
          </a>
          <a
            href="https://www.instagram.com/dh02nam/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-2xl text-pink-500 social-icon" />
          </a>
          <a
            href="https://github.com/catlikeflyer"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-2xl text-gray-800 social-icon" />
          </a>
          <a href="mailto:dhnam@aol.com">
            <MdEmail className="text-2xl text-red-500 social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
