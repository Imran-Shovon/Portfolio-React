import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ProjectModal = ({ isOpen, closeModal, project }) => {
  if (!project) return null;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        {/* Background Overlay */}
        <Transition
          show={isOpen}
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition>

        {/* Modal Container */}
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition
              show={isOpen}
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="w-full max-w-3xl transform overflow-hidden rounded-xl 
                           bg-white dark:bg-[#1a182b] p-6 text-left align-middle 
                           shadow-xl transition-all relative"
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 w-11 
                             bg-gray-200 dark:bg-gray-400 
                             hover:bg-gray-300 dark:hover:bg-gray-700 
                             text-gray-700 dark:text-white 
                             cursor-pointer text-4xl rounded-xl flex items-center justify-center 
                             transition-colors"
                >
                  &times;
                </button>

                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full object-cover"
                />

                {/* Title + Duration */}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-4">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.duration}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs 
                                 bg-purple-100 dark:bg-purple-900 
                                 text-purple-700 dark:text-purple-300 
                                 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-4  text-justify">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 dark:bg-gray-800 
                                 text-gray-800 dark:text-white 
                                 px-4 py-2 rounded 
                                 hover:bg-gray-200 dark:hover:bg-gray-700
                                 transition"
                    >
                      {project.link2 ? project.link2 : "View Code"}
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 text-white 
                                 px-4 py-2 rounded 
                                 hover:bg-purple-500 transition"
                    >
                      {project.link ? project.link : "View Live App"}
                    </a>
                  )}
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal;
