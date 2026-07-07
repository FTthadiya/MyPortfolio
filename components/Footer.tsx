"use client";
import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#00f0ff]/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-[#00f0ff]" />
          <span className="font-mono text-sm text-[#00f0ff]">
            TS<span className="text-[#bf00ff]">.</span>dev
          </span>
        </div>
        <p className="font-mono text-xs text-slate-600 text-center">
          Built with Next.js · Tailwind CSS · Framer Motion · Dark neon vibes
        </p>
        <p className="font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} Thamindu Senanayake
        </p>
      </div>
    </footer>
  );
}
