import {
  Braces,
  Brain,
  Code2,
  Database,
  Server,
  Wrench
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: <Code2 className="text-blue-500" />,
    items: [
      "Angular", "React.js", "JavaScript", "TypeScript", "Tailwind CSS",
      "Bootstrap", "Nebular", "Angular Material", "Redux", "React Query", "Chakra UI", "Material UI", 
      "HTML5", "CSS3", 
    ],
  },
  {
    title: "Backend",
    icon: <Server className="text-green-500" />,
    items: ["Node.js", "Fast API", "DotNet Core", "Django", "REST API"],
  },
  {
    title: "Database",
    icon: <Database className="text-purple-500" />,
    items: ["MongoDB", "PostgreSQL", "Prisma ORM", "Mongoose ODM"],
  },
  {
    title: "Programming",
    icon: <Braces className="text-pink-500" />,
    items: ["JavaScript", "TypeScript", "C#", "C++", "Python" ],
  },
  {
    title: "Machine Learning & Research",
    icon: <Brain className="text-indigo-500" />, // import { Brain } from "lucide-react"
    items: [
      "Machine Learning",
      "Computer Vision", 
      "Data Analysis",
      "Deep Learning",
      "Model Training & Evaluation",
      "TensorFlow", 
      "Natural Language Processing (NLP)", 
      "Data Preprocessing & Feature Engineering",
      "Research & Publications (3 Papers)",
    ],
  },
  {
    title: "Tools",
    icon: <Wrench className="text-yellow-500" />,
    items: [
      "VS Code", "Git CLI", "GitHub", "Postman", "Chrome DevTools", 
      "Docker", "Jenkns", "Kubernetes", "ClickUp","Jira", "Figma",  "Vercel"
    ],
  },
];


export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-gray-950 text-slate-800 dark:text-slate-200 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">My Skills</p>
        <h2 className="text-4xl font-bold mb-10">Skill Highlights</h2>

        <div className="grid cursor-pointer md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div
              key={category.title}
              className="bg-slate-100 dark:bg-gray-900 rounded-2xl p-6 shadow-md border 
                        border-gray-200 dark:border-gray-800 
                        transition-all duration-300 ease-in-out
                        hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                {category.icon} {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-200 dark:bg-slate-800 text-sm px-3 py-1 rounded-md 
                              text-slate-800 dark:text-slate-100 
                              transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
