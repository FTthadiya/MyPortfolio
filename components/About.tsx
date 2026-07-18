"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Container, Cpu, BookOpen, MapPin } from "lucide-react";

const highlights = [
  { icon: Server, label: "Backend Systems", desc: "Java, Spring Boot, Go, Node.js" },
  { icon: Container, label: "DevOps & Cloud", desc: "Docker, Kubernetes, CI/CD" },
  { icon: Code2, label: "Frontend", desc: "React.js, TypeScript, Next.js" },
  { icon: Cpu, label: "Architecture", desc: "Microservices, Distributed Systems" },
];

const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
  { value: "MSc", label: "Advanced SE" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute right-0 top-1/2 w-72 h-72 bg-[#bf00ff]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[#00f0ff] text-sm tracking-widest">01.</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white">About Me</h2>
            <div className="h-px flex-1 max-w-48 bg-gradient-to-r from-[#00f0ff]/40 to-transparent" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative mb-8">
              {/* Terminal-style card */}
              <div className="bg-[#0a0a12] rounded-lg neon-border-cyan overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f1a] border-b border-[#00f0ff]/10">
                  <div className="w-3 h-3 rounded-full bg-[#ff0080]" />
                  <div className="w-3 h-3 rounded-full bg-[#ff8800]" />
                  <div className="w-3 h-3 rounded-full bg-[#00ff88]" />
                  <span className="font-mono text-xs text-slate-500 ml-2">thamindu.profile</span>
                </div>
                <div className="p-6">
                  <div className="font-mono text-sm text-slate-400 space-y-3">
                    <div>
                      <span className="text-[#00f0ff]">const </span>
                      <span className="text-[#bf00ff]">engineer</span>
                      <span className="text-white"> = </span>
                      <span className="text-[#ff0080]">{"{"}</span>
                    </div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-[#00f0ff]">name:</span> <span className="text-[#00ff88]">&quot;Thamindu Senanayake&quot;</span>,</div>
                      <div><span className="text-[#00f0ff]">location:</span> <span className="text-[#00ff88]">&quot;Kandy, Sri Lanka&quot;</span>,</div>
                      <div><span className="text-[#00f0ff]">role:</span> <span className="text-[#00ff88]">&quot;Software Engineer&quot;</span>,</div>
                      <div><span className="text-[#00f0ff]">founderOf:</span> <span className="text-[#00ff88]">&quot;Tan Digitals&quot;</span>,</div>
                      <div><span className="text-[#00f0ff]">focus:</span> <span className="text-[#00ff88]">[&quot;Backend&quot;, &quot;DevOps&quot;, &quot;Systems&quot;]</span>,</div>
                      <div><span className="text-[#00f0ff]">education:</span> <span className="text-[#00ff88]">&quot;MSc @ IIT/Westminster&quot;</span>,</div>
                      <div><span className="text-[#00f0ff]">available:</span> <span className="text-[#00ff88]">true</span></div>
                    </div>
                    <div><span className="text-[#ff0080]">{"}"}</span>;</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                I&apos;m a Software Engineer based in Kandy, Sri Lanka, with <span className="text-[#00f0ff]">1.5+ years of professional experience</span> building and supporting production-grade Java backend systems, microservices architectures, and containerized cloud deployments.
              </p>
              <p>
                Currently working as an <span className="text-[#bf00ff]">Application Support Engineer at VitalHub Innovations Lab</span> (Canada, remote), where I automate CI/CD pipelines, manage Kubernetes workloads, and troubleshoot distributed systems at scale.
              </p>
              <p>
                Alongside that, I run <span className="text-[#ff0080]">Tan Digitals</span>, my own web design & development studio — building and shipping client websites end-to-end, from design to deployment.
              </p>
              <p>
                Pursuing an <span className="text-[#00ff88]">MSc in Advanced Software Engineering</span> at IIT – University of Westminster, UK, while actively expanding expertise in Spring Boot and Go-based backend development.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <BookOpen size={16} className="text-[#00f0ff]" />
              <span className="font-mono text-sm text-slate-400">
                B.Computing (Software Eng.) — Curtin University, AUS · GPA 3.2
              </span>
            </div>
          </motion.div>

          {/* Right — highlights + stats */}
          <div>
            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-[#0a0a12] neon-border-cyan rounded-lg p-4 card-hover group"
                >
                  <Icon size={20} className="text-[#00f0ff] mb-3 group-hover:drop-shadow-[0_0_8px_#00f0ff] transition-all" />
                  <div className="font-semibold text-white text-sm mb-1">{label}</div>
                  <div className="text-slate-500 text-xs font-mono">{desc}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-4 gap-4"
            >
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-black gradient-text-shimmer">{value}</div>
                  <div className="text-slate-500 text-xs font-mono mt-1">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
