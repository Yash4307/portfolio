import { personal } from "@/lib/personal";

export default function SkillsTicker() {
  // Duplicate for seamless loop
  const doubled = [...personal.skills, ...personal.skills];

  return (
    <div className="overflow-hidden border-t border-b border-[#1e2a36] py-2.5 my-12">
      <div className="ticker-track flex gap-0">
        {doubled.map((skill, i) => (
          <span key={i} className="text-[11px] uppercase tracking-widest text-dim px-5 shrink-0">
            {i % 2 === 0 ? (
              <span className="text-acid font-medium">{skill}</span>
            ) : (
              skill
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
