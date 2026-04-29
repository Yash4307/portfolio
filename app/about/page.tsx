"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/personal";
import { projects } from "@/lib/projects";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: "easeOut" },
});

const skillCategories = [
  {
    label: "Languages & Core",
    items: ["Python", "SQL", "TypeScript", "Bash"],
  },
  {
    label: "ML / AI",
    items: ["Scikit-learn", "Pandas", "NumPy", "LLMs", "RAG", "Prompt Engineering", "Groq API", "HuggingFace"],
  },
  {
    label: "Data",
    items: ["Data Analysis", "Data Science", "Matplotlib", "Seaborn", "Jupyter"],
  },
  {
    label: "Web & Deploy",
    items: ["Flask", "Next.js", "REST APIs", "Render", "Vercel", "HuggingFace Spaces"],
  },
  {
    label: "Security",
    items: ["AI Security", "Prompt Injection Defense", "Input Validation", "Defensive Engineering"],
  },
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-acid">about</span>
          <div className="flex-1 h-px bg-[#1e2a36]" />
        </div>
        <h1 className="font-display font-black text-5xl sm:text-6xl text-text mb-4 leading-tight">
          Hi, I&apos;m <span className="text-cyan">{personal.name}</span>.
        </h1>
        <p className="text-dim text-sm leading-relaxed max-w-2xl">
          {personal.bio}
        </p>
      </motion.div>

      {/* What I do */}
      <motion.section {...fadeUp(0.1)} className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-acid">what i do</span>
          <div className="flex-1 h-px bg-[#1e2a36]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              icon: "◈",
              title: "Machine Learning",
              desc: "Building and training models that extract signal from data. Classification, regression, clustering — practical ML that ships.",
            },
            {
              icon: "◉",
              title: "Data Science & Analysis",
              desc: "Turning raw datasets into clear insights. EDA, feature engineering, statistical analysis, and visualization.",
            },
            {
              icon: "⬡",
              title: "LLM Engineering",
              desc: "Working with large language models via APIs — prompt engineering, RAG pipelines, output parsing, and chaining.",
            },
            {
              icon: "⬢",
              title: "AI Security",
              desc: "Understanding and defending against prompt injection, jailbreaks, and adversarial inputs. Making AI systems robust.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-card border border-[#1e2a36] p-5 rounded-sm hover:border-cyan/30 transition-colors"
            >
              <div className="text-2xl text-acid mb-3">{icon}</div>
              <h3 className="font-display font-bold text-sm text-text mb-2">{title}</h3>
              <p className="text-[12px] text-dim leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section {...fadeUp(0.15)} className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-acid">skills</span>
          <div className="flex-1 h-px bg-[#1e2a36]" />
        </div>

        <div className="flex flex-col gap-4">
          {skillCategories.map(({ label, items }) => (
            <div key={label} className="flex flex-col sm:flex-row gap-3 sm:items-start">
              <span className="text-[11px] uppercase tracking-widest text-dim/60 sm:w-40 shrink-0 pt-0.5">
                {label}
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-[12px] text-cyan bg-cyan/5 border border-cyan/20 px-2.5 py-1 rounded-sm tracking-wide"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects summary */}
      <motion.section {...fadeUp(0.2)} className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-acid">projects</span>
          <div className="flex-1 h-px bg-[#1e2a36]" />
        </div>

        <div className="flex flex-col gap-3">
          {projects.map((p) => (
            <div key={p.id} className="flex items-center justify-between border-b border-[#1e2a36] pb-3 last:border-0">
              <div>
                <span className="font-display font-bold text-sm text-text">{p.title}</span>
                {p.platform && (
                  <span className="text-[11px] text-dim ml-3">on {p.platform}</span>
                )}
              </div>
              <div className="flex items-center gap-3">
                {p.status === "live" && (
                  <span className="text-[10px] uppercase tracking-widest text-acid flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse inline-block" />
                    live
                  </span>
                )}
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="text-[11px] uppercase tracking-widest text-dim hover:text-cyan transition-colors">
                    → view
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section {...fadeUp(0.25)}>
        <div className="border border-[#1e2a36] bg-card rounded-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-bold text-lg text-text mb-1">Want to work together?</p>
            <p className="text-dim text-xs">Open to ML, DS, DA and AI engineering roles.</p>
          </div>
          <a
            href={`mailto:${personal.email}`}
            className="bg-acid text-black font-mono font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm hover:opacity-85 transition-opacity shrink-0"
          >
            get in touch
          </a>
        </div>
      </motion.section>

    </div>
  );
}
