import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import ProfilePicture from "../assets/me.jpg";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";

export const Hero = () => {
  const images = [
    "./bg/1.jpg",
    "./bg/2.jpg",
    "./bg/3.jpg",
    "./bg/4.jpg",
    "./bg/5.jpg",
    "./bg/6.jpg",
    "./bg/7.jpg",
    "./bg/8.jpg",
    "./bg/9.jpg",
    "./bg/10.jpg",
    "./bg/11.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    // two columns with 1/3 and 2/3 width respectively, the first column has a circular avatar image and the second column has a heading and three subheadings
    <section
      className="py-20 min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat transition-all duration-1000"
      id="home"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="w-full h-full bg-gradient-to-t from-transparent via-gray-200 via-gray-200 to-transparent">
        <div className="container mx-auto flex md:flex-row flex-col items-center justify-center ">
          <div className="md:w-1/3 p-10 w-full ">
            <img
              src={ProfilePicture}
              alt="avatar"
              className="rounded-full hover:scale-105 hover:shadow-lg transition-all shadow-md"
            />
          </div>
          <div className="md:w-2/3 w-full p-10">
            <h1 className="text-6xl font-bold">Hi! I&apos;m Do Hyun Nam</h1>
            <h2 className="text-4xl font-semibold text-gray-500">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  100,
                  "Data Analyst",
                  100,
                  "Music Enthusiast",
                  100,
                  "Pokemon Trainer",
                  100,
                ]}
                repeat={Infinity}
                speed={300}
              />
            </h2>
            <br />
            <p className="text-gray-700 text-lg">
              Data-driven storyteller in the making | Software Engineer and CS
              graduate | AI and Cloud enthusiast | Avid traveler | Music lover |
              Pokemon Trainer
            </p>
            <hr className="my-6 border-b-1 border-gray-400" />
            {/* social media icons: Linkedin, Instagram, Github */}
            <div className="flex space-x-4 mt-4 text-4xl">
              <a
                href="https://www.linkedin.com/in/dohyunnam/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-blue-500 social-icon" />
              </a>
              <a
                href="https://www.instagram.com/dh02nam/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-pink-500 social-icon" />
              </a>
              <a
                href="https://github.com/catlikeflyer"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-gray-800 social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <MdOutlineKeyboardDoubleArrowDown className="text-6xl text-white animate-bounce mt-4" />
    </section>
  );
};
