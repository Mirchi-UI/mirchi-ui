import { AnimatedSpan, Terminal, TypingAnimation } from "./Terminal";

export function TerminalBuildDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; next build</TypingAnimation>
      <AnimatedSpan className="text-blue-500">ℹ  Collecting page data .</AnimatedSpan>
      <AnimatedSpan className="text-blue-500">ℹ  Generating static pages (0/12)</AnimatedSpan>
      <AnimatedSpan className="text-blue-500">ℹ  Generating static pages (12/12)</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔  Finalizing page optimization .</AnimatedSpan>
      <AnimatedSpan>
        <span className="text-green-500">Route (app)</span>
        <span className="pl-4 text-muted-foreground">Size     First Load JS</span>
      </AnimatedSpan>
      <AnimatedSpan>
        <span>┌ ○ /</span>
        <span className="pl-4 text-muted-foreground">137 B          87.1 kB</span>
      </AnimatedSpan>
      <AnimatedSpan>
        <span>└ λ /api/hello</span>
        <span className="pl-4 text-muted-foreground">0 B            87.1 kB</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">Done in 4.2s.</AnimatedSpan>
    </Terminal>
  );
}
