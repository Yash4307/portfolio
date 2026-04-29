import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        acid: "#39FF14",
        cyan: "#00F5FF",
        surface: "#0a0e12",
        card: "#0f1419",
        border: "#1e2a36",
        dim: "#8B9BAA",
        text: "#e8edf2",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "sans-serif"],
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scroll: "scroll 20s linear infinite",
        "glitch-1": "glitch1 3s infinite linear",
        "glitch-2": "glitch2 3s infinite linear",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glitch1: {
          "0%, 100%": { clipPath: "inset(0 0 95% 0)", transform: "translate(-2px, 0)" },
          "20%": { clipPath: "inset(30% 0 50% 0)", transform: "translate(2px, 0)" },
          "40%": { clipPath: "inset(70% 0 10% 0)", transform: "translate(-1px, 0)" },
          "60%": { clipPath: "inset(10% 0 80% 0)", transform: "translate(1px, 0)" },
          "80%": { clipPath: "inset(50% 0 30% 0)", transform: "translate(-2px, 0)" },
        },
        glitch2: {
          "0%, 100%": { clipPath: "inset(80% 0 5% 0)", transform: "translate(2px, 0)" },
          "20%": { clipPath: "inset(10% 0 70% 0)", transform: "translate(-2px, 0)" },
          "40%": { clipPath: "inset(50% 0 20% 0)", transform: "translate(1px, 0)" },
          "60%": { clipPath: "inset(0% 0 90% 0)", transform: "translate(-1px, 0)" },
          "80%": { clipPath: "inset(20% 0 60% 0)", transform: "translate(2px, 0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
