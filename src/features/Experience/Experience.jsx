import { experiences } from "../../utils/CompanyInfo"; // Adjust the path as necessary
const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-16 bg-gradient-to-br from-[#100621] to-[#0a0f28] text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Experience</h2>
        <p className="text-gray-300 mt-2 w-4/5 md:w-3/6 mx-auto">
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
            <div className="border border-blue-500 rounded-lg p-6 md:p-8 bg-[#111827]">
              <div className="flex items-center gap-4 mb-4">
                <img src={exp.logo} alt={exp.company} className="w-14 h-14 object-contain rounded-md bg-white p-1" />
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.duration}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>

              {exp.skills.length > 0 && (
                <>
                  <p className="font-semibold text-gray-100">Skills:</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-300 mt-1">
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
