import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thamindu Senanayake | Software Engineer",
  description: "Software Engineer specializing in Java backend, React, DevOps, and distributed systems. Based in Kandy, Sri Lanka.",
  keywords: ["Software Engineer", "Java", "Spring Boot", "React", "DevOps", "Docker", "Kubernetes"],
  openGraph: {
    title: "Thamindu Senanayake | Software Engineer",
    description: "Building scalable systems. Java · Go · React · DevOps",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050508] text-slate-200 antialiased scanline">
        {children}
      </body>
    </html>
  );
}
