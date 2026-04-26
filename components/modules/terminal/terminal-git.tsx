import { AnimatedSpan, Terminal, TypingAnimation } from "./Terminal";

export function TerminalGitDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; git commit -m "feat: add terminal component"</TypingAnimation>
      <AnimatedSpan>[main 4a2b3c4] feat: add terminal component</AnimatedSpan>
      <AnimatedSpan className="text-muted-foreground"> 3 files changed, 154 insertions(+), 12 deletions(-)</AnimatedSpan>
      <TypingAnimation delay={500}>&gt; git push origin main</TypingAnimation>
      <AnimatedSpan>Enumerating objects: 12, done.</AnimatedSpan>
      <AnimatedSpan>Counting objects: 100% (12/12), done.</AnimatedSpan>
      <AnimatedSpan>Delta compression using up to 8 threads</AnimatedSpan>
      <AnimatedSpan>Compressing objects: 100% (8/8), done.</AnimatedSpan>
      <AnimatedSpan>Writing objects: 100% (10/10), 1.24 KiB | 634.00 KiB/s, done.</AnimatedSpan>
      <AnimatedSpan className="text-green-500">To github.com:user/repo.git</AnimatedSpan>
      <AnimatedSpan className="text-green-500">   a1b2c3d..4a2b3c4  main -&gt; main</AnimatedSpan>
    </Terminal>
  );
}
