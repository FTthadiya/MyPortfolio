"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Calendar } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

const projects = [
  {
    title: "Appointment Booking & Management System",
    period: "2025 — Present",
    status: "In Progress",
    statusColor: "#00ff88",
    description:
      "A service-based booking platform with full-stack architecture. RESTful APIs for scheduling, availability management, and booking tracking. Mobile-first design with a Flutter client app.",
    highlights: [
      "Node.js (Express.js) backend with RESTful API design",
      "Authentication and Role-Based Access Control (RBAC)",
      "Designed database schemas for users, services, and appointments",
      "Flutter mobile application for customers and service providers",
    ],
    tags: ["Node.js", "Express.js", "Flutter", "REST API", "RBAC", "MongoDB"],
    color: "#00f0ff",
    github: "https://github.com/ftthadiya",
    demo: null,
  },
  {
    title: "TTLABS — MERN Resource Management System",
    period: "2023 — 2024",
    status: "Completed",
    statusColor: "#00f0ff",
    description:
      "Full-stack MERN application for resource management with enterprise-grade security. Agile iterative development with automated CI/CD and test pipelines.",
    highlights: [
      "Full-stack MERN (MongoDB, Express, React, Node.js)",
      "Secure REST APIs with RBAC and OTP-based authentication",
      "Implemented CI/CD pipelines and automated testing workflows",
      "Led Agile-based iterative releases",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "CI/CD", "OTP Auth"],
    color: "#bf00ff",
    github: "https://github.com/ftthadiya",
    demo: null,
  },
  {
    title: "2D Maze Puzzle Engine",
    period: "2023",
    status: "Completed",
    statusColor: "#00f0ff",
    description:
      "A modular Java-based puzzle engine featuring a custom domain-specific language (DSL) for defining maze rules and layouts, with Jython scripting for runtime extensibility.",
    highlights: [
      "Modular Java engine with plugin architecture",
      "Custom DSL for defining maze rules and layouts",
      "Integrated Jython scripting for runtime extensibility",
      "Designed for extensibility and clean separation of concerns",
    ],
    tags: ["Java", "DSL", "Jython", "Plugin Architecture"],
    color: "#ff0080",
    github: "https://github.com/ftthadiya",
    demo: null,
  },
  {
    title: "Air Traffic Simulation System",
    period: "2022",
    status: "Completed",
    statusColor: "#00f0ff",
    description:
      "A concurrent Java simulation of air traffic control systems. Demonstrates deep understanding of multithreading, thread pools, and safe concurrent resource access patterns.",
    highlights: [
      "Concurrent backend simulation with Java multithreading",
      "Thread pools and blocking queues for safe resource management",
      "Thread safety and efficient task scheduling",
      "Scalable design for high-throughput simulation scenarios",
    ],
    tags: ["Java", "Concurrency", "Thread Pools", "Blocking Queues", "Simulation"],
    color: "#00ff88",
    github: "https://github.com/ftthadiya",
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
            <span className="font-mono text-[#00f0ff] text-sm tracking-widest">04.</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white">Projects</h2>
            <div className="h-px flex-1 max-w-48 bg-gradient-to-r from-[#00f0ff]/40 to-transparent" />
          </div>
          <p className="text-slate-400 text-sm ml-8">
            Things I&apos;ve built — from distributed systems to full-stack apps
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
                        className="text-slate-500 hover:text-[#00f0ff] transition-colors"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-[#00f0ff] transition-colors"
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
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
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
            href="https://github.com/ftthadiya"
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
