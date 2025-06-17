// src/components/EducationSection.tsx
import educationData from '../../utils/Education';


export default function Education() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#0f0c29] to-[#302b63] text-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Education</h2>
        <p className="text-lg text-gray-300">
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </p>
      </div>

      <div className="relative border-l-2 border-purple-500 pl-6 space-y-10 max-w-3xl mx-auto">
        {educationData.map((edu) => (
          <div key={edu.id} className="relative bg-[#1e1e2f] border border-purple-500 rounded-lg p-6">
            <div className="absolute -left-[1.05rem] top-6 w-3 h-3 bg-purple-500 rounded-full ring-2 ring-white"></div>
            <div className="flex items-start gap-4">
              <img src={edu.image} alt={edu.title} className="w-12 h-12 rounded-md object-cover" />
              <div>
                <h3 className="text-lg font-semibold text-white">{edu.title}</h3>
                <p className="text-sm text-gray-300">{edu.subtitle}</p>
                {edu.grade && (
                  <p className="text-sm text-purple-300 mt-1">Grade: {edu.grade}</p>
                )}
                <p className="text-sm text-gray-400 mt-2">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
