"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SkillsTicker from "@/components/SkillsTicker";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { personal } from "@/lib/personal";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* ── HERO ── */}
      <section className="mb-8">
        {personal.openToWork && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-acid/8 border border-acid/25 px-3 py-1.5 rounded-sm mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" />
            <span className="text-[11px] uppercase tracking-widest text-acid">
              open to opportunities
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.02] mb-6"
        >
          Building{" "}
          <span className="text-cyan glitch" data-text="intelligent">
            intelligent
          </span>
          <br />
          systems that
          <br />
          <span className="text-acid">actually work.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-dim text-sm leading-relaxed max-w-xl mb-8"
        >
          {personal.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-wrap gap-3"
        >
          <Link
            href="/#projects"
            className="bg-acid text-black font-mono font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm hover:opacity-85 transition-opacity"
          >
            view projects
          </Link>
          <Link
            href="/#contact"
            className="border border-cyan/35 text-cyan font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm hover:border-cyan/70 hover:text-text transition-all"
          >
            {'// get in touch'}
          </Link>
        </motion.div>
      </section>

      {/* ── SKILLS TICKER ── */}
      <SkillsTicker />

      {/* ── PROJECTS ── */}
      <section id="projects" className="mb-20 scroll-mt-20">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-acid">
            selected projects
          </span>
          <div className="flex-1 h-px bg-[#1e2a36]" />
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}

          {/* Placeholder card for next project */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: projects.length * 0.1 }}
            className="border border-dashed border-[#1e2a36] bg-card/50 rounded-sm p-5 opacity-50"
          >
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-sm text-dim">
                next project
              </span>
              <span className="text-[10px] uppercase tracking-widest text-dim/50">
                coming soon
              </span>
            </div>
            <p className="text-[13px] text-dim/50 mt-2">
              Another AI/LLM project in progress...
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-acid">
            quick stats
          </span>
          <div className="flex-1 h-px bg-[#1e2a36]" />
        </div>

        <div className="border border-[#1e2a36] bg-card rounded-sm p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <p className="text-[13px] text-dim leading-relaxed">
            {personal.bio}
          </p>
          <div className="flex flex-col gap-4">
            {[
              { label: "Projects deployed", val: `0${projects.filter(p => p.status === "live").length}` },
              { label: "Focus areas", val: personal.focusAreas.join(", ") },
              { label: "Location", val: personal.location },
            ].map(({ label, val }) => (
              <div key={label} className="flex justify-between items-baseline border-b border-[#1e2a36] pb-3 last:border-0 last:pb-0">
                <span className="text-[11px] uppercase tracking-widest text-dim">{label}</span>
                <span className="font-display font-bold text-acid text-sm">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="scroll-mt-20">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[11px] uppercase tracking-[0.2em] text-acid">
            contact
          </span>
          <div className="flex-1 h-px bg-[#1e2a36]" />
        </div>

        <div className="text-center py-4">
          <p className="font-display font-bold text-3xl sm:text-4xl text-text mb-3">
            Let&apos;s build something.
          </p>
          <p className="text-dim text-xs uppercase tracking-widest mb-8">
            {'// open to ML · DS · DA · AI engineering roles'}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: `mailto:${personal.email}`, label: "→ Email" },
              { href: personal.github, label: "→ GitHub" },
              { href: personal.linkedin, label: "→ LinkedIn" },
              { href: personal.resume, label: "→ Resume" },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="border border-[#1e2a36] text-dim text-xs uppercase tracking-widest px-4 py-2.5 rounded-sm hover:border-cyan/40 hover:text-cyan transition-all font-mono"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
