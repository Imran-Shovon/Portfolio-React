
const About = () => {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20 bg-white dark:bg-[#0f172a] text-black dark:text-white">
      <div className="text-center mb-12">
        <span className="text-sm uppercase tracking-wider px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full inline-block text-gray-700 dark:text-gray-300 mb-2">
          About Me
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">Career Objective</h2>
      </div>

      <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 md:p-10 max-w-6xl mx-auto shadow-md">
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-8">
          A results-driven software developer with <strong>2 years of experience in frontend</strong> and <strong>full-stack development</strong>,
          specializing in <strong>Angular, React.js, Next.js, and TypeScript</strong>. Passionate about <strong>performance optimization, modern web technologies,
          and writing clean, maintainable code</strong>. Always exploring new technologies to build scalable and efficient applications.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="font-semibold">B.Sc. in Computer Science & Engineering (2018 – 2022)</p>
            <p className="text-gray-700 dark:text-gray-400">Bangladesh University of Business and technology (BUBT)</p>
            <p className="text-gray-700 dark:text-gray-400">CGPA:  <strong>3.74</strong></p>
          </div>

          {/* Training Section */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-2">Professional Training</h3>
            <p className="font-semibold">Complete Web Development Course</p>
            <p className="text-gray-700 dark:text-gray-400 mb-4">Programming Hero, 2022</p>

            <p className="font-semibold">Web Design and Development Course</p>
            <p className="text-gray-700 dark:text-gray-400">European IT Institute, 2020</p>
          </div> */}
        </div>

        {/* Languages */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2">Languages</h3>
          <div className="flex flex-col gap-6 flex-wrap">
            <span className="flex items-center gap-2 text-blue-500 dark:text-blue-400">
              <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full" />
              Bangla - Native
            </span>
            <span className="flex items-center gap-2 text-blue-500 dark:text-blue-400">
              <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full" />
              English - Comfortable
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
