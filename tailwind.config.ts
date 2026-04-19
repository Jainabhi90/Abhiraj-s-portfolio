import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ECE9E2",
        foreground: "#202327",
        accent: "#5A616B",
        "accent-dark": "#464C54",
        glass: "rgba(246, 243, 237, 0.9)",
        "glass-border": "rgba(32, 35, 39, 0.14)",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        display: ["var(--font-display)"],
      },
      boxShadow: {
        glass: "0 10px 24px rgba(32, 35, 39, 0.08)",
        glow: "0 0 12px rgba(90, 97, 107, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
