import {
  Code2, Server, Database, Braces, Wrench, PenTool
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: <Code2 className="text-blue-500" />,
    items: [
      "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS",
      "ShadCN UI", "Ant Design", "Redux", "React Query", "Framer Motion", "GSAP"
    ],
  },
  {
    title: "Backend",
    icon: <Server className="text-green-500" />,
    items: ["Node.js", "Express.js", "REST API"],
  },
  {
    title: "Database",
    icon: <Database className="text-purple-500" />,
    items: ["MongoDB", "PostgreSQL", "Prisma ORM", "Mongoose ODM"],
  },
  {
    title: "Programming",
    icon: <Braces className="text-pink-500" />,
    items: ["JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Tools",
    icon: <Wrench className="text-yellow-500" />,
    items: ["VS Code", "Git CLI", "GitHub", "Postman", "Chrome DevTools", "ClickUp"],
  },
  {
    title: "Creative",
    icon: <PenTool className="text-red-500" />,
    items: ["Figma", "Illustrator", "Photoshop"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-gray-950 text-slate-800 dark:text-slate-200 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">My Skills</p>
        <h2 className="text-4xl font-bold mb-10">Skill Highlights</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div
              key={category.title}
              className="bg-slate-100 dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-800 transition-colors"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                {category.icon} {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-200 dark:bg-slate-800 text-sm px-3 py-1 rounded-md text-slate-800 dark:text-slate-100 hover:bg-blue-500 dark:hover:bg-blue-500 transition"
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
