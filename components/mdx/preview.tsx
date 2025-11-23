
import { getComponentCode } from "@/lib/action";
import { PreviewTabs } from "./preview-tabs";

interface PreviewProps {
  children: React.ReactNode;
  className?: string;
  isPremium?: boolean;
  link: string;
  useIframe?: boolean;
  height?: string;
  compact?: boolean;
  comment?: string[];
  isBlock?: boolean;
}

const prePath = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://mirchiui.com";

export async function Preview({
  children,
  className = "",
  link,
  useIframe = false,
  compact = false,
  comment = [],
  isBlock = false,
}: PreviewProps) {
  const code = await getComponentCode(link);

  return (
    <PreviewTabs
      link={link}
      prePath={prePath}
      code={code}
      useIframe={useIframe}
      compact={compact}
      comment={comment}
      isBlock={isBlock}
      className={className}
    >
      {children}
    </PreviewTabs>
  );
}
