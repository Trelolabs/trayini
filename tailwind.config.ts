import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        slate: {
          950: "#020617",
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
          500: "#64748b",
          400: "#94a3b8",
          300: "#cbd5e1",
          50: "#f8fafc",
        },
        violet: {
          600: "#7c3aed",
          500: "#8b5cf6",
          400: "#a78bfa",
        },
      },
    },
  },
  plugins: [],
};
export default config;
