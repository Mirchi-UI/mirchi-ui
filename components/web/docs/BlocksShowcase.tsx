"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { getBlocksSection, navItem  } from "@/config/navigation";

interface BlockCardProps {
  block: navItem;
}

function BlockCard({ block }: BlockCardProps) {
  return (
    <Link
      href={block.href}
      className="group relative rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 flex flex-col md:flex-row overflow-hidden shadow-2xl border border-white/10"
    >
      {/* ---- LEFT SIDE: Title + Description ---- */}
      <div className={`flex-1 p-6 flex flex-col justify-center gap-2 bg-linear-to-b ${block.bg}`}>
        <h3 className="text-xl font-semibold text-primary">{block.title}</h3>
        {block.description && (
          <p className="text-sm text-primary/80">{block.description}</p>
        )}
        <p className="text-xs text-primary/70 font-medium">
          {block.count} Blocks
        </p>

        <div className="flex items-center gap-2 mt-2">
          {block.isNew && (
            <Badge className="h-5 px-2 text-xs bg-blue-500 hover:bg-blue-600 text-primary border-0">
              New
            </Badge>
          )}
          {block.isUpdated && (
            <Badge className="h-5 px-2 text-xs bg-green-500 hover:bg-green-600 text-primary border-0">
              Updated
            </Badge>
          )}
        </div>
      </div>

      {/* ---- RIGHT SIDE: Image ---- */}
      <div className="relative flex-1 aspect-16/10 md:aspect-auto w-full md:w-[50%]">
        {/* Soft stacked blur layers */}
        <div className="absolute inset-0 translate-x-4 translate-y-4 bg-accent/5 rounded-xl blur-md z-0" />
        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-accent/5 rounded-xl blur-sm z-0" />

        {/* Main preview image */}
        <div className="relative z-10 h-full w-full rounded-xl overflow-hidden border border-white/20 shadow-2xl">
          <Image
            src={`${block.previewImage}`}
            alt={`${block.title} preview`}
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom-left dark blur overlay */}
        <div className="absolute bottom-0 left-0 w-[70%] h-[50%] bg-linear-to-t from-accent/40 via-accent/25 to-transparent rounded-br-xl backdrop-blur-sm" />
      </div>
    </Link>
  );
}

export function BlocksShowcase() {
  const blocksSection = getBlocksSection();

  if (!blocksSection) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-700 p-10 text-center text-zinc-500">
        No blocks found
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blocksSection.items.map((block) => (
        <BlockCard key={block.id} block={block} />
      ))}
    </div>
  );
}
