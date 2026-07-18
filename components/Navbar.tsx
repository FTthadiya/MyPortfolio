"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { WhatsappIcon } from "./GithubIcon";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_NUMBER = "";
const whatsappHref = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}`
  : undefined;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050508]/90 backdrop-blur-xl border-b border-[#00f0ff]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <Terminal size={18} className="text-[#00f0ff] group-hover:-rotate-12 transition-transform duration-300" />
          <span className="font-mono text-sm font-bold text-[#00f0ff] tracking-widest group-hover:text-white transition-colors">
            TS<span className="text-[#bf00ff]">.</span>dev
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              onClick={() => setActive(link.href)}
              aria-current={active === link.href ? "true" : undefined}
              className={`font-mono text-xs tracking-widest uppercase transition-all duration-200 relative group ${
                active === link.href ? "text-[#00f0ff]" : "text-slate-400 hover:text-[#00f0ff]"
              }`}
            >
              <span className="text-[#00f0ff] mr-1 opacity-60">0{i + 1}.</span>
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-[#00f0ff] transition-all duration-300 ${
                  active === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </motion.a>
          ))}
          {whatsappHref && (
            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-[#00ff88] hover:text-white hover:rotate-12 transition-all duration-300"
            >
              <WhatsappIcon size={20} />
            </motion.a>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-[#00f0ff] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0a12]/95 backdrop-blur-xl border-b border-[#00f0ff]/10"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActive(link.href);
                    setMenuOpen(false);
                  }}
                  aria-current={active === link.href ? "true" : undefined}
                  className={`font-mono text-sm transition-colors ${
                    active === link.href ? "text-[#00f0ff]" : "text-slate-400 hover:text-[#00f0ff]"
                  }`}
                >
                  <span className="text-[#00f0ff] mr-2">0{i + 1}.</span>
                  {link.label}
                </a>
              ))}
              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-[#00ff88] font-mono text-sm mt-2"
                >
                  <WhatsappIcon size={18} />
                  WhatsApp
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
