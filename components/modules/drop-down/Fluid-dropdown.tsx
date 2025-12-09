"use client";

import * as React from "react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Shirt,
  Briefcase,
  Smartphone,
  Home,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { useClickAway } from "@/hooks/use-click-away";

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

const categories: Category[] = [
  { id: "all", label: "All", icon: Layers, color: "#A06CD5" },
  { id: "lifestyle", label: "Lifestyle", icon: Shirt, color: "#FF6B6B" },
  { id: "desk", label: "Desk", icon: Briefcase, color: "#4ECDC4" },
  { id: "tech", label: "Tech", icon: Smartphone, color: "#45B7D1" },
  { id: "home", label: "Home", icon: Home, color: "#F9C74F" },
];

const IconWrapper = ({
  icon: Icon,
  isHovered,
  color,
}: {
  icon: LucideIcon;
  isHovered: boolean;
  color: string;
}) => (
  <motion.div
    className="w-4 h-4 mr-2 relative"
    initial={false}
    animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
  >
    <Icon className="w-4 h-4" />
    {isHovered && (
      <motion.div
        className="absolute inset-0"
        style={{ color }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Icon className="w-4 h-4" strokeWidth={2} />
      </motion.div>
    )}
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const FluidDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<Category>(
    categories[0]
  );
  const [hoveredCategory, setHoveredCategory] = React.useState<string | null>(
    null
  );
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  useClickAway(dropdownRef as React.RefObject<HTMLElement>, () =>
    setIsOpen(false)
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex items-center justify-center w-full bg-white dark:bg-black">
        <div className="w-full px-4 relative" ref={dropdownRef}>
          <Button
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "w-full justify-between transition-all duration-200 ease-in-out h-10",
              "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900",
              "focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 focus:ring-offset-white",
              "border border-transparent focus:border-neutral-300",
              // Dark mode styles
              "dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200",
              "dark:focus:ring-neutral-700 dark:focus:ring-offset-black dark:focus:border-neutral-700",
              isOpen &&
                "bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200"
            )}
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <span className="flex items-center">
              <IconWrapper
                icon={selectedCategory.icon}
                isHovered={false}
                color={selectedCategory.color}
              />
              {selectedCategory.label}
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              whileHover={{ rotate: isOpen ? 180 : 180 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "20px",
                height: "20px",
              }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </Button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 1, y: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  height: "auto",
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 1,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 0,
                  height: 0,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 1,
                  },
                }}
                className="absolute left-4 right-4 top-full mt-2"
                onKeyDown={handleKeyDown}
              >
                <motion.div
                  className="absolute w-full rounded-lg p-1 shadow-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900"
                  initial={{ borderRadius: 8 }}
                  animate={{
                    borderRadius: 12,
                    transition: { duration: 0.2 },
                  }}
                  style={{ transformOrigin: "top" }}
                >
                  <motion.div
                    className="py-2 relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div
                      layoutId="hover-highlight"
                      className="absolute inset-x-1 rounded-md bg-neutral-200 dark:bg-neutral-800"
                      animate={{
                        y:
                          categories.findIndex(
                            (c) =>
                              (hoveredCategory || selectedCategory.id) === c.id
                          ) *
                            40 +
                          (categories.findIndex(
                            (c) =>
                              (hoveredCategory || selectedCategory.id) === c.id
                          ) > 0
                            ? 20
                            : 0),
                        height: 40,
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.5,
                      }}
                    />
                    {categories.map((category, index) => (
                      <React.Fragment key={category.id}>
                        {index === 1 && (
                          <motion.div
                            className="mx-4 my-2.5 border-t border-neutral-300 dark:border-neutral-700"
                            variants={itemVariants}
                          />
                        )}
                        <motion.button
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsOpen(false);
                          }}
                          onHoverStart={() => setHoveredCategory(category.id)}
                          onHoverEnd={() => setHoveredCategory(null)}
                          className={cn(
                            "relative flex w-full items-center px-4 py-2.5 text-sm rounded-md",
                            "transition-colors duration-150",
                            "focus:outline-none",
                            selectedCategory.id === category.id ||
                              hoveredCategory === category.id
                              ? "text-neutral-900 dark:text-neutral-200"
                              : "text-neutral-500 dark:text-neutral-400"
                          )}
                          whileTap={{ scale: 0.98 }}
                          variants={itemVariants}
                        >
                          <IconWrapper
                            icon={category.icon}
                            isHovered={hoveredCategory === category.id}
                            color={category.color}
                          />
                          {category.label}
                        </motion.button>
                      </React.Fragment>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
};
