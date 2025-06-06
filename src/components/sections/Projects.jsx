import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="ma-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent text-center ">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-yellow-500/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Radiant Computers</h3>
              <p className="text-gray-400 mb-4">
                Built a sleek and modern I.T website to showcase the services.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-yellow-500/20 text-white py-1 px-3 rounded-full text-sm hover:bg-yellow-500/50 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.radiantcomputers.com"
                  target="_blank"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors my-4"
                >
                  {" "}
                  View Project ¬
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
