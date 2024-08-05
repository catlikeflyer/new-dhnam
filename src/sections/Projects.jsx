import React, { useRef } from "react";
import { ProjectCard } from "../components/ProjectCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Ufll from "../assets/projects/ufll.jpg";
import Crop from "../assets/projects/crop.png";
import Swivel from "../assets/projects/swivel.png";
import AiNot from "../assets/projects/ainot.png";
import Heavent from "../assets/projects/heavent.png";

const MOCK_PROJECTS = [
  {
    category: "Business Intelligence",
    title: "Unilever Future Leader's League 2024",
    description: "Event powered by Unilever International at the London HQ that aimed to develop a strategy to bring the Lady’s Choice brand to the US market, targeting the Filipino diaspora.",
    image: Ufll,
    link: "https://careers.unilever.com/ufll",
  },
  {
    category: "AI Research",
    title: "Crop Field Segmentation",
    description: "Research that compares performance different neural network arquitectures for crop field segmentation using the DeepGlobe dataset.",
    image: Crop,
    link: "https://www.overleaf.com/read/pzvvznrjdtvf#b29e60",
  },
  {
    category: "Web Development",
    title: "Swivel",
    description: "Web application that enables car dealerships and customers to handle all the process online, with a delivery service directly to their homes.",
    image: Swivel,
    link: "https://github.com/SFMB-9/TC3005B.501/tree/dev",
  },
  {
    category: "AI Research",
    title: "AI Image Authenticity",
    description: "Research on a model that can detect if an image was generated using a GAN or not. A modified version of ResNet18 was used.",
    image: AiNot,
    link: "https://www.overleaf.com/read/dxbqhkcjpmgz#e23727",
  },
  {
    category: "Game & Web Development",
    title: "Heaven't",
    description: "Hack n' Slash, level-builder game developed in Unity with a web version that can be played on the browser. A website was also developed for the users to log in and check their stats for the levels.",
    image: Heavent,
    link: "https://github.com/Ace0x/Heavent",
  },
  {
    category: "Data Analysis",
    title: "DiaCoMoc",
    description: "Application developed with Python Streamlit library which, based on the common symptoms of Covid-19 stated by the WHO, tells if a person might be a positive case. Also, it monitors the health conditions of a patient based on inputed data.",
    image: "https://firebasestorage.googleapis.com/v0/b/my-pf-4f7f9.appspot.com/o/Screenshot%202021-08-09%20142524.png?alt=media&token=19cec608-2e28-455a-8e72-692331de0159",
    link: "https://github.com/catlikeflyer/Covid19Diagnoser",
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-gray-100" id="projects">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">
          Look at what I have done recently...
        </h1>
        <div className="h-1 w-1/6 bg-indigo-600 m-4 shadow-md"></div>
        <div className="container mx-auto mt-0 md:mt-4 p-10">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="1rem">
              {MOCK_PROJECTS.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};
