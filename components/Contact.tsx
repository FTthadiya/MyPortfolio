"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./GithubIcon";

const socials = [
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/FTthadiya",
    href: "https://github.com/FTthadiya",
    color: "#00f0ff",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/thamindusenanayake",
    href: "https://linkedin.com/in/thamindusenanayake",
    color: "#bf00ff",
  },
  {
    icon: Mail,
    label: "Email",
    value: "thamindusenanayake@gmail.com",
    href: "mailto:thamindusenanayake@gmail.com",
    color: "#ff0080",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kandy, Sri Lanka",
    href: null,
    color: "#00ff88",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:thamindusenanayake@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[#00f0ff] text-sm tracking-widest">05.</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white">Get In Touch</h2>
            <div className="h-px flex-1 max-w-48 bg-gradient-to-r from-[#00f0ff]/40 to-transparent" />
          </div>
          <p className="text-slate-400 ml-8 max-w-lg">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities. Hit me up.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <div className="space-y-4 mb-10">
              {socials.map(({ icon: Icon, label, value, href, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("mailto") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-[#0a0a12] rounded-xl group card-hover"
                      style={{ border: `1px solid ${color}20` }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                      >
                        <Icon size={18} style={{ color }} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-0.5">{label}</div>
                        <div className="text-slate-300 text-sm group-hover:text-white transition-colors">{value}</div>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="flex items-center gap-4 p-4 bg-[#0a0a12] rounded-xl"
                      style={{ border: `1px solid ${color}20` }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                      >
                        <Icon size={18} style={{ color }} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-0.5">{label}</div>
                        <div className="text-slate-300 text-sm">{value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Availability status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="bg-[#0a0a12] rounded-xl p-5 neon-border-cyan"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="font-mono text-sm text-[#00ff88] font-bold">Available for Work</span>
              </div>
              <p className="text-slate-400 text-sm">
                Open to full-time roles, contracts, and interesting side projects.
                Currently based in Sri Lanka — happy to work remotely or relocate.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#0a0a12] rounded-xl overflow-hidden neon-border-cyan">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-5 py-3 bg-[#0f0f1a] border-b border-[#00f0ff]/10">
                <div className="w-3 h-3 rounded-full bg-[#ff0080]" />
                <div className="w-3 h-3 rounded-full bg-[#ff8800]" />
                <div className="w-3 h-3 rounded-full bg-[#00ff88]" />
                <Terminal size={12} className="text-slate-600 ml-2" />
                <span className="font-mono text-xs text-slate-500">send_message.sh</span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="font-mono text-xs text-[#00f0ff] mb-2 block">
                    $ your_name <span className="text-[#ff0080]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-[#050508] border border-[#00f0ff]/20 rounded-lg px-4 py-3 text-slate-300 font-mono text-sm placeholder-slate-600 focus:outline-none focus:border-[#00f0ff]/60 focus:ring-2 focus:ring-[#00f0ff]/30 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="font-mono text-xs text-[#00f0ff] mb-2 block">
                    $ your_email <span className="text-[#ff0080]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-[#050508] border border-[#00f0ff]/20 rounded-lg px-4 py-3 text-slate-300 font-mono text-sm placeholder-slate-600 focus:outline-none focus:border-[#00f0ff]/60 focus:ring-2 focus:ring-[#00f0ff]/30 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="font-mono text-xs text-[#00f0ff] mb-2 block">
                    $ message <span className="text-[#ff0080]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Hey Thamindu, I'd like to..."
                    className="w-full bg-[#050508] border border-[#00f0ff]/20 rounded-lg px-4 py-3 text-slate-300 font-mono text-sm placeholder-slate-600 focus:outline-none focus:border-[#00f0ff]/60 focus:ring-2 focus:ring-[#00f0ff]/30 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-neon btn-neon-filled w-full flex items-center justify-center gap-2"
                  aria-live="polite"
                >
                  <Send size={14} />
                  {sent ? "Opening mail client..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
