import React from "react";
import { Github } from "lucide-react";

const Card = ({ title, description, image, href, as: Component = "div" }) => {
  const content = (
    <div className="group flex w-full h-48 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Left: Image */}
      <div className="w-2/5 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      {/* Right: Description */}
      <div className="w-3/5 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex items-center mt-4">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={20} />
            <span className="text-sm font-medium">View Project</span>
          </a>
        </div>
      </div>
    </div>
  );

  return Component === "a" ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      {content}
    </a>
  ) : (
    content
  );
};

export default Card;
