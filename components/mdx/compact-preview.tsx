import { getComponentCode } from "@/lib/action";
import { CompactPreviewClient } from "./compact-preview-client";

interface CompactPreviewProps {
  children: React.ReactNode;
  link: string;
  className?: string;
}

export async function CompactPreview({
  children,
  link,
  className,
}: CompactPreviewProps) {
  const code = await getComponentCode(link);

  return (
    <CompactPreviewClient code={code} link={link} className={className}>
      {children}
    </CompactPreviewClient>
  );
}
