import { AnimatedSpan, Terminal, TypingAnimation } from "./Terminal";

export function TerminalServerDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; npm run dev</TypingAnimation>
      <AnimatedSpan className="text-yellow-500">ready - started server on 0.0.0.0:3000, url: http://localhost:3000</AnimatedSpan>
      <AnimatedSpan className="text-blue-500">event - compiled successfully</AnimatedSpan>
      <AnimatedSpan className="text-muted-foreground">wait  - compiling...</AnimatedSpan>
      <AnimatedSpan className="text-blue-500">event - compiled successfully in 124ms (142 modules)</AnimatedSpan>
      <AnimatedSpan>
        <span className="text-white">GET / </span>
        <span className="text-green-500">200</span>
        <span className="text-muted-foreground"> in 42ms</span>
      </AnimatedSpan>
      <AnimatedSpan>
        <span className="text-white">GET /api/data </span>
        <span className="text-green-500">200</span>
        <span className="text-muted-foreground"> in 12ms</span>
      </AnimatedSpan>
      <TypingAnimation className="text-red-500" delay={1000}>error - Failed to fetch data from API</TypingAnimation>
    </Terminal>
  );
}
