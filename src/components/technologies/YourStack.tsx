import type { ITech } from "../types/tech";
import StackItemCard from "./StackItemCard";

interface IYourStackProps {
  stack: ITech[];
  onRemove: (tech: ITech) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: IYourStackProps) => {
  return (
    <aside className="rounded-2xl border border-line bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-lg font-bold text-ink">Your Stack</h3>
      <p className="mt-0.5 text-sm text-muted">
        {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
      </p>

      {stack.length === 0 ? (
        <div className="mt-5 rounded-xl border border-dashed border-line bg-surface px-4 py-8 text-center">
          <p className="text-sm font-medium text-body">Your stack is empty</p>
          <p className="mt-1 text-xs text-muted">
            Add technologies from the list to start building.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 grid grid-cols-1 gap-3">
            {stack.map((tech) => (
              <StackItemCard key={tech.id} tech={tech} onRemove={onRemove} />
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;
