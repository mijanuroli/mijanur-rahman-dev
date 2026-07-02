import { Github, Linkedin, Mail, ArrowUpRight, Code2 } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/mijanur-rahman-oli", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/mijanur-rahman-oli", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mijanworks@gmail.com", label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40 bg-background/80 backdrop-blur-sm">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-32 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* ── Main row ── */}
        <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-5">

          {/* Left: Brand */}
          <div className="flex items-center gap-4">
            <span className="font-heading text-base font-bold text-foreground tracking-tight">
              Mijanur Rahman Oli
            </span>
          </div>

          {/* Center: Socials - More Visible */}
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-xl border-2 border-border/30 hover:border-primary/50 hover:bg-primary/5 flex items-center justify-center text-foreground/70 hover:text-primary transition-all duration-200 group"
              >
                <s.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
          </div>

          {/* Right: CTA */}
          <a
            href="#contact"
            className="text-xs font-mono tracking-widest uppercase text-foreground/60 hover:text-primary transition-colors duration-200 flex items-center gap-1.5 group"
          >
            Let's Talk
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}