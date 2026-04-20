import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "./Dialog";

export default function FormDialogDemo() {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="px-4 py-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
          Edit Profile
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
            <input 
              className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 bg-transparent dark:text-white transition-shadow text-sm" 
              defaultValue="John Doe" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
            <input 
              className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 bg-transparent dark:text-white transition-shadow text-sm" 
              defaultValue="john@example.com" 
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose>
            <button className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors font-medium text-sm">
              Cancel
            </button>
          </DialogClose>
          <DialogClose>
            <button className="px-4 py-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors text-sm shadow-sm">
              Save Changes
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
