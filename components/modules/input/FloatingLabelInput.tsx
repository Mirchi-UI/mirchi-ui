"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const FloatingLabelInput = () => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full max-w-sm relative mx-auto group">
      <div className="relative">
        <input
          type="text"
          id="floating_input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "block w-full px-4 pt-6 pb-2 text-sm text-white bg-neutral-900/60",
            "border border-neutral-800 rounded-xl appearance-none",
            "focus:outline-none focus:ring-0 focus:border-cyan-500",
            "transition-all duration-300 peer shadow-sm"
          )}
          placeholder=" "
        />
        <label
          htmlFor="floating_input"
          className={cn(
            "absolute text-sm duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4",
            "peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0",
            "peer-focus:scale-75 peer-focus:-translate-y-3",
            isFocused ? "text-cyan-400 font-medium" : "text-neutral-400"
          )}
        >
          Email address
        </label>
        
        {/* Animated bottom line */}
        <div className={cn(
          "absolute bottom-0 left-0 h-[2px] bg-cyan-500 transition-all duration-500 ease-out",
          isFocused ? "w-full" : "w-0",
          "rounded-b-xl"
        )} />
      </div>
      
      {/* Subtle Hint */}
      <p className="mt-2 text-xs text-neutral-500 px-1 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">
        We'll never share your details.
      </p>
    </div>
  );
};

export default FloatingLabelInput;
