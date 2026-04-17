"use client"
import { useEffect } from "react";

interface AuroraOfferButtonProps {
  text?: string;
  topLabel?: string;
  bottomLabel?: string;
}

const cornerPath =
  "M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z";

export default function AuroraOfferButton({
  text = "Get Offer",
  topLabel = "expires in...",
  bottomLabel = "...8 hours",
}: AuroraOfferButtonProps) {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600&family=Poppins:wght@600&display=swap');

      .aurora-btn-container {
        --btn-color: #d8ff7c;
        --corner-color: #0002;
        --corner-dist: 24px;
        --corner-multiplier: 1.5;
        --timing-function: cubic-bezier(0, 0, 0, 2.5);
        --duration: 250ms;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .aurora-btn {
        position: relative;
        min-width: 160px;
        min-height: calc(var(--corner-dist) * 2);
        border-radius: 16px;
        border: none;
        padding: 0.25em 1em;
        background: linear-gradient(#fff2, #0001), var(--btn-color);
        box-shadow:
          1px 1px 2px -1px #fff inset,
          0 2px 1px #00000010, 0 4px 2px #00000010,
          0 8px 4px #00000010, 0 16px 8px #00000010,
          0 32px 16px #00000010;
        transition:
          transform var(--duration) var(--timing-function),
          filter var(--duration) var(--timing-function);
        cursor: pointer;
      }
      .aurora-btn-drawer {
        position: absolute;
        display: flex;
        justify-content: center;
        min-height: 32px;
        border-radius: 16px;
        border: none;
        padding: 0.25em 1em;
        font-size: 0.8em;
        font-weight: 600;
        font-family: 'Poppins', monospace;
        color: #0009;
        background: linear-gradient(#fff2, #0001), var(--btn-color);
        background-color: #fbff13;
        opacity: 0;
        transition:
          transform calc(0.5 * var(--duration)) ease,
          filter var(--duration) var(--timing-function),
          opacity calc(0.5 * var(--duration)) ease;
        filter: blur(2px);
        white-space: nowrap;
      }
      .aurora-transition-top {
        top: 0; left: 0;
        border-radius: 12px 12px 0 0;
        align-items: flex-start;
      }
      .aurora-transition-bottom {
        bottom: 0; right: 0;
        border-radius: 0 0 12px 12px;
        align-items: flex-end;
      }
      .aurora-btn-text {
        display: inline-block;
        font-size: 1.25em;
        font-family: 'Syne', 'Poppins', 'Inter', sans-serif;
        font-weight: 600;
        color: #5550;
        background-image: linear-gradient(#444, #000a);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 1px 0 #fff6) drop-shadow(0 -1px 0 #0006);
        transition:
          transform var(--duration) var(--timing-function),
          filter var(--duration) var(--timing-function),
          color var(--duration) var(--timing-function);
      }
      .aurora-btn-corner {
        position: absolute;
        width: 32px;
        fill: none;
        stroke: var(--corner-color);
        transition:
          transform var(--duration) var(--timing-function),
          filter var(--duration) var(--timing-function);
      }
      .aurora-btn-corner:nth-of-type(1) { top:0; left:0; transform: translate(calc(-1*var(--corner-dist)), calc(-1*var(--corner-dist))) rotate(90deg); }
      .aurora-btn-corner:nth-of-type(2) { top:0; right:0; transform: translate(var(--corner-dist), calc(-1*var(--corner-dist))) rotate(180deg); }
      .aurora-btn-corner:nth-of-type(3) { bottom:0; right:0; transform: translate(var(--corner-dist), var(--corner-dist)) rotate(-90deg); }
      .aurora-btn-corner:nth-of-type(4) { bottom:0; left:0; transform: translate(calc(-1*var(--corner-dist)), var(--corner-dist)) rotate(0deg); }

      .aurora-btn-container:has(.aurora-btn:hover) .aurora-btn,
      .aurora-btn-container:has(.aurora-btn:focus-visible) .aurora-btn {
        transform: scale(1.05);
        filter: drop-shadow(0 16px 16px #0002);
      }
      .aurora-btn-container:has(.aurora-btn:hover) .aurora-transition-top,
      .aurora-btn-container:has(.aurora-btn:focus-visible) .aurora-transition-top {
        transform: translateY(-24px) rotateZ(4deg);
        filter: blur(0px);
        animation: aurora-hue 3s infinite linear;
        opacity: 1;
      }
      .aurora-btn-container:has(.aurora-btn:hover) .aurora-transition-bottom,
      .aurora-btn-container:has(.aurora-btn:focus-visible) .aurora-transition-bottom {
        transform: translateY(24px) rotateZ(4deg);
        filter: blur(0px);
        animation: aurora-hue 3s infinite linear;
        opacity: 1;
      }
      .aurora-btn-container:has(.aurora-btn:hover) .aurora-btn-text,
      .aurora-btn-container:has(.aurora-btn:focus-visible) .aurora-btn-text {
        filter: drop-shadow(0 1px 0 #fff6) drop-shadow(0 -1px 0 #0006) drop-shadow(0 6px 2px #0003);
        transform: scale(1.05);
        color: #0008;
      }
      .aurora-btn-container:has(.aurora-btn:hover),
      .aurora-btn-container:has(.aurora-btn:focus-visible) {
        --corner-color: #0004;
      }
      .aurora-btn-container:has(.aurora-btn:hover) .aurora-btn-corner:nth-of-type(1),
      .aurora-btn-container:has(.aurora-btn:focus-visible) .aurora-btn-corner:nth-of-type(1) {
        transform: translate(calc(-1*var(--corner-multiplier)*var(--corner-dist)), calc(-1*var(--corner-multiplier)*var(--corner-dist))) rotate(90deg);
        filter: drop-shadow(-10px 10px 1px var(--corner-color)) drop-shadow(-20px 20px 2px var(--corner-color));
      }
      .aurora-btn-container:has(.aurora-btn:hover) .aurora-btn-corner:nth-of-type(2),
      .aurora-btn-container:has(.aurora-btn:focus-visible) .aurora-btn-corner:nth-of-type(2) {
        transform: translate(calc(var(--corner-multiplier)*var(--corner-dist)), calc(-1*var(--corner-multiplier)*var(--corner-dist))) rotate(180deg);
        filter: drop-shadow(-10px 10px 1px var(--corner-color)) drop-shadow(-20px 20px 2px var(--corner-color));
      }
      .aurora-btn-container:has(.aurora-btn:hover) .aurora-btn-corner:nth-of-type(3),
      .aurora-btn-container:has(.aurora-btn:focus-visible) .aurora-btn-corner:nth-of-type(3) {
        transform: translate(calc(var(--corner-multiplier)*var(--corner-dist)), calc(var(--corner-multiplier)*var(--corner-dist))) rotate(-90deg);
        filter: drop-shadow(-10px 10px 1px var(--corner-color)) drop-shadow(-20px 20px 2px var(--corner-color));
      }
      .aurora-btn-container:has(.aurora-btn:hover) .aurora-btn-corner:nth-of-type(4),
      .aurora-btn-container:has(.aurora-btn:focus-visible) .aurora-btn-corner:nth-of-type(4) {
        transform: translate(calc(-1*var(--corner-multiplier)*var(--corner-dist)), calc(var(--corner-multiplier)*var(--corner-dist))) rotate(0deg);
        filter: drop-shadow(-10px 10px 1px var(--corner-color)) drop-shadow(-20px 20px 2px var(--corner-color));
      }
      .aurora-btn-container:has(.aurora-btn:active) .aurora-btn {
        transform: scale(0.95);
        filter: drop-shadow(0 10px 4px #0002);
      }
      .aurora-btn-container:has(.aurora-btn:active) .aurora-transition-top,
      .aurora-btn-container:has(.aurora-btn:active) .aurora-transition-bottom {
        transform: translateY(0px) scale(0.5);
      }
      .aurora-btn-container:has(.aurora-btn:active) .aurora-btn-text {
        filter: drop-shadow(0 1px 0 #fff6) drop-shadow(0 -1px 0 #0006) drop-shadow(0 6px 2px #0003);
        transform: scale(1);
        color: #000a;
      }
      .aurora-btn-container:has(.aurora-btn:active) {
        --corner-color: #0005;
        --corner-multiplier: 0.95;
      }
      @keyframes aurora-hue {
        0%, 100% { filter: hue-rotate(0deg); }
        50% { filter: hue-rotate(-70deg); }
      }
    `;
    if (!document.getElementById("aurora-btn-styles")) {
      style.id = "aurora-btn-styles";
      document.head.appendChild(style);
    }
    return () => document.getElementById("aurora-btn-styles")?.remove();
  }, []);

  const Corner = () => (
    <svg
      className="aurora-btn-corner"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-1 1 32 32"
    >
      <path d={cornerPath} />
    </svg>
  );

  return (
    <div className="aurora-btn-container">
      <div className="aurora-btn-drawer aurora-transition-top">{topLabel}</div>
      <div className="aurora-btn-drawer aurora-transition-bottom">
        {bottomLabel}
      </div>
      <button className="aurora-btn">
        <span className="aurora-btn-text">{text}</span>
      </button>
      <Corner />
      <Corner />
      <Corner />
      <Corner />
    </div>
  );
}
