"use client";

import { Menu, X, Terminal } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#");
  const isClickRef = useRef(false);
  const lastScrollY = useRef(0);

  const handleDownloadCV = () => {
    const id = "1ALrd3ciP8r3YWNzuBxCGpYrU2tFQOr1x";
    window.open(`https://drive.google.com/file/d/${id}/view?usp=sharing`, "_blank");
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks
      .map((link) => link.href.replace("#", ""))
      .filter(Boolean);

    const updateActiveSection = () => {
      if (isClickRef.current) return;
      
      const scrollY = window.scrollY;
      
      if (scrollY < 100) {
        setActiveSection("#");
        return;
      }

      let currentActiveId = "";
      let minDistance = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          
          if (rect.top <= 200 && distance < minDistance) {
            minDistance = distance;
            currentActiveId = id;
          }
        }
      });

      if (!currentActiveId) {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const id = sectionIds[i];
          const el = document.getElementById(id);
          if (el) {
            const offsetTop = el.offsetTop;
            if (scrollY >= offsetTop - 100) {
              currentActiveId = id;
              break;
            }
          }
        }
      }

      if (currentActiveId) {
        setActiveSection(`#${currentActiveId}`);
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNav = (href: string) => {
    isClickRef.current = true;
    setActiveSection(href);
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace("#", "");
    if (targetId) {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setTimeout(() => {
      isClickRef.current = false;
    }, 800);
  };

  return (
    <header
      suppressHydrationWarning
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* ── Logo ── */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#");
          }}
          className="group shrink-0 relative z-10"
        >
          <span className="font-sans text-sm md:text-base font-bold tracking-tight text-foreground/90 group-hover:text-primary transition-colors duration-300">
            Mijanur Rahman Oli
          </span>
        </a>

        {/* ── Desktop Navigation Menu ── */}
        <div className="hidden md:flex items-center gap-1 bg-muted/40 backdrop-blur-md p-1 rounded-full border border-border/40 shadow-inner max-w-fit mx-auto">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={i}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className={cn(
                  "px-3.5 py-1.5 font-sans text-xs font-medium tracking-wide transition-all duration-300 rounded-full whitespace-nowrap",
                  isActive
                    ? "text-primary bg-background shadow-sm border border-border/20"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* ── Right Actions ── */}
        <div className="flex items-center gap-3 shrink-0 relative z-10">
          <ThemeToggle />

          {/* ── Clean Resume Button with Box Hover ── */}
          <button
            onClick={handleDownloadCV}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs tracking-wide font-medium transition-all duration-300 border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/25"
          >
            <Terminal className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
            <span>init resume</span>
          </button>

          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out",
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        <div 
          className="absolute inset-0 bg-background/60 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div
            className={cn(
              "w-full max-w-sm transform transition-all duration-300 ease-out",
              isMobileMenuOpen 
                ? "scale-100 opacity-100 translate-y-0" 
                : "scale-95 opacity-0 -translate-y-8"
            )}
          >
            <div className="bg-background/95 backdrop-blur-lg rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
              <div className="flex justify-end pt-2 pr-2">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-4 pb-4 space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={i}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className={cn(
                        "flex items-center justify-center px-4 py-3 rounded-xl font-sans text-sm font-medium tracking-wide transition-all duration-200",
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {link.label}
                    </a>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-border/40">
                  <button
                    onClick={handleDownloadCV}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-mono text-xs font-medium hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-200"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>init resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
