"use client";

import Header from "../component/Header";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Website",
    description: "Fully functional e-commerce website deployed on Vercel.",
    image: "/ecommerce.png",
    link: "https://e-commerce-wabsite-delta.vercel.app/",
  },
  {
    title: "Currency Converter",
    description: "Real-time currency conversion tool.",
    image: "/currency.png",
    link: "https://curency-converter--inky.vercel.app/",
  },
  {
    title: "Sprinter Project Management",
    description: "Project management service app.",
    image: "/sprinter.png",
    link: "https://vercel.com/ubaid-ur-rehmans-projects-e4fbdced/www-sprinter-project-management-services-est-com",
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <div className="projects-section">
        <h2>MY PROJECTS</h2>
        <div className="projects-cards">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <Image src={project.image} alt={project.title} width={300} height={200} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
