"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const PasswordStrengthInput = () => {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Calculate strength based on length and characters
  const calculateStrength = (pass: string) => {
    let score = 0;
    if (!pass) return score;
    if (pass.length > 5) score += 1;
    if (pass.length > 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return Math.min(score, 4);
  };

  const strength = calculateStrength(password);
  
  const getStrengthColor = (level: number) => {
    if (strength >= level) {
      if (strength <= 1) return "bg-red-500";
      if (strength === 2) return "bg-orange-500";
      if (strength === 3) return "bg-yellow-500";
      return "bg-green-500";
    }
    return "bg-neutral-800";
  };

  const getStrengthText = () => {
    if (strength === 0) return "Very Weak";
    if (strength === 1) return "Weak";
    if (strength === 2) return "Fair";
    if (strength === 3) return "Good";
    if (strength >= 4) return "Strong";
    return "";
  };

  return (
    <div className="w-full max-w-sm space-y-4 font-sans mx-auto">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-indigo-500 transition-colors">
          <Lock className="w-5 h-5" />
        </div>
        <input
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className={cn(
            "w-full pl-10 pr-10 py-3 bg-neutral-900 border border-neutral-800 rounded-xl",
            "text-white placeholder:text-neutral-500 outline-none",
            "focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300"
          )}
        />
        <button
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-white transition-colors"
        >
          {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-medium">
          <span className="text-neutral-400">Password strength</span>
          <span className={cn(
            "transition-colors duration-300",
            strength <= 1 ? "text-red-500" : 
            strength === 2 ? "text-orange-500" : 
            strength === 3 ? "text-yellow-500" : "text-green-500"
          )}>{getStrengthText()}</span>
        </div>
        <div className="flex gap-2 h-1.5">
          {[1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={cn(
                "h-full flex-1 rounded-full transition-all duration-500 ease-out",
                getStrengthColor(level)
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasswordStrengthInput;
