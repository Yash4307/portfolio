"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { personal, certifications, techStack, hackathons } from "@/lib/personal";

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

const stackGroups = [
  { label: "Languages & Markup", keys: ["Python", "JavaScript", "HTML5", "CSS3"] },
  { label: "Databases",          keys: ["MySQL", "PostgreSQL"] },
  { label: "Tools & Frameworks", keys: ["Flask", "Git", "GitHub"] },
  { label: "AI Tools & APIs",    keys: ["ChatGPT", "Gemini", "Claude", "Groq API", "Google AI Studio"] },
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

      {/* Tech Stack */}
      <motion.section {...fadeUp(0.13)} className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-acid">tech stack</span>
          <div className="flex-1 h-px bg-[#1e2a36]" />
        </div>
        {stackGroups.map(({ label, keys }) => (
          <div key={label} className="mb-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-dim/50 mb-3">{label}</p>
            <div className="flex flex-wrap gap-3">
              {techStack
                .filter((t) => keys.includes(t.name))
                .map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2.5 bg-card border border-[#1e2a36] px-3 py-2.5 rounded-sm hover:border-acid/30 hover:bg-acid/5 transition-all group"
                  >
                    <div className="flex items-center justify-center w-6 h-6">
                      {tech.icon.startsWith('http') ? (
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" 
                        />
                      ) : (
                        <i className={`${tech.icon} text-2xl group-hover:scale-110 transition-transform inline-block`} />
                      )}
                    </div>
                    <div>
                      <p className="text-[12px] text-text font-medium leading-none mb-0.5">{tech.name}</p>
                      <p className="text-[10px] text-dim/60 uppercase tracking-wide leading-none">{tech.category}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
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
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] uppercase tracking-widest text-dim hover:text-cyan transition-colors"
                  >
                    → view
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section {...fadeUp(0.22)} className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-acid">
            certifications
          </span>
          <div className="flex-1 h-px bg-[#1e2a36]" />
        </div>

        <div className="flex flex-col gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="border border-[#1e2a36] bg-card rounded-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-cyan/30 transition-colors"
            >
              <div>
                <p className="font-display font-bold text-sm text-text mb-0.5">
                  {cert.title}
                </p>
                <p className="text-[11px] text-dim">
                  {cert.issuer} · {cert.date}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-cyan bg-cyan/5 border border-cyan/20 px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-widest text-acid border border-acid/30 bg-acid/5 px-3 py-1.5 rounded-sm hover:bg-acid/10 transition-colors shrink-0 text-center"
                >
                  → verify
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Hackathons */}
      <motion.section {...fadeUp(0.24)} className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-acid">hackathons</span>
          <div className="flex-1 h-px bg-[#1e2a36]" />
        </div>
        <div className="flex flex-col gap-4">
          {hackathons.map((h) => (
            <div key={h.name} className="border border-[#1e2a36] bg-card rounded-sm p-5 hover:border-cyan/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-display font-bold text-sm text-text">{h.project}</p>
                    <span className="text-[10px] uppercase tracking-widest text-dim border border-[#1e2a36] px-2 py-0.5 rounded-sm">
                      {h.type}
                    </span>
                  </div>
                  <p className="text-[11px] text-acid">{h.name} · {h.date}</p>
                </div>
                <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm border shrink-0 self-start ${
                  h.result === "Qualified Round 1"
                    ? "text-acid border-acid/30 bg-acid/5"
                    : "text-cyan border-cyan/30 bg-cyan/5"
                }`}>
                  {h.result}
                </span>
              </div>
              <p className="text-[11px] text-dim/60 uppercase tracking-widest mb-2">Theme: {h.theme}</p>
              <p className="text-[13px] text-dim leading-relaxed mb-3">{h.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {h.skills.map((s) => (
                  <span key={s} className="text-[11px] text-cyan bg-cyan/5 border border-cyan/20 px-2 py-0.5 rounded-sm">
                    {s}
                  </span>
                ))}
              </div>
              {(h.liveUrl || h.githubUrl) && (
                <div className="flex gap-4 pt-3 border-t border-[#1e2a36] mt-3">
                  {h.liveUrl && (
                    <a href={h.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="text-[11px] uppercase tracking-widest text-acid hover:text-text transition-colors">
                      → live demo
                    </a>
                  )}
                  {h.githubUrl && (
                    <a href={h.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="text-[11px] uppercase tracking-widest text-dim hover:text-text transition-colors">
                      → github
                    </a>
                  )}
                </div>
              )}
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
