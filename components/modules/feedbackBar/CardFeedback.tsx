"use client";
import { FileText } from "lucide-react";
import { FeedbackBar } from "./feedbackBar";

export default function CardFeedback() {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="w-full max-w-xl rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="mb-6 space-y-2">
          <h3 className="text-lg font-semibold tracking-tight">
            Documentation Article
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This is an example of an article layout. At the end of the article,
            you might want to ask the user if the content was helpful to them.
          </p>
        </div>

        <div className="mt-8 border-t border-border/50 pt-6">
          <FeedbackBar
            title="Was this article helpful?"
            icon={<FileText className="size-4" />}
            className="shadow-none border-border/40 bg-muted/30 hover:bg-muted/50"
            onHelpful={() => console.log("Helpful")}
            onNotHelpful={() => console.log("Not Helpful")}
            onClose={() => console.log("Close")}
          />
        </div>
      </div>
    </div>
  );
}
