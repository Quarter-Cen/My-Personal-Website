"use client";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";


// Project data array
const projects = [
  {
    id: 1,
    title: "DormMate",
    description: "A digital system for managing student dormitories, improving efficiency in room allocation, maintenance, and communication.",
    imageUrl: "/DormMate.png", // Ensure this path is correct or use a placeholder
    fullDescription: "DormMate is a comprehensive digital system designed to revolutionize general dormitory management. It significantly enhances efficiency across core operations: room allocation, maintenance requests, and communication. Tailored for all types of residential dormitories, DormMate aims to streamline traditional processes through intuitive digital solutions.",
    technologies: ["HTML", "Javascript", "Express", "Node.js", "mySQL", "Tailwind CSS"],
    year: "2024",
    type: "Web Application"
  },
  {
    id: 2,
    title: "Farm Management",
    description: "This interface presents the Cows Information module of a Farm Management System, designed for tracking and managing individual cow data.",
    imageUrl: "/farm.png",
    fullDescription: "The image displays a user interface for a Farm Management System, specifically focusing on the Cows Information module. This module appears to be designed for tracking and managing data related to individual cows within a farm.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "TiDB"],
    year: "2024",
    type: "Web Application"
  },
  {
    id: 3,
    title: "SIAM: Smart Integrated Assistant for academic Management",
    description: "To significantly enhance the quality of student research, reduce redundant efforts for both students and advisors, and improve the overall efficiency of academic project management in higher education.",
    imageUrl: "/SIAM.png",
    fullDescription: "Overall Challenge: The current project management landscape is characterized by fragmented data and processes, with repeated efforts annually without systematic leveraging of past contexts. The missing element is a mechanism that understands context—both content-wise and stakeholder-wise. Such a mechanism would empower students, enable more precise guidance from advisors, and help faculties maintain consistent project quality. Proposed Solution & System Development: This project proposes the development of a Project/Research Process Management Assistant System built on the Model Context Protocol (MCP) concept. This system will be designed to intelligently extract and synthesize scattered data from various sources, such as Scrum Sheets and project documentation, to generate meaningful contextual understanding. Anticipated Impact:The implementation of this system is expected to significantly elevate the quality of learning through projects in higher education, reduce unnecessary burdens on both students and advisors, and provide a substantial improvement in the overall academic research project ecosystem.",
    technologies: ["Next.js", "fastAPI", "LangChain", "Ollama", "Postgresql"],
    year: "2025",
    type: "Web AI Application"
  },
];

// PortfolioCard Component
const PortfolioCard = ({ project, onClick }: { project: any; onClick: any }) => {
  return (
    <div
      className="flex flex-col gap-3 pb-3 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden bg-white"
      onClick={() => onClick(project)}
    >
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl"
        style={{
          backgroundImage: `url('${project.imageUrl}')`,
        }}
        onError={(e) => { e.target.style.backgroundImage = `url('https://placehold.co/400x225/E0E0E0/333333?text=Image+Not+Found')`; }}
      ></div>
      <div className="p-3">
        <p className="text-[#121416] text-lg font-semibold leading-normal mb-1">
          {project.title}
        </p>
        <p className="text-[#6a7681] text-sm font-normal leading-snug">
          {project.description}
        </p>
      </div>
    </div>
  );
};
// ProjectModal Component
const ProjectModal = ({ project, onClose }: { project: any; onClose: any }) => {
  if (!project) return null;

  // Handle backdrop click to close modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100] p-4 font-inter"
      onClick={handleBackdropClick}
    >
      <div className="rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative bg-white">
        {/* Fixed/Sticky close button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right z-10bg-opacity-90 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 text-2xl font-bold shadow-lg transition-all duration-200"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-[#121416] mb-4">{project.title}</h2>
        <div
          className="w-full h-64 bg-center bg-no-repeat bg-cover rounded-lg mb-6"
          style={{ backgroundImage: `url('${project.imageUrl}')` }}
          onError={(e) => { e.target.style.backgroundImage = `url('https://placehold.co/800x450/E0E0E0/333333?text=Image+Not+Found')`; }}
        ></div>
        <p className="text-[#6a7681] text-base leading-relaxed mb-4">
          {project.fullDescription}
        </p>
        <div className="mb-4">
          <p className="text-[#121416] text-md font-semibold mb-1">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <span key={index} className="bg-[#f1f2f4] text-[#121416] text-sm px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <p className="text-[#6a7681] text-sm">
          Year: <span className="font-medium text-[#121416]">{project.year}</span> | Type: <span className="font-medium text-[#121416]">{project.type}</span>
        </p>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="floating-box"></div>
      <div className="fixed z-50 w-full"> {/* Ensure Navbar takes full width */}
        <Navbar currentIndex={1} />
      </div>
      <div className="content pt-20"> {/* Add padding-top to account for fixed Navbar */}
        <div className="section-portfolio">
          <div className="px-4 md:px-10 lg:px-20 flex flex-1 justify-start py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-[#6a7681] text-sm font-normal leading-normal">
                    A selection of my work, showcasing my skills and experience
                    in various design disciplines.
                  </p>
                </div>
              </div>

              {/* Refactored grid for 3 cards per row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {projects.map((project) => (
                  <PortfolioCard key={project.id} project={project} onClick={openModal} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
}