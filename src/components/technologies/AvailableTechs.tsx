import type { ITech } from "../types/tech";
import TechCard from "./TechCard";

interface IAvailableTechsProps {
  technologies: ITech[];
  stack: ITech[];
  onAdd: (tech: ITech) => void;
}

const AvailableTechs = ({ technologies, stack, onAdd }: IAvailableTechsProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stack.some((item) => item.id === tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default AvailableTechs;