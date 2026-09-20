import { useState } from "react";
import { toast } from "react-toastify";
import type { ITech } from "../types/tech";
import AvailableTechs from "./AvailableTechs";
import YourStack from "./YourStack";

interface ITechnologiesProps {
  technologies: ITech[];
  loading: boolean;
}

const Technologies = ({ technologies, loading }: ITechnologiesProps) => {
  const [stack, setStack] = useState<ITech[]>([]);

  const handleAdd = (tech: ITech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const handleRemove = (tech: ITech) => {
    setStack(stack.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed from your stack");
  };

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Choose Your <span className="brand-gradient-text">Toolkit</span>
        </h2>
        <p className="mt-2 text-body">
          Mix and match from every category. Everything you pick shows up in the Your Stack panel.
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center gap-4 py-24">
          <span className="h-12 w-12 animate-spin rounded-full border-4 border-line border-t-accent" />
          <p className="font-medium text-muted">Loading technologies...</p>
        </div>
      ) : (
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_300px]">
          <AvailableTechs technologies={technologies} stack={stack} onAdd={handleAdd} />
          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      )}
    </section>
  );
};

export default Technologies;
