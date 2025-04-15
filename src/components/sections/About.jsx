import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const web_services = [
    "React",
    "TailwindCSS",
    "Node.js",
    "JavaScript",
    "Python",
  ];

  const game_dev = ["Godot", "Python", "Unity", "Blender", "Aesprite"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-600 to-orange-700 bg-clip-text text-transparent text-center">
            {" "}
            About Us
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developers with expertise in building scalable web
              applications and creating innovative solutions. Fun & Game Development goes hand-in-hand.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Web Services</h3>
                <div className="flex flex-wrap gap-2">
                  {web_services.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 
                                    hover:shadow-[0_2px_8px_rgba(220,20,60,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Game Development</h3>
                <div className="flex flex-wrap gap-2">
                  {game_dev.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 
                                    hover:shadow-[0_2px_8px_rgba(220,20,60,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li>
                  <strong> PCMC in Dalimss Sunbeam </strong> - Akshat Singh
                  (2023-2025)
                </li>
                <li>
                  <strong> PCMC in Radcliffe School </strong> - Karthik S.Shamil
                  (2023-2025)
                </li>
                <li>
                  <strong>Relevant Courses </strong> - Python Crash Course, FullStack Web Development, 
                  Eloquent JavaScript, Game Progamming Patterns....
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🧑‍💻 Expertise </h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Akshat Singh{" "}
                  </h4>
                  <p>
                    Full Stack Web Services, Game Dev in Godot, Video Editing in Davinchi Resolve
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Karthik S Shamil
                  </h4>
                  <p>
                    Front-End Web Services, GameDev in Python, Blender for Editing
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
