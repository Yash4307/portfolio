import { personal } from "@/lib/personal";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#1e2a36] mt-24">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-dim tracking-widest uppercase">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p className="text-[11px] text-dim tracking-widest uppercase">
          built with next.js · deployed on vercel · no prompts injected
        </p>
      </div>
    </footer>
  );
}
