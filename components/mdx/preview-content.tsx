"use client";

import {
  useActionState,
  useEffect,
  useState,
  useTransition,
  useRef,
  type RefObject,
} from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Copy, Check, CheckCheck, Terminal } from "lucide-react";
import { copyComponent } from "@/lib/action";
import { cn } from "@/lib/utils";
// import { OpenInV0Button } from "../open-in-v0-button";
import { AnimatePresence, motion } from "motion/react";
import { OpenInV0Button } from "./openV0btn";

export default function PreviewContent({
  link,
  prePath,
  isBlock = false,
}: {
  link: string;
  prePath: string;
  isBlock?: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useActionState(copyComponent, {
    error: "",
    content: "",
    success: false,
  });
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTerminalCopied, setIsTerminalCopied] = useState(false);

  const handleCopyClick = async () => {
    const [folder, filename] = link.split("/");

    startTransition(async () => {
      const formData = new FormData();
      formData.append("folder", folder);
      formData.append("fileName", filename);

      formAction(formData);
    });
  };

  const getFileName = () => {
    const [folder, filename] = link.split("/");
    return filename ? filename : folder;
  };

  const handleTerminalClick = () => {
    const [folder, filename] = link.split("/");
    const COPY = `bunx shadcn@latest add ${prePath}/r/${
      filename ? filename : folder
    }.json`;
    navigator.clipboard.writeText(COPY);
    setIsTerminalCopied(true);
    setTimeout(() => {
      setIsTerminalCopied(false);
    }, 1000);
  };

  const openInV0 = () => {
    const [folder, filename] = link.split("/");

    return filename ? filename : folder;
  };

  useEffect(() => {
    if (state.error) {
      setTimeout(() => {
        setShowLoginDialog(true);
      }, 0);
    }
    if (state.success && state.content) {
      startTransition(() => {
        setIsCopied(true);
      });
      navigator.clipboard.writeText(state.content);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [state, startTransition]);

//   function SuccessParticles({
//     buttonRef,
//   }: {
//     buttonRef: React.RefObject<HTMLButtonElement>;
//   }) {
//     const rect = buttonRef.current?.getBoundingClientRect();
//     if (!rect) return null;

//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;

//     return (
//       <AnimatePresence>
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="fixed w-1 h-1 bg-black dark:bg-white rounded-full"
//             style={{ left: centerX, top: centerY }}
//             initial={{
//               scale: 0,
//               x: 0,
//               y: 0,
//             }}
//             animate={{
//               scale: [0, 1, 0],
//               x: [0, (i % 2 ? 1 : -1) * (Math.random() * 50 + 20)],
//               y: [0, -Math.random() * 50 - 20],
//             }}
//             transition={{
//               duration: 0.6,
//               delay: i * 0.1,
//               ease: "easeOut",
//             }}
//           />
//         ))}
//       </AnimatePresence>
//     );
//   }

  const terminalButtonRef = useRef<HTMLButtonElement>(null);
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  return null;
}
