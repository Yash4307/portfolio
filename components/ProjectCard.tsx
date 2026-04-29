"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import clsx from "clsx";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const isComingSoon = !project.liveUrl && !project.githubUrl;

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      className={clsx(
        "group border border-[#1e2a36] bg-card rounded-sm p-5 transition-all duration-200",
        "border-l-[3px] hover:translate-x-1",
        project.status === "live"
          ? "border-l-cyan hover:border-l-acid"
          : "border-l-[#1e2a36] opacity-60"
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3 gap-4">
        <h3 className="font-display font-bold text-base text-text group-hover:text-cyan transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {project.status === "live" && (
            <span className="text-[10px] uppercase tracking-widest text-acid border border-acid/30 bg-acid/10 px-2 py-0.5 rounded-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse inline-block" />
              live
            </span>
          )}
          {project.status === "wip" && (
            <span className="text-[10px] uppercase tracking-widest text-dim border border-dim/20 px-2 py-0.5 rounded-sm">
              wip
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-[13px] text-dim leading-relaxed mb-4">{project.shortDesc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] text-cyan bg-cyan/5 border border-cyan/20 px-2 py-0.5 rounded-sm tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {!isComingSoon && (
        <div className="flex gap-4 pt-3 border-t border-[#1e2a36]">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-widest text-acid hover:text-text transition-colors"
            >
              → live demo
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-widest text-dim hover:text-text transition-colors"
            >
              → github
            </Link>
          )}
          {project.platform && (
            <span className="text-[11px] uppercase tracking-widest text-dim/50 ml-auto">
              {project.platform}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
}
