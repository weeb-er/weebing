import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent leading-right">
            Hello Weebers
          </h1>

          <p className="tex-gray-100 text-lg mb-8 mx-auto">
            Welcome to our creative hub! I'm Akshat Singh, and alongside my partner in crime, Karthik S Shamil, we form a dynamic duo driven by a passion for innovation.
            Together, we tackle diverse projects; from crafting web experiences and video games in Python to Video Editing. Join us on this journey of Magic and Tech!!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#about"
              className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-red-500/10"
            >
              About Us
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
