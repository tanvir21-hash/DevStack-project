import { FaStar } from "react-icons/fa";
import type { Category, ITech } from "../types/tech";

interface ITechCardProps {
  tech: ITech;
  isAdded: boolean;
  onAdd: (tech: ITech) => void;
}

// Badge colour is driven by category so each group reads consistently.
const badgeStyles: Record<Category, string> = {
  Frontend: "bg-sky-50 text-sky-600",
  Backend: "bg-emerald-50 text-emerald-600",
  Database: "bg-violet-50 text-violet-600",
  Language: "bg-amber-50 text-amber-600",
  Styling: "bg-teal-50 text-teal-600",
  DevOps: "bg-indigo-50 text-indigo-600",
  Tools: "bg-rose-50 text-rose-600",
};

const TechCard = ({ tech, isAdded, onAdd }: ITechCardProps) => {
  return (
    <div className="flex flex-col rounded-2xl border border-line bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10">
      {/* Icon + badge */}
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-10 w-10 object-contain" />
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[tech.category]}`}
        >
          {tech.badge}
        </span>
      </div>

      {/* Name + description */}
      <h3 className="mt-4 text-lg font-bold text-ink">{tech.name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
        {tech.description}
      </p>

      {/* Meta row */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5 text-xs whitespace-nowrap">
        <span className="rounded-md bg-surface px-2.5 py-1 font-medium text-body">
          {tech.category}
        </span>
        <span className="text-muted">{tech.difficulty}</span>
        <span className="flex items-center gap-1 font-semibold text-ink">
          <FaStar className="text-amber-400" />
          {tech.rating}
        </span>
      </div>

      {/* Action */}
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-2.5 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed border border-line bg-surface text-muted"
            : "bg-dark-btn text-white hover:opacity-90"
        }`}
      >
        {isAdded ? "\u2713 Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
