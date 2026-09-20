import { HiX } from "react-icons/hi";
import type { ITech } from "../types/tech";

interface IStackItemCardProps {
  tech: ITech;
  onRemove: (tech: ITech) => void;
}

const StackItemCard = ({ tech, onRemove }: IStackItemCardProps) => {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-line bg-white px-3 py-2.5">
      <div className="flex items-center gap-3">
        <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
        <div>
          <h4 className="text-sm font-semibold text-ink">{tech.name}</h4>
          <p className="text-xs text-muted">{tech.category}</p>
        </div>
      </div>

      <button
        onClick={() => onRemove(tech)}
        className="rounded-md p-1 text-faint transition hover:bg-red-50 hover:text-red-500"
        aria-label={`Remove ${tech.name} from stack`}
      >
        <HiX size={18} />
      </button>
    </div>
  );
};

export default StackItemCard;
