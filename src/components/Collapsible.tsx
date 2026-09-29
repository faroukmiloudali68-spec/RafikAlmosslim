import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface CollapsibleProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  id?: string;
}

export default function Collapsible({ title, children, defaultOpen = false, id }: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="card" id={id}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-right focus:outline-none focus-visible:ring-2 focus-visible:rounded-lg p-1 -m-1"
        aria-expanded={open}
      >
        <h3 className="text-lg font-bold text-primary-c">{title}</h3>
        <ChevronDown
          size={22}
          className={`text-muted-c transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="mt-4 fade-in prose-arabic">{children}</div>
      )}
    </div>
  );
}
