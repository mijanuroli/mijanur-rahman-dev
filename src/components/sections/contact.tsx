"use client";

import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: Mail,   label: "Email",    value: "mijanworks@gmail.com", href: "mailto:mijanworks@gmail.com" },
  { icon: Phone,  label: "Phone",    value: "+8801779933459",         href: "tel:+8801779933459"         },
  { icon: MapPin, label: "Location", value: "Sylhet, Bangladesh",      href: "#"                          },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: string | null; message: string }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });
    try {
      const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) throw new Error("Config missing.");
      
      await emailjs.send(serviceId, templateId, {
        name: formData.name, email: formData.email, message: formData.message,
      }, publicKey);
      
      setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: (err as any)?.text || "Failed to send. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 cross-pattern opacity-25" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-12 md:mb-14">
          <div className="shrink-0">
            <span className="section-label">Get In Touch</span>
            <div className="w-8 h-0.5 mt-2 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
          <div className="flex-1 h-px bg-border/60" />
          <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest hidden sm:block">
            07 / CONTACT
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold">
            Hire <span className="text-gradient">Me</span>
          </h2>
          <p className="font-mono text-xs text-muted-foreground/60 tracking-wide max-w-xs leading-relaxed">
            Open to full-time roles, freelance contracts, and interesting collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-6 items-start">
          {/* Form */}
          <div className="card p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    Name
                  </label>
                  <input
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-2 border border-border focus:border-primary/50 outline-none transition-all text-foreground text-sm font-light placeholder:text-muted-foreground/40 rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-2 border border-border focus:border-primary/50 outline-none transition-all text-foreground text-sm font-light placeholder:text-muted-foreground/40 rounded-lg"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={6}
                  required
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-surface-2 border border-border focus:border-primary/50 outline-none transition-all text-foreground text-sm font-light placeholder:text-muted-foreground/40 rounded-lg resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full flex items-center justify-center gap-2 group"
              >
                {isLoading ? (
                  <span className="font-mono text-xs tracking-widest uppercase">Sending…</span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>

              {status.type && (
                <div
                  className={`flex items-center gap-3 p-4 text-sm font-light rounded-lg border
                    ${status.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                      : "bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-400"
                    }`}
                >
                  {status.type === "success"
                    ? <CheckCircle className="w-4 h-4 shrink-0" />
                    : <AlertCircle className="w-4 h-4 shrink-0" />}
                  {status.message}
                </div>
              )}
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="card p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <h3 className="font-heading text-base font-bold mb-5">Contact Info</h3>
              <div className="space-y-1">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3.5 p-3 -mx-3 rounded-lg hover:bg-[hsl(var(--surface-2))] transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 border border-border flex items-center justify-center shrink-0 rounded-lg group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-200">
                      <item.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/50 mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-sm text-foreground/80 group-hover:text-foreground transition-colors font-light truncate">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <div className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/50 mb-4">
                Find Me On
              </div>
              <div className="flex gap-3">
                {[
                  { icon: Github,   href: "https://github.com/mijanur-rahman-oli",    label: "GitHub"   },
                  { icon: Linkedin, href: "https://linkedin.com/in/mijanur-rahman-oli", label: "LinkedIn" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
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