import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];
  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent text-center ">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-yellow-500/20 border hover:-translate-y-1 transition-all">
          <p className="text-white mb-6">
            Passionate developer with expertise in building scalable web
            applications and crafting innovative solution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl text-yellow-500 font-bold mb-4">FrontEnd</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-yellow-500/20 text-white py-1 px-3 rounded-full text-sm hover:bg-yellow-500/50 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl text-yellow-500 font-bold mb-4">BackEnd</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-yellow-500/20 text-white py-1 px-3 rounded-full text-sm hover:bg-yellow-500/50 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-yellow-500/20 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-white space-y-2">
              <li>
                <strong>B.S in Computer Science</strong>- XYZ University (2016 -
                20)
              </li>
              <li>
                Relevant Coursework: Data Structure, Web Development, Cloud
                Computing...
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-yellow-500/20 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-white ">
              <div>
                <h4 className="font-semibold">Software Engineer at ABC Corp (2020- present)</h4>
                <p>
                  Developed and maintained microservices fo Cloud-based
                  applications.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Intern at DEF Startups (2019)</h4>
                <p>
                  Assisted in building front-end components and integration REST APIs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
