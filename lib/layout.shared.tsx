import { CustomNav } from "@/components/nav/customNavlinks";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Flame  } from "lucide-react";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2 font-geist font-bold">
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-linear-to-br from-orange-500 to-red-600 text-white">
            <Flame className="w-3.5 h-3.5" />
          </div>
          <span>
            Mirchi<span className="text-orange-600 font-gMono">UI</span>
          </span>
        </div>
      ),
    },
    links: [
      {
        type:"custom",
        children: <CustomNav/>
      }
    ],
  };
}
