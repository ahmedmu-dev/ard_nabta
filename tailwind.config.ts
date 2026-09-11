import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        paper: "#FFFFFF",
        muted: "#5C5C5C",
        accent: {
          DEFAULT: "#FF6A00",
          dark: "#E55E00",
        },
        // Legacy aliases so any leftover classnames don't explode mid-migration
        primary: {
          DEFAULT: "#0A0A0A",
          muted: "#5C5C5C",
        },
        background: "#FFFFFF",
        surface: "#FFFFFF",
        body: "#5C5C5C",
        heading: "#0A0A0A",
        rule: "#0A0A0A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        heading: ["var(--font-display)", "sans-serif"],
      },
      maxWidth: {
        site: "1400px",
        "7xl": "1400px",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};

export default config;
