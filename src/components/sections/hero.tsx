"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";

const roles = ["Full Stack Developer", "MERN Specialist", "Next.js Builder", "BSc in CSE"];

const techStack = [
  { name: "Next.js", icon: "nextjs", color: "#a1a1aa" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Node.js", icon: "nodejs", color: "#339933" },
  { name: "PostgreSQL", icon: "postgres", color: "#4169E1" },
  { name: "Prisma", icon: "prisma", color: "#8B9DC3" },
];

// Google Drive file ID
const GOOGLE_DRIVE_FILE_ID = "1ALrd3ciP8r3YWNzuBxCGpYrU2tFQOr1x";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const handleDownloadCV = () => {
    // Open Google Drive link in new tab
    window.open(`https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/view?usp=sharing`, "_blank");
  };

  return (
    <section
      suppressHydrationWarning
      className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20"
    >
      <div className="absolute inset-0 cross-pattern opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute top-20 left-6 w-16 h-16 border-l border-t border-primary/20 hidden md:block" />
      <div className="absolute top-20 right-6 w-16 h-16 border-r border-t border-primary/20 hidden md:block" />
      <div className="absolute bottom-12 left-6 w-16 h-16 border-l border-b border-primary/20 hidden md:block" />
      <div className="absolute bottom-12 right-6 w-16 h-16 border-r border-b border-primary/20 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 md:pt-12 pb-12 md:pb-20 relative z-10 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-center">
          <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[400px]">
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/15 rounded-xl pointer-events-none" />

              <div className="relative rounded-xl overflow-hidden border border-border/60 bg-surface-2 no-shadow-card">
                <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                  <Image
                    src="/profile-photo.png"
                    alt="Mijanur Rahman Oli — Full Stack Developer"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 400px"
                  />

                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.18) 38%, transparent 62%)",
                    }}
                  />

                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/60 text-[10px] font-mono tracking-wide text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Available for Hire
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Experience</div>
                      <div className="text-lg font-heading font-bold text-gradient leading-tight">2+ Years</div>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-3 border-t border-border/50 flex flex-nowrap gap-2 justify-center overflow-x-auto no-scrollbar">
                  {techStack
                    .filter((s) => s.name.toLowerCase() !== "prisma")
                    .map((s) => (
                      <div
                        key={s.name}
                        className="flex-shrink-0 flex items-center justify-center p-1.5 rounded-lg border"
                        style={{
                          borderColor: s.color + "35",
                          background: s.color + "0d"
                        }}
                        title={s.name}
                      >
                        <Image
                          src={`https://skillicons.dev/icons?i=${s.icon}&theme=light`}
                          alt={s.name}
                          width={28}
                          height={28}
                          className="w-7 h-7 dark:hidden"
                          unoptimized
                        />
                        <Image
                          src={`https://skillicons.dev/icons?i=${s.icon}&theme=dark`}
                          alt={s.name}
                          width={28}
                          height={28}
                          className="w-7 h-7 hidden dark:block"
                          unoptimized
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-1 space-y-5 md:space-y-7 text-center lg:text-left">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2">
                <div className="w-6 h-px bg-primary/50 hidden lg:block" />
                <span className="font-mono text-xs sm:text-sm text-muted-foreground">
                  <span className="text-primary">{displayed}</span>
                  <span className="animate-blink text-primary">|</span>
                </span>
              </div>
            </div>

            <div className="animate-fade-in animation-delay-100">
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2] tracking-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block text-gradient mt-1">Mijanur Rahman Oli</span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[520px] mx-auto lg:mx-0 animate-fade-in animation-delay-200 font-light">
              Full Stack Developer & SaaS Builder. I architect production-grade systems with
              Next.js, TypeScript, and the MERN stack from clean UI to scalable backend APIs.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-fade-in animation-delay-300">
              <a href="#contact" className="btn-primary flex items-center gap-2 group text-sm">
                Let's Talk
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button onClick={handleDownloadCV} className="btn-ghost flex items-center gap-2 group text-sm">
                <Download className="w-3.5 h-3.5" />
                Resume
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-1 animate-fade-in animation-delay-400">
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                Find me on
              </span>
              <div className="flex gap-2">
                {[
                  { icon: Github, href: "https://github.com/mijanur-rahman-oli", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/mijanur-rahman-oli", label: "LinkedIn" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-sm border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}