import { experiences } from "../../utils/CompanyInfo"; // Adjust the path as necessary
const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-16 bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] text-[#111827] dark:from-[#100621] dark:to-[#0a0f28] dark:text-white"
>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Experience</h2>
        <p className="mt-2 w-4/5 md:w-3/6 mx-auto 
           text-gray-700 dark:text-gray-300 
           leading-relaxed tracking-wide"
>
          Over the years, I've contributed to the development of enterprise-grade web applications across different companies. 
          At Checkpoint Systems Ltd., I focused on building scalable solutions using .NET and React. At Giga Tech Limited, I developed 
          and enhanced backend systems using .NET Core and delivered user-friendly frontend interfaces with React JS.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto border-l-[3px] border-purple-600 pl-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12 ml-4">
            {/* Timeline circle */}
            {/* <div className="absolute -left-6 top-2 w-4 h-4 bg-[#a855f7] border-[3px] border-[#d8b4fe] rounded-full"></div> */}

            {/* Experience Card */}
            <div className="border rounded-lg p-6 md:p-8 
            border-gray-300 dark:border-blue-500 
            bg-white dark:bg-[#111827] 
            text-gray-900 dark:text-white 
            shadow-md dark:shadow-lg 
            hover:shadow-lg transition duration-300">

              <div className="flex items-center gap-4 mb-4">
                <img src={exp.logo} alt={exp.company} 
                className="w-14 h-14 object-contain rounded-md  bg-white dark:bg-[#1f2937] 
                            p-1 border border-gray-200 dark:border-gray-700 
                            shadow-sm dark:shadow" />
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium tracking-wide">{exp.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-medium tracking-wide">{exp.duration}</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{exp.description}</p>

              {exp.skills.length > 0 && (
                <>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">Skills:</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {exp.skills.map((skill, i) => (
                      <span key={i}>• {skill}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
