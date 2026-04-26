"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// ---------------------------
// Utils
// ---------------------------
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// ---------------------------
// Context
// ---------------------------
type StepState = "inactive" | "active" | "completed" | "loading";

type StepperContextType = {
  currentStep: number;
  setStep: (step: number) => void;
  orientation: "horizontal" | "vertical";
  clickable: boolean;
};

const StepperContext = React.createContext<StepperContextType | null>(null);

function useStepper() {
  const ctx = React.useContext(StepperContext);
  if (!ctx) throw new Error("Stepper must be used within <Stepper />");
  return ctx;
}

// ---------------------------
// Root
// ---------------------------
interface StepperProps {
  value?: number;
  defaultValue?: number;
  onValueChange?: (step: number) => void;
  orientation?: "horizontal" | "vertical";
  clickable?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Stepper({
  value,
  defaultValue = 0,
  onValueChange,
  orientation = "horizontal",
  clickable = true,
  className,
  children,
}: StepperProps) {
  const [internal, setInternal] = React.useState(defaultValue);

  const currentStep = value !== undefined ? value : internal;

  const setStep = (step: number) => {
    if (value === undefined) setInternal(step);
    onValueChange?.(step);
  };

  return (
    <StepperContext.Provider
      value={{ currentStep, setStep, orientation, clickable }}
    >
      <div className={cn("w-full", className)}>{children}</div>
    </StepperContext.Provider>
  );
}

// ---------------------------
// List
// ---------------------------
export function StepperList({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { orientation } = useStepper();

  return (
    <div
      className={cn(
        "relative flex w-full",
        orientation === "horizontal"
          ? "items-center justify-between"
          : "flex-col gap-8",
        className,
      )}
      {...props}
    />
  );
}

// ---------------------------
// Item
// ---------------------------
interface StepperItemProps {
  value: number;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const StepperItem = React.forwardRef<HTMLDivElement, StepperItemProps>(
  ({ value, loading, className, children }, ref) => {
    const { currentStep } = useStepper();

    let state: StepState = "inactive";
    if (loading) state = "loading";
    else if (value < currentStep) state = "completed";
    else if (value === currentStep) state = "active";

    return (
      <div
        ref={ref}
        data-state={state}
        className={cn("relative flex items-center", className)}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;
          return React.cloneElement(child as any, { state, step: value });
        })}
      </div>
    );
  },
);
StepperItem.displayName = "StepperItem";

// ---------------------------
// Trigger
// ---------------------------
interface StepperTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: number;
  state?: StepState;
}

export const StepperTrigger = React.forwardRef<
  HTMLButtonElement,
  StepperTriggerProps
>(({ className, value, children, ...props }, ref) => {
  const { setStep, clickable } = useStepper();

  return (
    <button
      ref={ref}
      onClick={() => {
        if (clickable && value !== undefined) setStep(value);
      }}
      className={cn(
        "flex items-center gap-3 text-left group transition",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});
StepperTrigger.displayName = "StepperTrigger";

// ---------------------------
// Indicator (CLEAN STYLE)
// ---------------------------
const indicatorVariants = cva(
  "flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200",
  {
    variants: {
      state: {
        inactive: "border border-neutral-700 text-neutral-500 bg-transparent",
        active: "bg-white text-black scale-105 shadow-sm",
        completed: "bg-white text-black",
        loading: "border border-neutral-500 text-white",
      },
      size: {
        default: "h-8 w-8",
        sm: "h-6 w-6 text-xs",
        lg: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

interface StepperIndicatorProps extends VariantProps<typeof indicatorVariants> {
  step?: number;
  icon?: React.ReactNode;
  className?: string;
}

export function StepperIndicator({
  state,
  step,
  icon,
  size,
  className,
}: StepperIndicatorProps) {
  return (
    <div className={cn(indicatorVariants({ state, size }), className)}>
      {state === "completed" ? (
        <CheckIcon />
      ) : state === "loading" ? (
        <Spinner />
      ) : icon ? (
        icon
      ) : (
        step! + 1
      )}
    </div>
  );
}

// ---------------------------
// Separator (PROGRESS LINE)
// ---------------------------
export function StepperSeparator({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const { orientation, currentStep } = useStepper();

  return (
    <div
      className={cn(
        "relative",
        orientation === "horizontal" ? "flex-1 h-[2px]" : "w-[2px] h-8 ml-4",
        className,
      )}
    >
      <div className="absolute inset-0 bg-neutral-800" />
      <div
        className={cn(
          "absolute inset-0 bg-white transition-all duration-300",
          orientation === "horizontal" ? "origin-left" : "origin-top",
        )}
        style={{
          transform:
            orientation === "horizontal"
              ? `scaleX(${currentStep > 0 ? 1 : 0})`
              : `scaleY(${currentStep > 0 ? 1 : 0})`,
        }}
      />
    </div>
  );
}

// ---------------------------
// Content
// ---------------------------
export function StepperContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-0.5", className)} {...props} />;
}

export function StepperTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "text-sm text-neutral-300 group-data-[state=active]:text-white transition",
        className,
      )}
      {...props}
    />
  );
}

export function StepperDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "text-xs text-neutral-500 group-data-[state=active]:text-neutral-400",
        className,
      )}
      {...props}
    />
  );
}

// ---------------------------
// Icons
// ---------------------------
function CheckIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Spinner() {
  return (
    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
  );
}
