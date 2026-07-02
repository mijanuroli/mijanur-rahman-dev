"use client";

import { GraduationCap, Award, Calendar, Building2, ExternalLink, ArrowUpRight } from "lucide-react";

const educations = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Metropolitan University",
    period: "2023 – 2027",
    status: "Expected",
    description:
      "Pursuing a rigorous computer science curriculum with focus on algorithms, data structures, software engineering, and modern web systems.",
    highlights: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "OOP"],
    watermark: "BSc",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Moulvibazar Govt. College",
    period: "2019 – 2021",
    status: "Completed",
    gpa: "5.00",
    description:
      "Completed HSC with Science group, building a strong foundation in Mathematics, Physics, and logical reasoning.",
    highlights: ["Mathematics", "Physics", "Chemistry", "Information Technology"],
    watermark: "HSC",
  },
];

const certifications = [
  {
    title: "Software Developer Internship",
    organization: "Itransition",
    date: "Jan 2026 – Mar 2026",
    description:
      "Engineered an inventory system under industry expert mentorship with Salesforce & Odoo API integrations for enterprise-grade data synchronization workflows.",
    credentialUrl:
      "https://drive.google.com/file/d/1VYhhijMTLU7ycluQzJqRGHNlsw_JOgQv/view?usp=sharing",
    tags: ["Salesforce", "Odoo APIs", "Next.js"],
  },
  {
    title: "Full Stack Web Development",
    organization: "Programming Hero",
    date: "2025",
    description:
      "Comprehensive full-stack curriculum covering MERN stack, REST APIs, authentication, and deployment workflows.",
    credentialUrl:
      "https://drive.google.com/file/d/16DmCZIvCR1DCkmozWERzbwzGiPyPD76O/view?usp=sharing",
    tags: ["MERN Stack", "REST API", "Next.js"],
  },
];

const handleViewCredential = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-500/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center gap-5 mb-12 md:mb-14">
          <div className="shrink-0">
            <span className="section-label">Background</span>
            <div className="w-8 h-0.5 mt-2 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
          <div className="flex-1 h-px bg-border/60" />
          <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest hidden sm:block">
            05 / EDUCATION
          </span>
        </div>

        <div className="mb-10 md:mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground font-light mt-3 max-w-lg leading-relaxed text-sm sm:text-base">
            Academic foundation paired with industry-recognized credentials.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 border border-primary/20 flex items-center justify-center rounded-sm">
                <GraduationCap className="w-4 h-4 text-primary/60" />
              </div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary/70">Education</span>
              <span className="font-mono text-[10px] text-muted-foreground/40">
                ({String(educations.length).padStart(2, "0")})
              </span>
            </div>

            {educations.map((edu, idx) => (
              <div
                key={idx}
                className="group card relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:-translate-y-0.5"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-5 md:p-6 relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-primary/40 tracking-widest">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                          <Building2 className="w-3 h-3 shrink-0" />
                          <span className="font-mono text-[10px] tracking-widest uppercase">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground/60">
                          <Calendar className="w-3 h-3 shrink-0" />
                          <span className="font-mono text-[10px] tracking-widest">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`badge shrink-0 ${
                        edu.status === "Expected"
                          ? "border border-primary/25 bg-primary/10 text-primary/80"
                          : "border border-border text-muted-foreground bg-[hsl(var(--surface-2))]"
                      }`}
                    >
                      {edu.status === "Expected" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="font-heading text-base md:text-lg font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                    {edu.degree}
                  </h3>

                  {edu.gpa && (
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-sm">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/60">GPA</span>
                      <span className="font-heading text-sm font-bold text-gradient">{edu.gpa}</span>
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground font-light leading-relaxed mb-5">
                    {edu.description}
                  </p>

                  <div className="pt-4 border-t border-border/40">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/50 block mb-3">
                      Key Modules
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {edu.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground font-light">
                          <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-2 watermark-text">{edu.watermark}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 border border-primary/20 flex items-center justify-center rounded-sm">
                <Award className="w-4 h-4 text-primary/60" />
              </div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary/70">Certifications</span>
              <span className="font-mono text-[10px] text-muted-foreground/40">
                ({String(certifications.length).padStart(2, "0")})
              </span>
            </div>

            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group card relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:-translate-y-0.5"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-primary/40 tracking-widest">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                          <Building2 className="w-3 h-3 shrink-0" />
                          <span className="font-mono text-[10px] tracking-widest uppercase">{cert.organization}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground/60">
                          <Calendar className="w-3 h-3 shrink-0" />
                          <span className="font-mono text-[10px] tracking-widest">{cert.date}</span>
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1" />
                  </div>

                  <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-muted-foreground font-light leading-relaxed mb-5">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.tags.map((tag, ti) => (
                      <span key={ti} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="divider-h mb-4" />

                  <button
                    onClick={() => handleViewCredential(cert.credentialUrl)}
                    className="btn-ghost flex items-center gap-2 group/btn text-xs py-2.5 px-4 w-full"
                    suppressHydrationWarning
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Credential
                    <span className="ml-auto font-mono text-[10px] text-muted-foreground/40 group-hover/btn:text-primary/60 transition-colors">
                      ↗
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}