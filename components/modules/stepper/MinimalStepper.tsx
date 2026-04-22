"use client";

import * as React from "react";

// ---------------------------
// Types
// ---------------------------
type Step = {
  title: string;
};

interface MinimalStepperProps {
  steps: Step[];

  // Controlled (optional)
  currentStep?: number;
  onStepChange?: (step: number) => void;

  // Uncontrolled defaults
  defaultStep?: number;

  // Behavior
  clickable?: boolean;
  className?: string;
}

// ---------------------------
// Component
// ---------------------------
export default function MinimalStepper({
  steps,
  currentStep,
  defaultStep = 0,
  onStepChange,
  clickable = true,
  className,
}: MinimalStepperProps) {
  const [internalStep, setInternalStep] = React.useState(defaultStep);

  const isControlled = currentStep !== undefined;
  const activeStep = isControlled ? currentStep : internalStep;

  const setStep = (step: number) => {
    if (!isControlled) setInternalStep(step);
    onStepChange?.(step);
  };

  return (
    <div className={`w-xl ${className}`}>
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;

          return (
            <React.Fragment key={index}>
              {/* Step */}
              <div className="relative flex flex-col items-center group">
                {/* Indicator */}
                <button
                  disabled={!clickable}
                  onClick={() => clickable && setStep(index)}
                  className={`
                    h-8 w-8 rounded-full flex items-center justify-center text-sm transition-all duration-200 font-mono font-bold
                    ${
                      isActive || isCompleted
                        ? "bg-primary text-primary-foreground "
                        : "border border-neutral-700 text-neutral-500"
                    }
                    ${!clickable ? "cursor-default" : "cursor-pointer"}
                  `}
                >
                  {index + 1}
                </button>

                {/* Tooltip */}
                <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition text-xs text-neutral-300 bg-neutral-900 px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                  {step.title}
                </div>
              </div>

              {/* Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-[2px] mx-2 bg-primary/20 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-primary transition-all duration-300"
                    style={{
                      transform: index < activeStep ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
