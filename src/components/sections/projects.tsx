"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink, Eye } from "lucide-react";
import Image from "next/image";
import { ProjectModal } from "../project-modal";

const allProjects = [
  {
    id: 1,
    title: "Inventory Management System",
    description: "Production-ready IMS with Salesforce and Odoo API integration for seamless enterprise data synchronization.",
    longDescription: "A comprehensive inventory management system designed for enterprise-level operations. The platform integrates with Salesforce CRM and Odoo ERP through REST APIs, enabling real-time data synchronization across multiple business systems.",
    image: "/projects/inventory.png",
    images: [
      "/projects/inventory.png", 
      "/projects/inventory-2.png", 
      "/projects/inventory-3.png"
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM"],
    link: "https://inventory-system-gold-five.vercel.app/",
    github: "https://github.com/mijanur-rahman-oli/inventory-system.git",
    githubFrontend: "",
    githubBackend: "",
    featured: true,
    category: "Full Stack",
    year: "2026",
    techStack: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma ORM", "Salesforce API", "Odoo API", "Tailwind CSS"],
    features: [
      "Salesforce & Odoo API integration for seamless data sync",
      "Real-time inventory tracking across multiple warehouses",
      "Automated purchase order generation and management",
      "Advanced analytics and reporting dashboard",
      "Multi-warehouse support with stock transfer capabilities",
      "Role-based access control for enterprise security"
    ],
    demoCredentials: {
      email: "inventory@gmail.com",
      password: "demo1234"
    }
  },
  {
    id: 2,
    title: "Agrobite",
    description: "A live e-commerce platform powered by The Agricast Show, selling agricultural products with customer and seller dashboards.",
    longDescription: "Agrobite is a fully functional e-commerce platform currently running a live business, powered by The Agricast Show — a popular agricultural media platform. The platform enables farmers and agricultural businesses to sell their products directly to consumers.",
    image: "/projects/agrobite.png",
    images: [
      "/projects/agrobite.png", 
      "/projects/agrobite-2.png", 
      "/projects/agrobite-3.png"
    ],
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://agrobite.bd",
    github: "https://github.com/mijanur-rahman-oli/agrobite-ecommerce.git",
    githubFrontend: "",
    githubBackend: "",
    featured: true,
    category: "Full Stack",
    year: "2026",
    techStack: ["React 18", "Node.js", "Express.js", "MongoDB", "Stripe API", "Tailwind CSS", "JWT Auth", "Cloudinary"],
    features: [
      "Live e-commerce platform powered by The Agricast Show",
      "Customer dashboard for order management and purchase history",
      "Seller dashboard for inventory and order management",
      "Real-time inventory tracking and management",
      "Secure payment processing with Stripe integration",
      "Product listing with images, descriptions, and pricing",
      "Order tracking and delivery status updates",
      "Responsive design optimized for all devices"
    ],
    demoCredentials: {
      email: "agrobite@gmail.com",
      password: "demo1234"
    }
  },
  {
    id: 3,
    title: "Club & Event Platform",
    description: "Multi-role marketplace enabling clubs to manage memberships and events with Stripe payment processing.",
    longDescription: "A comprehensive platform for clubs, organizations, and event managers to streamline their operations. The platform supports multiple user roles including club admins, event organizers, and regular members.",
    image: "/projects/project1.png",
    images: [
      "/projects/project1.png", 
      "/projects/project1-2.png", 
      "/projects/project1-3.png"
    ],
    tags: ["React", "Node.js", "Firebase", "Stripe", "MongoDB"],
    link: "https://unrivaled-florentine-bff2fc.netlify.app/",
    github: "",
    githubFrontend: "https://github.com/mijanur-rahman-oli/club-sphere-client.git",
    githubBackend: "https://github.com/mijanur-rahman-oli/club-sphere-server.git",
    featured: true,
    category: "Full Stack",
    year: "2025",
    techStack: ["React 18", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Stripe API", "Socket.io"],
    features: [
      "Multi-role user management (Admin, Organizer, Member)",
      "Event creation, booking, and attendance tracking",
      "Secure payment processing for events and memberships",
      "Real-time notifications and updates via Socket.io",
      "Membership tier management with automated renewals",
      "Interactive calendar and event discovery features"
    ],
    demoCredentials: {
      email: "admin@gmail.com",
      password: "admin123"
    }
  },
  {
    id: 4,
    title: "Vehicle Rental Platform",
    description: "Full-stack rental marketplace with real-time booking, advanced filtering, and integrated payments.",
    longDescription: "A modern vehicle rental marketplace that connects vehicle owners with renters. The platform features real-time availability checking, advanced filtering by vehicle type, price range, and location.",
    image: "/projects/project2.png",
    images: [
      "/projects/project2.png", 
      "/projects/project2-2.png", 
      "/projects/project2-3.png"
    ],
    tags: ["React", "Tailwind", "Node.js", "Firebase", "MySQL"],
    link: "https://effulgent-speculoos-591922.netlify.app/",
    github: "",
    githubFrontend: "https://github.com/mijanur-rahman-oli/travel-ease-client.git",
    githubBackend: "https://github.com/mijanur-rahman-oli/travel-ease-server.git",
    featured: false,
    category: "Full Stack",
    year: "2025",
    techStack: ["React 18", "Node.js", "Express.js", "MySQL", "Firebase Auth", "Stripe API", "Tailwind CSS"],
    features: [
      "Real-time vehicle availability and booking system",
      "Advanced filtering by type, price, location, and availability",
      "Secure payment processing with Stripe integration",
      "User reviews and rating system for vehicles",
      "Interactive map integration for location-based search",
      "Comprehensive dashboard for owners and renters"
    ],
    demoCredentials: {
      email: "demo@travelease.com",
      password: "Demo@123"
    }
  },
  {
    id: 5,
    title: "Online Course Platform",
    description: "Comprehensive LMS enabling instructors to create courses and students to learn with interactive features.",
    longDescription: "A modern Learning Management System (LMS) that connects instructors with students. The platform features course creation with multimedia content, enrollment management, progress tracking, interactive quizzes, and certificate generation.",
    image: "/projects/project3.png",
    images: [
      "/projects/project3.png", 
    ],
    tags: ["Next.js", "Node.js", "Tailwind", "Firebase", "MongoDB"],
    link: "https://mentor-lab-frontend-bh91.vercel.app/",
    github: "https://github.com/mijanur-rahman-oli/mentor-lab-frontend.git",
    githubFrontend: "https://github.com/mijanur-rahman-oli/mentor-lab-frontend.git",
    githubBackend: "https://github.com/mijanur-rahman-oli/mentor-lab-backend.git",
    featured: false,
    category: "Full Stack",
    year: "2025",
    techStack: ["Next.js", "Node.js", "MongoDB", "Firebase Auth", "Tailwind CSS", "Cloudinary"],
    features: [
      "Course creation with multimedia content support",
      "Student enrollment and progress tracking",
      "Interactive quizzes and assignments",
      "Certificate generation upon course completion",
      "Instructor dashboard with analytics",
      "Discussion forums for student-instructor interaction"
    ],
    demoCredentials: {
      email: "demo@gmail.com",
      password: "demo1234"
    }
  },
  {
    id: 6,
    title: "Kids Toys Marketplace",
    description: "Colorful e-commerce platform for parents featuring user authentication, toy listings, and shopping cart.",
    longDescription: "A fun and colorful e-commerce platform designed for parents to discover and purchase toys for their children. The platform features user authentication, product browsing with category filtering, shopping cart, wishlist, and secure checkout.",
    image: "/projects/project4.png",
    images: [
      "/projects/project4.png", 
    ],
    tags: ["React", "Socket.io", "Firebase"],
    link: "https://brilliant-pasca-6f47be.netlify.app/",
    github: "",
    githubFrontend: "https://github.com/mijanur-rahman-oli/kids-toy-marketplace.git",
    githubBackend: "",
    featured: false,
    category: "Frontend",
    year: "2024",
    techStack: ["React", "Firebase", "Socket.io", "Tailwind CSS"],
    features: [
      "User authentication and profile management",
      "Dynamic product listings with category filtering",
      "Shopping cart and wishlist functionality",
      "Product reviews and ratings from parents",
      "Age-based and category-based product discovery",
      "Secure checkout process with order tracking"
    ],
    demoCredentials: {
      email: "demo@gmail.com",
      password: "demo1234"
    }
  },
];

const categories = ["All", "Full Stack", "Frontend"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);
  const filtered = selectedCategory === "All" ? visibleProjects : visibleProjects.filter(p => p.category === selectedCategory);

  return (
    <>
      <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center gap-5 mb-12 md:mb-14">
            <div className="shrink-0">
              <span className="section-label">Projects</span>
              <div className="w-8 h-0.5 mt-2 bg-gradient-to-r from-primary/40 to-transparent" />
            </div>
            <div className="flex-1 h-px bg-border/60" />
            <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest hidden sm:block">
              03 / PROJECTS
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-10">
             <h2 className="font-heading text-2xl md:text-3xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  suppressHydrationWarning
                  className={`font-mono text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-primary text-white"
                      : "border border-border/70 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {filtered.map((project, idx) => (
              <article
                key={idx}
                suppressHydrationWarning
                className="project-card group overflow-hidden relative flex flex-col cursor-pointer border border-border/60 bg-surface-2 rounded-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden aspect-video bg-surface-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 bg-background/80 backdrop-blur-sm border border-border/60 text-muted-foreground rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="font-mono text-[8px] tracking-widest uppercase px-2.5 py-1 bg-background/80 backdrop-blur-sm border border-border/60 text-muted-foreground rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 md:p-5 flex flex-col flex-1 bg-background">
                  <h3 className="font-heading text-base md:text-lg font-bold group-hover:text-primary transition-colors duration-300 leading-tight mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed font-light flex-1 line-clamp-2 mb-3 md:mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                    {project.tags.slice(0, 3).map((tag, ti) => (
                      <span key={ti} className="tag text-[8px] md:text-[0.6rem] px-1.5 md:px-2 py-0.5">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t border-border/40">
                    <button
                      suppressHydrationWarning
                      onClick={(e) => { e.stopPropagation(); window.open(project.link, "_blank"); }}
                      className="flex-1 btn-primary text-[10px] py-2 px-3 flex items-center justify-center gap-1.5 rounded-full"
                    >
                      <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      Live
                    </button>
                    <button
                      suppressHydrationWarning
                      onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                      className="flex-1 btn-ghost text-[10px] py-2 px-3 flex items-center justify-center gap-1.5 rounded-full"
                    >
                      <Eye className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {allProjects.length > 3 && (
            <div className="text-center mt-10 md:mt-14">
              <button
                suppressHydrationWarning
                onClick={() => setShowAll(!showAll)}
                className="btn-ghost inline-flex items-center gap-2.5 text-sm rounded-full px-6 py-2.5"
              >
                {showAll ? "Show Less" : "View All Projects"}
                <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}