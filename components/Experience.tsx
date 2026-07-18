"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    role: "Founder",
    company: "Tan Digitals",
    location: "Remote — Sri Lanka",
    period: "2025 — Present",
    color: "#ff0080",
    points: [
      "Founded and run Tan Digitals, a web design & development studio for small businesses and startups",
      "Own the full delivery pipeline end-to-end: design, frontend build, deployment, and client handoff",
      "Built and ship the agency's own site, tandigital.com, as the primary client-facing showcase",
      "Handle client relationships, project scoping, and business development alongside development work",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Design", "Client Delivery"],
  },
  {
    type: "work",
    role: "Application Support Engineer",
    company: "VitalHub Innovations Lab",
    location: "Canada (Sri Lanka — Remote)",
    period: "Jan 2025 — Present",
    color: "#00f0ff",
    points: [
      "Deployed and configured Java-based backend applications in production environments",
      "Automated CI/CD pipelines, improving deployment reliability and release speed",
      "Managed containerized applications using Docker and Kubernetes",
      "Integrated and monitored RabbitMQ message workflows",
      "Performed log analysis and root cause analysis to resolve production issues",
    ],
    tags: ["Java", "Docker", "Kubernetes", "CI/CD", "RabbitMQ", "REST APIs"],
  },
  {
    type: "work",
    role: "Intern — Application Support Engineer",
    company: "VitalHub Innovations Lab",
    location: "Canada (Sri Lanka — Remote)",
    period: "Jul 2024 — Jan 2025",
    color: "#bf00ff",
    points: [
      "Supported backend services in containerized environments",
      "Assisted in database management (PostgreSQL, MySQL)",
      "Improved deployment scripts and automation workflows",
      "Troubleshot Java backend systems in production",
    ],
    tags: ["Java", "PostgreSQL", "MySQL", "Docker", "Automation"],
  },
  {
    type: "edu",
    role: "MSc in Advanced Software Engineering",
    company: "IIT — University of Westminster, UK",
    location: "Colombo, Sri Lanka",
    period: "2026 — Present",
    color: "#00ff88",
    points: [
      "Advanced topics in distributed systems, software architecture, and engineering practices",
      "Research focus on scalable system design and cloud-native applications",
    ],
    tags: ["Distributed Systems", "Software Architecture", "Research"],
  },
  {
    type: "edu",
    role: "Bachelor of Computing (Software Engineering)",
    company: "Curtin University, Australia",
    location: "Sri Lanka Campus",
    period: "2021 — 2024",
    color: "#ff0080",
    points: [
      "GPA: 3.2 — Graduated with strong foundation in software engineering",
      "Completed projects in Java, distributed systems, and full-stack development",
    ],
    tags: ["Java", "Software Engineering", "GPA 3.2"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-[#00f0ff]/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[#00f0ff] text-sm tracking-widest">02.</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white">Experience</h2>
            <div className="h-px flex-1 max-w-48 bg-gradient-to-r from-[#00f0ff]/40 to-transparent" />
          </div>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f0ff]/60 via-[#bf00ff]/40 to-transparent -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot (desktop) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
                  <motion.div
                    animate={{ boxShadow: [`0 0 0 0 ${exp.color}40`, `0 0 0 12px ${exp.color}00`] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 rounded-full border-2"
                    style={{ borderColor: exp.color, background: "#050508" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{ background: exp.color }}
                    />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />

                {/* Card */}
                <div className="flex-1 lg:max-w-lg">
                  <div
                    className="bg-[#0a0a12] rounded-xl p-6 card-hover group"
                    style={{ border: `1px solid ${exp.color}20` }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {exp.type === "work" ? (
                            <Briefcase size={14} style={{ color: exp.color }} />
                          ) : (
                            <GraduationCap size={14} style={{ color: exp.color }} />
                          )}
                          <span
                            className="font-mono text-xs tracking-widest uppercase"
                            style={{ color: exp.color }}
                          >
                            {exp.type === "work" ? "Work" : "Education"}
                          </span>
                        </div>
                        <h3 className="text-white font-bold text-lg leading-tight">{exp.role}</h3>
                        <div className="font-semibold mt-1" style={{ color: exp.color }}>{exp.company}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex gap-2 text-slate-400 text-sm">
                          <span style={{ color: exp.color }} className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2 py-0.5 rounded"
                          style={{
                            color: exp.color,
                            background: `${exp.color}10`,
                            border: `1px solid ${exp.color}30`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
