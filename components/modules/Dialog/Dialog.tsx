"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

/* -------------------- */
/* Context */
/* -------------------- */

type DialogContextType = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const DialogContext = createContext<DialogContextType | null>(null);

function useDialog() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("Dialog components must be inside Dialog");
  return ctx;
}

/* -------------------- */
/* Root */
/* -------------------- */

export function Dialog({
  children,
  open: controlledOpen,
  onOpenChange,
}: {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (v: boolean) => void;
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  const open = controlledOpen ?? uncontrolledOpen;

  const setOpen = (v: boolean) => {
    if (onOpenChange) onOpenChange(v);
    else setUncontrolledOpen(v);
  };

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

/* -------------------- */
/* Trigger */
/* -------------------- */

export function DialogTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { setOpen } = useDialog();

  return (
    <span
      onClick={() => setOpen(true)}
      className={clsx("cursor-pointer", className)}
    >
      {children}
    </span>
  );
}

/* -------------------- */
/* Content */
/* -------------------- */

export function DialogContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open, setOpen } = useDialog();

  // ESC close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={clsx(
                "relative w-full max-w-md rounded-2xl border bg-white dark:bg-zinc-900 p-6 shadow-2xl",
                className,
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

/* -------------------- */
/* Close */
/* -------------------- */

export function DialogClose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { setOpen } = useDialog();

  return (
    <span
      onClick={() => setOpen(false)}
      className={clsx("cursor-pointer", className)}
    >
      {children}
    </span>
  );
}

/* -------------------- */
/* Layout Parts */
/* -------------------- */

export function DialogHeader({ children, className }: any) {
  return <div className={clsx("mb-4 space-y-1", className)}>{children}</div>;
}

export function DialogTitle({ children, className }: any) {
  return (
    <h2
      className={clsx(
        "text-lg font-semibold text-zinc-900 dark:text-zinc-50",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function DialogDescription({ children, className }: any) {
  return (
    <p className={clsx("text-sm text-zinc-500 dark:text-zinc-400", className)}>
      {children}
    </p>
  );
}

export function DialogFooter({ children, className }: any) {
  return (
    <div className={clsx("mt-6 flex justify-end gap-2", className)}>
      {children}
    </div>
  );
}
