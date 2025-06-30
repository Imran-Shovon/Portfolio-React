// src/components/EducationSection.tsx
import educationData from '../../utils/Education';

export default function Education() {
  return (
    <section
      className="py-24 px-4
                 bg-gradient-to-b from-gray-100 to-gray-300
                 dark:from-[#0f0c29] dark:to-[#302b63]
                 text-gray-900 dark:text-white
                 min-h-screen transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Education</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </p>
      </div>

      <div className="relative border-l-2 border-purple-600 dark:border-purple-500 pl-6 space-y-10 max-w-3xl mx-auto">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="relative
                       bg-white dark:bg-[#1e1e2f]
                       border border-purple-200 dark:border-purple-500
                       rounded-lg p-6
                       transition-colors duration-300"
          >
            <div className="absolute -left-[1.05rem] top-6 w-3 h-3
                            bg-purple-600 dark:bg-purple-500
                            rounded-full ring-2 ring-white"></div>
            <div className="flex items-start gap-4">
              <img
                src={edu.image}
                alt={edu.title}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {edu.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {edu.subtitle}
                </p>
                {edu.grade && (
                  <p className="text-sm text-purple-600 dark:text-purple-300 mt-1">
                    Grade: {edu.grade}
                  </p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
