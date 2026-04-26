"use client";

import { cn } from "@/src/lib/cn";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const items2 = [
  {
    id: "1",
    title: "Authentication",
    desc: "Secure login system",
    content:
      "Supports OAuth, JWT, and session-based authentication with high-level encryption standards.",
  },
  {
    id: "2",
    title: "Analytics",
    desc: "Track user behavior",
    content:
      "Real-time dashboards, user flow tracking, and detailed reporting with custom event triggers.",
  },
  {
    id: "3",
    title: "Billing",
    desc: "Manage your subscription",
    content:
      "Automated invoicing, payment history, and flexible subscription plan management at your fingertips.",
  } 
];

export function AccordionWithSubHeader() {
  const [open, setOpen] = useState<string | null>("1");

  return (
    <div className="w-full max-w-xl mx-auto space-y-4 px-4 py-8">
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
  return (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: isOpen ? "rgba(0,0,0,0.03)" : "rgba(0,0,0,0)",
      }}
      className={cn(
        "w-full overflow-hidden rounded-2xl border transition-all",
        isOpen
          ? "border-black/10 dark:border-white/10 shadow-sm"
          : "border-black/5 dark:border-white/5",
      )}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-4 sm:p-5 text-left"
      >
        <div className="flex flex-col gap-1">
          <span className="text-base sm:text-lg font-semibold">
            {item.title}
          </span>
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            {item.desc}
          </span>
        </div>

        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full transition-transform",
            isOpen && "rotate-180",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-4 sm:px-5 pb-5 pt-0">
              <div className="h-px w-full bg-border/40 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
