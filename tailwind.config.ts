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
        background: "#F8F9FA",
        foreground: "#1A1A1A",
        accent: "#2563EB",
        "accent-dark": "#1E40AF",
        glass: "rgba(255, 255, 255, 0.7)",
        "glass-border": "rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)"],
      },
      boxShadow: {
        glass: "0 10px 30px rgba(0, 0, 0, 0.05)",
        glow: "0 0 20px rgba(37, 99, 235, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
