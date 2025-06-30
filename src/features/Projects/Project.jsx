import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import ProjectModal from "../../components/ProjectModal";
import projects from "../../utils/ProjectDetails";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      className="py-24 px-8 md:px-32 mx-auto 
                 bg-white dark:bg-[#0a0f28] 
                 text-gray-900 dark:text-white 
                 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
        Projects
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
        I have worked on a wide range of projects. Here are some of my projects.
      </p>

      <div className="flex justify-center gap-4 mb-10">
        {[].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1 border rounded-full ${
              filter === type
                ? "bg-purple-600 border-purple-600 text-white"
                : "border-purple-600 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-700 dark:text-purple-400"
            } transition`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 content-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project, i) => (
          <ProjectCard key={i} project={project} onClick={openModal} />
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
