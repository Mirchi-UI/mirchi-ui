"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  KeyboardEvent,
} from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { cn } from "@/lib/utils";

// ================= CONTEXT =================

type TabsContextType = {
  value: string;
  setValue: (val: string) => void;
  variant: "default" | "underline" | "pill" | "glow" | "soft";
};

const TabsContext = createContext<TabsContextType | null>(null);

const useTabs = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs must be used inside <Tabs>");
  return ctx;
};

// ================= ROOT =================

interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (val: string) => void;
  variant?: "default" | "underline" | "pill" | "glow" | "soft";
  children: React.ReactNode;
  className?: string;
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  variant = "default",
  children,
  className,
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || "");

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value! : internalValue;

  const setValue = (val: string) => {
    if (!isControlled) setInternalValue(val);
    onValueChange?.(val);
  };

  return (
    <TabsContext.Provider value={{ value: currentValue, setValue, variant }}>
      <LayoutGroup>
        <div className={cn("w-full flex flex-col", className)}>{children}</div>
      </LayoutGroup>
    </TabsContext.Provider>
  );
}

// ================= LIST =================

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export function TabsList({ children, className }: TabsListProps) {
  const { variant } = useTabs();

  const variantStyles = {
    default: "inline-flex items-center justify-center rounded-xl bg-muted p-1 mx-auto",
    underline: "flex items-center justify-center border-b border-border/40 w-full bg-transparent p-0 gap-2",
    pill: "inline-flex items-center justify-center rounded-full bg-muted/50 backdrop-blur-sm p-1 border border-border/40 gap-1 mx-auto",
    glow: "inline-flex items-center justify-center gap-2 bg-transparent p-0 mx-auto",
    soft: "inline-flex items-center justify-center p-1.5 bg-secondary/30 rounded-2xl gap-1 mx-auto",
  };

  return (
    <div
      role="tablist"
      className={cn(variantStyles[variant], className)}
    >
      {children}
    </div>
  );
}

// ================= TRIGGER =================

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const { value: active, setValue, variant } = useTabs();
  const ref = useRef<HTMLButtonElement>(null);

  const isActive = active === value;

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const parent = ref.current.parentElement;
    if (!parent) return;

    const triggers = Array.from(
      parent.querySelectorAll<HTMLButtonElement>("[role=tab]"),
    );

    const index = triggers.indexOf(ref.current);

    if (e.key === "ArrowRight") {
      const next = triggers[index + 1] || triggers[0];
      next.focus();
      next.click();
    }

    if (e.key === "ArrowLeft") {
      const prev = triggers[index - 1] || triggers[triggers.length - 1];
      prev.focus();
      prev.click();
    }
  };

  const triggerStyles = {
    default: cn(
      "px-4 py-1.5 text-sm font-medium rounded-lg transition-all",
      isActive
        ? "bg-background shadow text-foreground"
        : "text-muted-foreground hover:text-foreground"
    ),
    underline: cn(
      "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    ),
    pill: cn(
      "relative px-6 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full",
      isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
    ),
    glow: cn(
      "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
      isActive ? "text-primary brightness-110" : "text-muted-foreground hover:text-foreground"
    ),
    soft: cn(
      "relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200",
      isActive ? "text-foreground" : "text-muted-foreground hover:bg-secondary/50"
    ),
  };

  return (
    <button
      ref={ref}
      role="tab"
      aria-selected={isActive}
      onClick={() => setValue(value)}
      onKeyDown={handleKeyDown}
      className={cn(
        "focus:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
        triggerStyles[variant],
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      {isActive && (
        <>
          {variant === "underline" && (
            <motion.div
              layoutId="activeUnderline"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {variant === "pill" && (
            <motion.div
              layoutId="activePill"
              className="absolute inset-0 bg-primary shadow-sm"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {variant === "glow" && (
            <>
              <motion.div
                layoutId="glowBackground"
                className="absolute inset-0 bg-primary/10 rounded-lg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
              <motion.div
                layoutId="glowBorder"
                className="absolute inset-0 rounded-lg border border-primary/50 shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </>
          )}
          {variant === "soft" && (
            <motion.div
              layoutId="softActive"
              className="absolute inset-0 bg-background rounded-xl border border-border/50"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
        </>
      )}
    </button>
  );
}

// ================= CONTENT =================

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  const { value: active } = useTabs();

  if (active !== value) return null;

  return (
    <div
      role="tabpanel"
      className={cn("mt-4 outline-none w-full text-center", className)}
    >
      {children}
    </div>
  );
}
