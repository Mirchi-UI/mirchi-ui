"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, Command } from "lucide-react";
import { cn } from "@/lib/utils";

const SearchInputCmd = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full max-w-md relative group mx-auto">
      {/* Glow Effect */}
      <div className={cn(
        "absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none",
        isFocused ? "bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-xl" : "bg-transparent blur-none"
      )} />
      
      <div className={cn(
        "relative flex items-center w-full bg-neutral-950 border rounded-2xl overflow-hidden transition-all duration-300",
        isFocused ? "border-purple-500/50 shadow-[0_0_0_2px_rgba(168,85,247,0.1)]" : "border-neutral-800"
      )}>
        <div className="pl-4 pr-2 text-neutral-400 group-focus-within:text-purple-400 transition-colors">
          <Search className="w-5 h-5" />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          placeholder="Quick search..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full py-3.5 bg-transparent text-neutral-100 placeholder:text-neutral-500 outline-none text-sm"
        />
        
        <div className="pr-4 pl-2 flex items-center">
          <kbd className={cn(
            "flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium border transition-all duration-300",
            isFocused 
              ? "bg-purple-500/10 border-purple-500/20 text-purple-300" 
              : "bg-neutral-900 border-neutral-800 text-neutral-500"
          )}>
            <Command className="w-3 h-3" />
            <span>K</span>
          </kbd>
        </div>
      </div>
    </div>
  );
};

export default SearchInputCmd;
