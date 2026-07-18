"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Calendar } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

const projects = [
  {
    title: "Early — Appointment Booking System",
    period: "2025 — Present",
    status: "In Progress",
    statusColor: "#00ff88",
    description:
      "Full-stack appointment booking platform with a Flutter mobile client and a TypeScript/Node.js backend. Handles scheduling, availability management, booking tracking, and role-based access for both customers and service providers.",
    highlights: [
      "Flutter mobile app for customers and service providers (Dart)",
      "Node.js + TypeScript REST API backend with Express.js",
      "JWT-based authentication and Role-Based Access Control (RBAC)",
      "Relational database schema for users, services, and appointments",
      "Cross-platform: iOS, Android, and Web via Flutter",
    ],
    tags: ["Flutter", "Dart", "TypeScript", "Node.js", "Express.js", "REST API", "RBAC", "JWT"],
    color: "#00f0ff",
    github: "https://github.com/FTthadiya/Early_App",
    demo: null,
  },
  {
    title: "Tan Digitals — Agency Website",
    period: "2025 — Present",
    status: "Live",
    statusColor: "#00ff88",
    description:
      "Company website for Tan Digitals, the web design & development studio I founded. Showcases services, client work, and a contact funnel for new business inquiries.",
    highlights: [
      "Designed and built the full site in Next.js and Tailwind CSS",
      "Showcases agency services and a portfolio of client work",
      "Deployed and maintained independently as the studio's primary web presence",
      "Integrated contact/inquiry flow for lead generation",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Agency", "Web Design"],
    color: "#bf00ff",
    github: null,
    demo: "https://tandigital.com",
  },
  {
    title: "Rightvantage — Business Support Platform",
    period: "2025",
    status: "Completed",
    statusColor: "#00ff88",
    description:
      "Full-stack business support platform built via Tan Digitals for a Colombo-based firm offering HR, payroll, legal, compliance, and corporate services. A 20-page site with a blog, contact forms, WhatsApp integration, and an auto-reply email system.",
    highlights: [
      "20-page marketing site with an integrated blog and contact system",
      "WhatsApp integration for direct client contact",
      "Automated auto-reply email workflows via Resend",
      "SEO-optimized structure for legal & business service offerings",
      "Deployed on Vercel with Next.js 14 App Router",
    ],
    tags: ["Next.js 14", "TypeScript", "Resend", "Vercel", "SEO"],
    color: "#00ff88",
    github: null,
    demo: "https://rightvantage.lk",
  },
  {
    title: "Alimankada Summit 2026 — Conservation & Events",
    period: "2026",
    status: "Completed",
    statusColor: "#00f0ff",
    description:
      "Sri Lanka's national elephant conservation summit website, built for the University of Peradeniya and The Elephant Promise Foundation. Features a live countdown timer, dual-day agenda, speaker profiles, a registration portal, and 14+ partner listings.",
    highlights: [
      "Next.js 14 with App Router and server-side rendering",
      "Live countdown timer to the summit date",
      "Dual-day event agenda and speaker profile pages",
      "Delegate registration portal with form validation",
      "14+ partner organization listings across a multi-section layout",
    ],
    tags: ["Next.js", "TypeScript", "Event Site", "Countdown Timer", "Registration", "Multi-Section"],
    color: "#bf00ff",
    github: "https://github.com/FTthadiya/AlimankadaSummit",
    demo: "https://alimankadasummit.lk",
  },
  {
    title: "TTLABS — MERN Resource Management",
    period: "2023 — 2024",
    status: "Completed",
    statusColor: "#00f0ff",
    description:
      "Enterprise-grade full-stack MERN application for resource management with secure authentication, CI/CD pipelines, and Agile-driven iterative releases. Containerised with Docker for consistent deployment.",
    highlights: [
      "Full-stack MERN (MongoDB, Express.js, React.js, Node.js)",
      "Secure REST APIs with RBAC and OTP-based authentication",
      "Containerised with Docker and Docker Compose",
      "CI/CD pipelines with automated testing workflows",
      "Led Agile-based iterative sprint releases",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Docker", "CI/CD", "OTP Auth", "RBAC"],
    color: "#ff0080",
    github: "https://github.com/FTthadiya/TTLABS",
    demo: null,
  },
  {
    title: "Enterprise Application — ASP.NET Core",
    period: "2026",
    status: "Completed",
    statusColor: "#00f0ff",
    description:
      "Enterprise web application built with ASP.NET Core as part of coursework on enterprise systems design. Covers multi-tier architecture, data management, and server-side rendered UI with C# backend logic.",
    highlights: [
      "ASP.NET Core MVC architecture with C# backend",
      "HTML/CSS/JavaScript frontend with server-side rendering",
      "Multi-tier enterprise application design patterns",
      "Database integration and data management layer",
      "RESTful service endpoints and form handling",
    ],
    tags: ["ASP.NET Core", "C#", "HTML", "CSS", "JavaScript", "MVC", "Entity Framework"],
    color: "#00ff88",
    github: "https://github.com/FTthadiya/CW1-enterprise-applications",
    demo: null,
  },
  {
    title: "Arrow Escape — 2D Puzzle Game",
    period: "2026",
    status: "Completed",
    statusColor: "#00f0ff",
    description:
      "A 2D puzzle/escape game built in C#. Players navigate arrow-based mechanics through increasingly complex levels. Focused on clean game logic, state management, and modular level design.",
    highlights: [
      "Built entirely in C# with object-oriented game logic",
      "Arrow-based movement and collision detection systems",
      "Modular level design for easy extensibility",
      "State machine for game flow and level progression",
      "Clean separation of game logic and rendering",
    ],
    tags: ["C#", "Game Dev", "OOP", "State Machine", "2D"],
    color: "#00f0ff",
    github: "https://github.com/FTthadiya/ArrowEscape",
    demo: null,
  },
  {
    title: "2D Maze Puzzle Engine",
    period: "2024",
    status: "Completed",
    statusColor: "#00f0ff",
    description:
      "A modular Java-based puzzle engine featuring a custom Domain-Specific Language (DSL) for defining maze rules and layouts, with Jython scripting for runtime extensibility. Designed for clean architecture and plugin-based extensions.",
    highlights: [
      "Modular Java engine with plugin-based architecture",
      "Custom DSL for defining maze rules and layouts",
      "Jython (Python in Java) scripting for runtime extensibility",
      "Clean separation of engine, rules, and rendering layers",
      "Designed for scalable extensibility and maintainability",
    ],
    tags: ["Java", "DSL", "Jython", "Plugin Architecture", "OOP", "Design Patterns"],
    color: "#bf00ff",
    github: "https://github.com/FTthadiya/COMP2003",
    demo: null,
  },
  {
    title: "Distributed Computing System",
    period: "2024",
    status: "Completed",
    statusColor: "#00f0ff",
    description:
      "A distributed computing coursework project built in C# demonstrating distributed system principles: message passing, concurrency control, remote communication, and fault tolerance in a networked application.",
    highlights: [
      "C# distributed system with remote communication",
      "Message passing and inter-process coordination",
      "Concurrency control and thread-safe resource access",
      "Fault tolerance and error recovery mechanisms",
      "Designed around distributed systems theory and patterns",
    ],
    tags: ["C#", ".NET", "Distributed Systems", "Concurrency", "Networking", "Message Passing"],
    color: "#ff0080",
    github: "https://github.com/FTthadiya/COMP3008",
    demo: null,
  },
  {
    title: "Air Traffic Simulation",
    period: "2024",
    status: "Completed",
    statusColor: "#00f0ff",
    description:
      "A concurrent Java simulation of air traffic control systems demonstrating deep understanding of multithreading, thread pools, and safe concurrent resource access patterns at scale.",
    highlights: [
      "Concurrent backend simulation with Java multithreading",
      "Thread pools and blocking queues for safe resource management",
      "Thread-safe scheduling and task coordination",
      "Scalable design for high-throughput simulation scenarios",
      "Applied design patterns: Producer-Consumer, Thread Pool",
    ],
    tags: ["Java", "Concurrency", "Thread Pools", "Blocking Queues", "Simulation", "Design Patterns"],
    color: "#00ff88",
    github: "https://github.com/FTthadiya/COMP3003",
    demo: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#bf00ff]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[#00f0ff] text-sm tracking-widest">03.</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white">Projects</h2>
            <div className="h-px flex-1 max-w-48 bg-gradient-to-r from-[#00f0ff]/40 to-transparent" />
          </div>
          <p className="text-slate-400 text-sm ml-8">
            Things I&apos;ve built — from distributed systems to full-stack apps and games
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-[#0a0a12] rounded-xl overflow-hidden card-hover relative"
              style={{ border: `1px solid ${project.color}20` }}
            >
              {/* Top accent bar */}
              <div
                className="h-0.5 w-full"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded-full"
                        style={{
                          color: project.statusColor,
                          background: `${project.statusColor}15`,
                          border: `1px solid ${project.statusColor}30`,
                        }}
                      >
                        ● {project.status}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-xs text-slate-600">
                        <Calendar size={10} />
                        {project.period}
                      </span>
                    </div>
                    <h3
                      className="font-bold text-lg text-white group-hover:transition-colors"
                      style={{ transition: "color 0.2s" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-3 ml-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-[#00f0ff] hover:rotate-12 transition-all duration-300"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-[#00f0ff] hover:rotate-12 transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((point, j) => (
                    <li key={j} className="flex gap-2 text-slate-500 text-xs">
                      <span
                        className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: project.color }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Website button */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg transition-all duration-200 hover:gap-3"
                    style={{
                      color: project.color,
                      background: `${project.color}10`,
                      border: `1px solid ${project.color}30`,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = `${project.color}20`;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = `${project.color}60`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = `${project.color}10`;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = `${project.color}30`;
                    }}
                  >
                    <ExternalLink size={13} />
                    View Website
                  </a>
                )}
              </div>

              {/* Hover glow overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 rounded-xl"
                style={{
                  background: `radial-gradient(circle at center, ${project.color}05 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/FTthadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-2"
          >
            <GithubIcon size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
