import { useState } from "react";
import paperDetils from "../../utils/PaperDetails";
import ProjectCard from "../../components/ProjectCard";
import ProjectModal from "../../components/ProjectModal";

const Research = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);



  const filtered = filter === "All" ? paperDetils : paperDetils.filter(p => p.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Research Paper</h2>
      <p className="text-gray-400 text-center mb-8">
        I have worked on several papers. Here are some of my paper I have published.
      </p>

      <div className="flex justify-center gap-4 mb-10">
        {[].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1 border rounded-full ${
              filter === type
                ? "bg-purple-600 border-purple-600 text-white"
                : "border-purple-600 text-purple-400 hover:bg-purple-700"
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

export default Research;
