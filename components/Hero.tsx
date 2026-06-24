"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./GithubIcon";

const roles = [
  "Software Engineer",
  "Java Backend Developer",
  "DevOps Practitioner",
  "Full Stack Builder",
  "Systems Architect",
];

function TypeWriter({ words }: { words: string[] }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    const timeout = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
        return;
      }
      setCurrentText(
        isDeleting ? word.slice(0, currentText.length - 1) : word.slice(0, currentText.length + 1)
      );
    }, timeout);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWord, words]);

  return (
    <span className="neon-text-cyan font-mono">
      {currentText}
      <span className="typing-cursor" />
    </span>
  );
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? "#00f0ff" : i % 3 === 1 ? "#bf00ff" : "#ff0080",
            opacity: 0.3 + Math.random() * 0.4,
          }}
          animate={{
            y: [Math.random() * 800 + 400, -50],
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <FloatingParticles />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#bf00ff]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff0080]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-6"
            >
              <span className="font-mono text-sm text-[#00f0ff] tracking-widest">
                &lt; Hello World /&gt;
              </span>
              <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-[#00f0ff] to-transparent" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black mb-3 leading-tight"
            >
              <span className="text-white">Thamindu</span>
              <br />
              <span
                className="gradient-text glitch"
                data-text="Senanayake"
              >
                Senanayake
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl mb-6 h-10"
            >
              <TypeWriter words={roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building scalable, containerized systems with Java, Go, and React.
              Turning complex distributed architecture into clean, maintainable code.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-8 text-slate-500 font-mono text-sm"
            >
              <MapPin size={14} className="text-[#00f0ff]" />
              <span>Kandy, Sri Lanka</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="text-[#00ff88]">Available for opportunities</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <a href="#projects" className="btn-neon btn-neon-filled">
                View Projects
              </a>
              <a href="#contact" className="btn-neon">
                Get in Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: GithubIcon, href: "https://github.com/ftthadiya", label: "GitHub" },
                { icon: LinkedinIcon, href: "https://linkedin.com/in/thamindusenanayake", label: "LinkedIn" },
                { icon: Mail, href: "mailto:thamindusenanayake@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center gap-2 text-slate-500 hover:text-[#00f0ff] transition-all duration-300"
                >
                  <Icon size={20} className="group-hover:drop-shadow-[0_0_8px_#00f0ff]" />
                  <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    {label}
                  </span>
                </a>
              ))}
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00f0ff]/40" />
            </motion.div>
          </div>

          {/* Right side — tech stack visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 relative"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[#00f0ff]/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-[#bf00ff]/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-[#ff0080]/20"
              />

              {/* Center avatar placeholder */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-[#0f0f1a] to-[#1a1a30] neon-border-cyan flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-5xl font-black gradient-text">TS</div>
                  <div className="font-mono text-xs text-slate-500 mt-1">Software Eng.</div>
                </div>
              </div>

              {/* Orbiting tech labels */}
              {[
                { label: "Java", angle: 0, color: "#00f0ff" },
                { label: "Spring", angle: 60, color: "#00ff88" },
                { label: "Docker", angle: 120, color: "#bf00ff" },
                { label: "Go", angle: 180, color: "#00f0ff" },
                { label: "React", angle: 240, color: "#ff0080" },
                { label: "K8s", angle: 300, color: "#bf00ff" },
              ].map(({ label, angle, color }) => {
                const rad = (angle * Math.PI) / 180;
                const r = 160;
                const x = 50 + (r / 3.84) * Math.cos(rad);
                const y = 50 + (r / 3.84) * Math.sin(rad);
                return (
                  <motion.div
                    key={label}
                    className="absolute font-mono text-xs font-bold px-2 py-1 rounded"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      color,
                      background: `${color}15`,
                      border: `1px solid ${color}40`,
                    }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                  >
                    {label}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center mt-16 gap-2"
        >
          <span className="font-mono text-xs text-slate-600 tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-[#00f0ff]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
