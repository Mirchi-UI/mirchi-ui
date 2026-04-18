"use client"
import { cn } from "@/src/lib/cn";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const items2 = [
  {
    id: "1",
    title: "Authentication",
    desc: "Secure login system",
    content: "Supports OAuth, JWT, and session-based auth.",
  },
  {
    id: "2",
    title: "Analytics",
    desc: "Track user behavior",
    content: "Real-time dashboards and reporting.",
  },
   {
    id: "3",
    title: "Billing",
    desc: "Manage your subscription",
    content: "Easy payment management and invoices.",
  },
   {
    id: "4",
    title: "Notifications",
    desc: "Manage your preferences",
    content: "Customize your notification settings.",
  }
];

export function AccordionWithSubHeader() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="space-y-3 max-w-xl">
      {items2.map((item) => (
        <Item2
          key={item.id}
          item={item}
          isOpen={open === item.id}
          onClick={() => setOpen(open === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}

function Item2({ item, isOpen, onClick }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="rounded-xl border p-4 bg-white dark:bg-neutral-900">
      <button onClick={onClick} className="w-full text-left">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-medium">{item.title}</p>
            <p className="text-xs text-neutral-500">{item.desc}</p>
          </div>

          <ChevronDown
            className={cn(
              "w-4 h-4 mt-1 transition-transform",
              isOpen && "rotate-180",
            )}
          />
        </div>
      </button>

      <div
        style={{ height }}
        className="overflow-hidden transition-all duration-300"
      >
        <div ref={ref} className="pt-3 text-sm text-neutral-600">
          {item.content}
        </div>
      </div>
    </div>
  );
}
