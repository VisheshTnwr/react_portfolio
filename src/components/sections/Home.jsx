export const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent leading-right">
          Hi, Welcome to my Portfolio
        </h1>

        <p className="text-white  text-lg mb-8 max-w-lg mx-auto">
          I'm a full-stack developer who loves crafting clean scalable web
          applications. My goal is to build solutions that offer both
          exceptional performance and a delightful user experience.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-yellow-600 text-white py-3 p-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(252, 186, 3, 0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-yellow-500/50 text-yellow-500 py-3 px-6 rounded font-medium transition-all  duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(252, 186, 3, 0.2)] hover:bg-yellow-500/20"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};
