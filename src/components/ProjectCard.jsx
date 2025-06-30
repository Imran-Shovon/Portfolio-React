import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="bg-gray-200 dark:bg-[#141320] rounded-lg shadow-lg 
                 p-4 md:p-6 cursor-pointer 
                 hover:scale-[1.03] hover:shadow-purple-800/20 
                 transition-all duration-300"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded"
      />
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs 
                       bg-purple-200 text-purple-800 
                       dark:bg-purple-900 dark:text-purple-300 
                       px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-gray-900 dark:text-white font-semibold text-lg mt-3">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        {project.duration}
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 truncate">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectCard;
