import React from "react";
import { Github } from "lucide-react";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="flex w-[100vw] max-w-md h-48 border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white">
      {/* Left side: Project photo */}
      <div className="flex-1">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Right side: Description */}
      <div className="flex-1 p-4 flex flex-col justify-between bg-black">
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline text-sm"
        >
          <Github/>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
