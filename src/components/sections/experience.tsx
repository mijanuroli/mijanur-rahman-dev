"use client";

import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    period: "Jan 2026 — Mar 2026",
    year: "2026",
    role: "Software Developer Intern",
    company: "Itransition",
    location: "Remote",
    description:
      "Facilitated cross-platform data synchronization by integrating Salesforce and Odoo APIs, ensuring seamless data flow and high accuracy across enterprise business workflows.",
    technologies: ["Next.js", "TypeScript", "React", "Prisma", "PostgreSQL"],
    current: false,
  },
  {
    period: "Jun 2024 — Present",
    year: "2024",
    role: "Full Stack Developer (part-time)",
    company: "Meson",
    location: "Remote",
    description:
      "Architected and deployed a production-ready e-commerce platform for books from scratch. Leads custom LMS operations serving 2,000+ active users with high availability, system security, and performance optimization.",
    technologies: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    current: true,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-12 md:mb-14">
          <div className="shrink-0">
            <span className="section-label">Work History</span>
            <div className="w-8 h-0.5 mt-2 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
          <div className="flex-1 h-px bg-border/60" />
          <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest hidden sm:block">
            04 / EXPERIENCE
          </span>
        </div>

        <div className="mb-10 md:mb-12">
           <h2 className="font-heading text-2xl md:text-3xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground font-light mt-3 max-w-lg leading-relaxed text-sm sm:text-base">
            From internships to production systems — a record of real delivery.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-14 sm:pl-16 animate-fade-in"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="absolute left-[14px] sm:left-[18px] top-5 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10 shrink-0">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                  )}
                </div>

                <div className="card p-5 md:p-6 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />


                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div className="space-y-1">
                      <h3 className="font-heading text-base md:text-lg font-bold group-hover:text-primary transition-colors duration-300">
                        {exp.role}
                      </h3>


                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                          <span className="font-heading text-sm font-bold text-primary">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground/60">
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span className="font-mono text-[14px] tracking-wide">
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Period - More Visible */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 border border-border/40">
                        <Calendar className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                        <span className="font-mono text-[11px] font-medium text-foreground/80">
                          {exp.period}
                        </span>
                      </div>
                      {exp.current && (
                        <span className="badge badge-primary">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed mb-4 mt-2">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                    {exp.technologies.map((tech, ti) => (
                      <span key={ti} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}