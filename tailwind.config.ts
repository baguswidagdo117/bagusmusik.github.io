import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b0d10",
          900: "#111418",
          850: "#161a20",
          800: "#1c222b",
          700: "#2a323e",
          600: "#3b4655",
        },
        brass: {
          50: "#fbf7ec",
          100: "#f5ecd2",
          200: "#ead6a2",
          300: "#ddba6c",
          400: "#d2a03f",
          500: "#c58a28",
          600: "#a96b1f",
          700: "#874e1d",
          800: "#703f1f",
          900: "#5f351e",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Iowan Old Style",
          "Palatino Linotype",
          "Palatino",
          "Georgia",
          "serif",
        ],
      },
      boxShadow: {
        soft: "0 20px 60px -25px rgba(0,0,0,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        shimmer: "shimmer 1.4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
