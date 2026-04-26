"use client";
import { MessageSquare } from "lucide-react";
import { FeedbackBar } from "./feedbackBar";

export default function Minimal() {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <FeedbackBar
          title="Was this helpful?"
          icon={<MessageSquare className="size-4" />}
          onHelpful={() => console.log("Helpful")}
          onNotHelpful={() => console.log("Not Helpful")}
          onClose={() => console.log("Close")}
        />
      </div>
    </div>
  );
}
