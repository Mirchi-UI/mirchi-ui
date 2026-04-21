
import { getComponentCode } from "@/lib/action";
import { PreviewTabs } from "./preview-tabs";
import { CodePreview } from "./code-preview";

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
  codeOnly?: boolean;
  isFull?: boolean;
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
  codeOnly = false,
  isFull = true,
}: PreviewProps) {
  const code = await getComponentCode(link);

  if (codeOnly) {
    // We need to import CodePreview at the top
    return <CodePreview code={code} className={className} />;
  }

  return (
    <PreviewTabs
      link={link}
      prePath={prePath}
      code={code}
      useIframe={useIframe}
      compact={compact}
      comment={comment}
      isBlock={isBlock}
      isFull={isFull}
      className={className}
    >
      {children}
    </PreviewTabs>
  );
}
