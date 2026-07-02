"use client";

import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "The most talented developer I've worked with. His attention to detail and ability to translate complex problems into elegant solutions is remarkable. He also dedicatedly managed our LMS, successfully serving over 2,000+ users with consistent reliability.",
    author: "Arafat Rahman",
    role: "CEO, Meson",
    avatar: "https://i.ibb.co/KzpnSCR2/arfat-vai.jpg",
    company: "Meson",
    rating: 5,
  },
  {
    quote:
      "A remarkably dedicated developer with an incredible eye for detail. Mijanur's work building our UK Payroll system showcased his ability to translate complex logic into elegant software solutions. He is a standout talent.",
    author: "Estiuck Al Regun",
    role: "CEO, DataXpie",
    avatar: "https://i.ibb.co/Y4Kydx72/regun.jpg",
    company: "DataXpie",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-12 md:mb-14">
          <div className="shrink-0">
            <span className="section-label">Social Proof</span>
            <div className="w-8 h-0.5 mt-2 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
          <div className="flex-1 h-px bg-border/60" />
          <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest hidden sm:block">
            06 / TESTIMONIALS
          </span>
        </div>

        <div className="mb-10 md:mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Happy <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-muted-foreground font-light mt-3 max-w-lg leading-relaxed text-sm sm:text-base">
            What people say about working with me.
          </p>
        </div>

        {/* ── Grid Layout ── */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="card p-6 md:p-8 group relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote icon */}
              <div className="w-8 h-8 border border-primary/20 flex items-center justify-center mb-4 rounded-sm bg-primary/5">
                <Quote className="w-3.5 h-3.5 text-primary/60" />
              </div>

              {/* Rating stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-primary text-primary/80"
                  />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-sm text-muted-foreground font-light leading-relaxed mb-5 line-clamp-4">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div className="relative shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover border-2 border-primary/30"
                    unoptimized
                    priority
                  />
                </div>
                <div>
                  <div className="font-heading text-sm font-bold">{t.author}</div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}