import React from "react";
import { Divider } from "../components/Divider";

const EXPERIENCE = [
  {
    company: "Qualitest (Supporting Google)",
    title: "Search Language Specialist",
    description:
      "Collaborating closely with stakeholders, I enhanced the quality of Google Gen-AI models by implementing rigorous data validation processes to ensure accuracy and reliability. Through in-depth linguistic analysis across Korean, English, and Spanish, I optimized model performance and contributed to refinement via human-in-the-loop feedback. By overseeing the seamless flow of training data, I maintained data integrity throughout the entire pipeline.",
    date: "2024",
  },
  {
    company: "Procter & Gamble",
    title: "Data & Analytics Scholar",
    description:
      "Collaborating with brand managers, I provided key insights through PowerBI dashboards by analyzing sales data from multiple sources, including Nielsen and the internal datahub, to identify trends and risks. I ensured data quality by developing Excel macros and Power Automate workflows to integrate diverse data sources (SQL, Excel, CSV) into the data pipeline. Utilizing DAX and Azure, I designed and built data pipelines to populate the internal datahub with external and Nielsen data.",
    date: "2022 - 2023",
  },
  {
    company: "Tec de Monterrey",
    title: "Student Ambassador",
    description:
      "I drove significant student enrollment growth by fostering a strong community and optimizing admissions processes. Engaging over 200 families through on-campus events, I collaborated closely with faculty to develop student-centric activities aligned with historical enrollment trends. By leveraging data analytics, I developed a revitalized admissions strategy for 2024, resulting in increased enrollment and enhanced student satisfaction.",
    date: "2021 - 2023",
  },
];

const SOFTSKILLS = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Critical Thinking",
  "Adaptability",
  "Public Speaking",
  "Storytelling",
  "Flexibility"
];

const TECHSKILLS = [
  "React",
  "Python",
  "JavaScript",
  "SQL",
  "HTML/CSS",
  "PowerBI",
  "DAX",
  "Azure",
  "Excel",
  "Git",
  "C#"
];

const SkillTag = ({ skill }) => {
  return (
    <span className="p-2 rounded-full font-semibold text-gray-800 bg-gray-100 transition-all duration-300 hover:scale-105 skill-tag m-1">
      {skill}
    </span>
  );
};

export const About = () => {
  // two columns, with half width each. The left column will be about education and the right column will be about work experience like a timeline
  return (
    <section className="bg-gray-200 py-20" id="about">
      <div className="container items-center mx-auto flex flex-col">
        <h1 className="text-4xl font-extrabold">Who am I?</h1>
        <p className="p-4 w-full md:w-1/2 text-center sm:m-2 md:m-0">
          Software engineering graduate with a passion for building websites,
          data dashboards, and automatization tools. I am a quick learner and a
          team player, always looking for new challenges and opportunities to
          grow.
        </p>
        <div className={`h-1 w-1/6 bg-indigo-600 m-4 shadow-md`}></div>
        <div className="container flex md:flex-row flex-col items-start justify-between mx-auto">
          <div className="md:w-1/2 w-full p-10">
            <h1 className="text-2xl font-bold">Education</h1>
            <div className="mt-4">
              <h2 className="text-xl font-semibold">
                Tec de Monterrey{" "}
                <span className="text-gray-500 text-sm">2020-2024</span>
              </h2>
              <p className="text-gray-500">
                BSc. in Software Engineering and Computer Science
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold">
                University of Toronto{" "}
                <span className="text-gray-500 text-sm">2023</span>
              </h2>
              <p className="text-gray-500">
                International exchange in the Faculty of Applied Sciences and
                Engineering
              </p>
            </div>
            <div className="mt-4 bg-white p-4 rounded-lg shadow-md transition-all flex flex-col justify-start">
              <h1 className="text-xl font-bold p-2">Tech Wizardry</h1>
              <div className="flex flex-row flex-wrap">
                {TECHSKILLS.map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
              </div>
            </div>
            <div className="mt-4 bg-white p-4 rounded-lg shadow-md transition-all flex flex-col justify-start">
              <h1 className="text-xl font-bold p-2">People Power</h1>
              <div className="flex flex-row flex-wrap">
                {SOFTSKILLS.map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-10">
            <h1 className="text-2xl font-bold">Work Experience</h1>
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="mt-6">
                <p className="text-gray-500">{exp.company}</p>
                <h2 className="text-xl font-semibold">
                  {exp.title}{" "}
                  <span className="text-gray-500 text-sm">{exp.date}</span>
                </h2>
                <hr className="my-2 border-b-1 border-gray-400" />
                <p className="text-gray-800">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
