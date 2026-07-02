"use client";
import { Code2, Lightbulb, Rocket, Users, Download } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Maintainable, scalable architecture following industry standards.",
    num: "01",
    accent: "#6366f1",
  },
  {
    icon: Rocket,
    title: "Performance",
    desc: "Optimized for speed, Core Web Vitals, and scale.",
    num: "02",
    accent: "#22c55e",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Team player focused on shared goals and clear communication.",
    num: "03",
    accent: "#f59e0b",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Modern stacks applied to real-world business problems.",
    num: "04",
    accent: "#ec4899",
  },
];

const GOOGLE_DRIVE_FILE_ID = "1ALrd3ciP8r3YWNzuBxCGpYrU2tFQOr1x";

export function About() {
  const handleDownloadCV = () => {
    window.open(`https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/view?usp=sharing`, "_blank");
  };

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center gap-5 mb-12 md:mb-14">
          <div className="shrink-0">
            <span className="section-label">Overview</span>
            <div className="w-8 h-0.5 mt-2 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
          <div className="flex-1 h-px bg-border/60" />
          <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest hidden sm:block">
            01 / ABOUT
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
             <h2 className="font-heading text-2xl md:text-3xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-light leading-[1.8] text-sm sm:text-base">
              <p>
                I'm a CS student and full-stack developer passionate about building scalable web
                applications that solve real problems. I craft responsive interfaces with React and
                Next.js, and build robust APIs with Node.js, Express, PostgreSQL, and MongoDB.
              </p>
              <p>
                I've interned at software companies, shipped production-grade platforms serving
                thousands of users, and worked across the entire product lifecycle, from design
                to deployment.
              </p>
              <p>
                Currently exploring AI engineering and how machine learning transforms user
                experiences. Seeking a collaborative team to build meaningful, boundary-pushing work.
              </p>
            </div>

            <div className="relative pl-5 py-1">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-primary via-indigo-400 to-transparent" />
              <p className="font-mono text-xs sm:text-sm text-primary/75 italic leading-relaxed">
                "CS student by degree, Full-stack developer by passion."
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Frontend", "Backend", "Full Stack"].map((t) => (                
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <button onClick={handleDownloadCV} className="btn-primary inline-flex items-center gap-2">
              <Download className="w-4 h-6" />
              Resume
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="card p-4 md:p-5 group relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="absolute -top-2 -right-1 font-heading text-5xl font-extrabold leading-none select-none"
                  style={{ color: item.accent + "0c" }}
                >
                  {item.num}
                </div>
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"
                  style={{ background: `linear-gradient(to right, ${item.accent}60, transparent)` }}
                />
                <div className="relative z-10">
                  <div
                    className="w-9 h-9 flex items-center justify-center mb-3 rounded-lg border transition-colors duration-300"
                    style={{
                      borderColor: item.accent + "30",
                      background: item.accent + "10",
                    }}
                  >
                    <item.icon className="w-4 h-4 transition-colors duration-300" style={{ color: item.accent }} />
                  </div>
                  <h3 className="font-heading text-sm md:text-base font-bold mb-1.5 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
