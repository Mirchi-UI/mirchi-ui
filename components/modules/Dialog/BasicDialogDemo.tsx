import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./Dialog";

export default function BasicDialogDemo() {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="px-4 py-2 bg-blue-600/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600/20 transition-colors">
          Open Basic Dialog
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profile Update</DialogTitle>
          <DialogDescription>
            Your profile has been updated successfully. You can now close this dialog.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <button className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors font-medium text-sm">
              Got it
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
