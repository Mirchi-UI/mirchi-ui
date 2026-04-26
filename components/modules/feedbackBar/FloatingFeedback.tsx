"use client"
import { MessageSquare } from "lucide-react";
import { FeedbackBar } from "./feedbackBar";


export default function FloatingFeedback() {
  return (
    <div className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-border bg-background">
      <p className="text-muted-foreground text-sm">Scrollable content area...</p>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-10">
        <FeedbackBar
          title="Did you find what you were looking for?"
          icon={<MessageSquare className="size-4" />}
          className="shadow-xl border-border/50 bg-background/90"
          onHelpful={() => console.log("Helpful")}
          onNotHelpful={() => console.log("Not Helpful")}
          onClose={() => console.log("Close")}
        />
      </div>
    </div>
  );
}
