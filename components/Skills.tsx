"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    color: "#00f0ff",
    skills: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "Golang", level: 70 },
      { name: "Node.js / Express", level: 80 },
      { name: "React.js", level: 78 },
      { name: "JavaScript / TS", level: 80 },
      { name: "C#", level: 60 },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    color: "#bf00ff",
    skills: [
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 78 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Git / Maven / Gradle", level: 90 },
      { name: "RabbitMQ", level: 72 },
      { name: "Mirth Connect", level: 65 },
    ],
  },
  {
    title: "Databases & APIs",
    color: "#00ff88",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 75 },
      { name: "RESTful APIs", level: 92 },
      { name: "Microservices", level: 80 },
      { name: "RBAC & Auth", level: 78 },
    ],
  },
];

const techStack = [
  "Java", "Spring Boot", "Golang", "Node.js", "React.js", "TypeScript",
  "Docker", "Kubernetes", "CI/CD", "PostgreSQL", "MySQL", "MongoDB",
  "RabbitMQ", "Microservices", "REST APIs", "Git", "Maven", "Gradle",
  "RBAC", "Jira", "Agile / Scrum", "C#", "Flutter", "Mirth Connect",
  "Thread Pools", "Distributed Systems", "System Design",
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-mono">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-[#1a1a30] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-[#00f0ff]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[#00f0ff] text-sm tracking-widest">04.</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white">Tech Stack</h2>
            <div className="h-px flex-1 max-w-48 bg-gradient-to-r from-[#00f0ff]/40 to-transparent" />
          </div>
          <p className="text-slate-400 font-mono text-sm ml-8">
            // Technologies I work with
          </p>
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.15 }}
              className="bg-[#0a0a12] rounded-xl p-6 neon-border-cyan card-hover"
            >
              <div
                className="font-mono text-sm font-bold mb-6 pb-3 border-b"
                style={{
                  color: cat.color,
                  borderColor: `${cat.color}20`,
                }}
              >
                {cat.title}
              </div>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={cat.color}
                  delay={ci * 0.15 + si * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="font-mono text-xs text-slate-600 mb-4 tracking-widest">
            // ALL TECHNOLOGIES
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.02 }}
                className="tech-badge cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
