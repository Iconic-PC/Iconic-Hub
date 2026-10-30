import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        void: "#050816",
        surface: {
          DEFAULT: "#0F172A",
          raised: "#141B2E",
        },
        signal: {
          DEFAULT: "#00BFFF",
          dim: "#0090C2",
          bright: "#5DD6FF",
        },
        circuit: {
          DEFAULT: "#22C55E",
          dim: "#16A34A",
          bright: "#4ADE80",
        },
        slate: {
          150: "#E7ECF3",
        },
        border: "rgba(148, 163, 184, 0.14)",
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at center, rgba(0,191,255,0.14), transparent 70%)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      boxShadow: {
        "glow-blue": "0 0 0 1px rgba(0,191,255,0.4), 0 0 40px -8px rgba(0,191,255,0.55)",
        "glow-green": "0 0 0 1px rgba(34,197,94,0.4), 0 0 40px -8px rgba(34,197,94,0.55)",
        "card-rest": "0 1px 0 rgba(148,163,184,0.06)",
      },
      keyframes: {
        "grid-pan": {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "56px 56px" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.12)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "grid-pan": "grid-pan 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3.2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
