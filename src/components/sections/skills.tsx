"use client";
import Image from "next/image";

const skillCategories = [
  {
    name: "Frontend",
    accent: "#6366f1",
    label: "UI & Interaction",
    skills: [
      { key: "react",      name: "React"       },
      { key: "nextjs",     name: "Next.js"      },
      { key: "typescript", name: "TypeScript"   },
      { key: "javascript", name: "JavaScript"   },
      { key: "tailwind",   name: "Tailwind CSS" },
    ],
  },
  {
    name: "Backend",
    accent: "#22c55e",
    label: "APIs & Server Logic",
    skills: [
      { key: "nodejs",   name: "Node.js"    },
      { key: "express",  name: "Express.js" },
      { key: "python",   name: "Python"     },
      { key: "graphql",  name: "GraphQL"    },
    ],
  },
  {
    name: "Database",
    accent: "#3b82f6",
    label: "Storage & Data",
    skills: [
      { key: "postgres", name: "PostgreSQL" },
      { key: "mongodb",  name: "MongoDB"    },
      { key: "prisma",   name: "Prisma"     },
      { key: "mysql",    name: "MySQL"      },
    ],
  },
  {
    name: "Tools & DevOps",
    accent: "#f59e0b",
    label: "Infra & Workflow",
    skills: [
      { key: "docker",   name: "Docker"   },
      { key: "postman",  name: "Postman"  },
      { key: "aws",      name: "AWS"      },
      { key: "git",      name: "Git"      },
      { key: "github",   name: "GitHub"   },
      { key: "vercel",   name: "Vercel"   },
      { key: "netlify",  name: "Netlify"  },
      { key: "figma",    name: "Figma"    },
      { key: "linux",    name: "Linux"    },
      { key: "vscode",   name: "VS Code"  },
      { key: "npm",      name: "npm"      },
    ],
  },
];

function SkillTile({ skillKey, name }: { skillKey: string; name: string }) {
  return (    
    <div className="group flex flex-col items-center gap-2">
      <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl border border-border/70 bg-[hsl(var(--surface-2))] hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 hover:-translate-y-0.5">
        <Image
          src={`https://skillicons.dev/icons?i=${skillKey}&theme=light`}
          alt={name}
          width={32} height={32}
          className="w-6 h-6 sm:w-7 sm:h-7 dark:hidden"
          unoptimized
        />
        <Image
          src={`https://skillicons.dev/icons?i=${skillKey}&theme=dark`}
          alt={name}
          width={32} height={32}
          className="w-6 h-6 sm:w-7 sm:h-7 hidden dark:block"
          unoptimized
        />
      </div>
      <span className="font-mono text-[10px] sm:text-[11px] tracking-wide text-foreground/80 group-hover:text-primary transition-colors text-center leading-tight max-w-[60px] font-medium">
        {name}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-12 md:mb-14">
          <div className="shrink-0">
            <span className="section-label">Tech Stack</span>
            <div className="w-8 h-0.5 mt-2 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
          <div className="flex-1 h-px bg-border/60" />
          <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest hidden sm:block">
            02 / SKILLS
          </span>
        </div>

        <div className="mb-10">
           <h2 className="font-heading text-2xl md:text-3xl font-bold">
            Tech <span className="text-gradient">Stacks</span>
          </h2>
          <p className="text-muted-foreground font-light mt-3 max-w-lg leading-relaxed text-sm sm:text-base">
            Production-grade tools across the full stack, from UI to cloud.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="card p-5 md:p-6 animate-fade-in"
              style={{ animationDelay: `${idx * 70}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-[3px] h-9 rounded-full shrink-0"
                    style={{
                      background: `linear-gradient(to bottom, ${cat.accent}, ${cat.accent}33)`,
                    }}
                  />
                  <div>
                    <h3 className="font-heading text-sm md:text-base font-bold text-foreground leading-none">
                      {cat.name}
                    </h3>
                    <p className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/50 mt-1">
                      {cat.label}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((s) => (                  
                  <SkillTile key={s.key} skillKey={s.key} name={s.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}