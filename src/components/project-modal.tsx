"use client";

import { useState, useEffect } from "react";
import { X, Github, ExternalLink, ChevronLeft, ChevronRight, Eye, Code } from "lucide-react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    images: string[];
    tags: string[];
    link: string;
    github: string;
    githubFrontend?: string;
    githubBackend?: string;
    featured: boolean;
    category: string;
    year: string;
    techStack: string[];
    features: string[];
    demoCredentials?: {
      email: string;
      password: string;
    };
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Reset index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsAutoSliding(true);
  }, [project]);

  // Auto-slide effect
  useEffect(() => {
    if (!isOpen || !project || project.images.length <= 1 || !isAutoSliding) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isOpen, project, isAutoSliding]);

  if (!project) return null;

  const hasMultipleImages = project.images.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoSliding(false);
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    setTimeout(() => setIsAutoSliding(true), 5000);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoSliding(false);
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    setTimeout(() => setIsAutoSliding(true), 5000);
  };

  const goToImage = (index: number) => {
    setIsAutoSliding(false);
    setCurrentImageIndex(index);
    setTimeout(() => setIsAutoSliding(true), 5000);
  };

  // Determine which code buttons to show
  const hasFrontend = !!project.githubFrontend;
  const hasBackend = !!project.githubBackend;
  const hasFullStack = !!project.github;

  const codeButtons = [];
  if (hasFrontend) codeButtons.push({ label: "Frontend Code", url: project.githubFrontend, icon: Code });
  if (hasBackend) codeButtons.push({ label: "Backend Code", url: project.githubBackend, icon: Code });
  if (hasFullStack && !hasFrontend && !hasBackend) {
    codeButtons.push({ label: "Full Stack Code", url: project.github, icon: Github });
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-fade-in" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 animate-scale-in">
          <div className="bg-background border border-border rounded-sm max-w-4xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-20 w-8 h-8 md:w-10 md:h-10 bg-background/90 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors hover:bg-background"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* Image Gallery */}
              <div className="relative aspect-video bg-surface-2">
                <Image
                  src={project.images[currentImageIndex] || project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />

                {/* Navigation Arrows - Only show if multiple images */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-background/90 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors hover:bg-background"
                    >
                      <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-background/90 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors hover:bg-background"
                    >
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 md:gap-2">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); goToImage(idx); }}
                          className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                            idx === currentImageIndex ? 'bg-primary w-4 md:w-6' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 lg:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 md:gap-4 mb-3 md:mb-4">
                  <div>
                    <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold">{project.title}</h2>
                    <div className="flex items-center gap-2 md:gap-3 mt-1.5 md:mt-2">
                      <span className="tag text-[10px] md:text-xs">{project.category}</span>
                      <span className="font-mono text-[8px] md:text-[10px] text-muted-foreground/50 tracking-widest">{project.year}</span>
                    </div>
                  </div>
                </div>

                                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 md:gap-3 pt-3 md:pt-4 border-t border-border/60">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-1.5 md:gap-2 text-xs md:text-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Live
                  </a>

                  {/* Dynamic Code Buttons */}
                  {codeButtons.map((btn, idx) => {
                    const Icon = btn.icon;
                    return (
                      <a
                        key={idx}
                        href={btn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost inline-flex items-center gap-1.5 md:gap-2 text-xs md:text-sm"
                      >
                        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        {btn.label}
                      </a>
                    );
                  })}

                  {/* If no specific code buttons, show the main github link */}
                  {codeButtons.length === 0 && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost inline-flex items-center gap-1.5 md:gap-2 text-xs md:text-sm"
                    >
                      <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      Source Code
                    </a>
                  )}
                </div>

                {/* Demo Credentials */}
                {project.demoCredentials && (
                  <div className="mt-4 md:mt-6 mb-4 md:mb-6 p-3 md:p-4 bg-primary/5 border border-primary/20 rounded-sm">
                    <h4 className="font-heading text-sm font-bold mb-2 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Demo Credentials
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/50">Email</span>
                        <p className="font-mono text-xs text-foreground/80">{project.demoCredentials.email}</p>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/50">Password</span>
                        <p className="font-mono text-xs text-foreground/80">{project.demoCredentials.password}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-4 md:mb-6">
                  {project.longDescription}
                </p>

                {/* Features */}
                <div className="mb-4 md:mb-6">
                  <h4 className="font-heading text-sm md:text-base font-bold mb-2 md:mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-light">
                        <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary/50 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4 md:mb-6">
                  <h4 className="font-heading text-sm md:text-base font-bold mb-2 md:mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tag text-[10px] md:text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}