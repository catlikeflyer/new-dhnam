import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import P1 from "../assets/me/1.jpg";
import P2 from "../assets/me/2.jpg";
import P3 from "../assets/me/3.jpg";
import P4 from "../assets/me/4.jpg";
import P5 from "../assets/me/5.jpg";
import P6 from "../assets/me/6.jpg";
import P7 from "../assets/me/7.jpg";
import P8 from "../assets/me/8.jpg";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";

export const Hero = () => {
  const images = [P1, P2, P3, P4, P5, P6, P7, P8];

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
      className="py-20 min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat transition-all duration-1000 bg-gray-100"
      id="home"
      style={{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto flex md:flex-row flex-col items-center justify-center ">
        <div className="md:w-1/3 p-10 w-full ">
          <img
            src={images[currentIndex]}
            alt="avatar"
            className="rounded-full hover:scale-105 hover:shadow-xl transition-all shadow-lg"
          />
        </div>
        <div className="md:w-2/3 w-full p-10">
          <h1 className="text-6xl font-bold">
            Hi! I&apos;m <span className="text-indigo-600 italic">Do Hyun Nam</span>
          </h1>
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
            <a
              href="https://www.youtube.com/@eldollis"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="text-red-500 social-icon" />
            </a>
          </div>
        </div>
      </div>
      <a href="#about">
        {" "}
        <MdOutlineKeyboardDoubleArrowDown className="text-6xl text-indigo-600 animate-bounce mt-4" />
      </a>
    </section>
  );
};
