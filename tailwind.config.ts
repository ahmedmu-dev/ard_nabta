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
        // Option A — Steel Graphite + Safety Amber (plan section 6.1)
        primary: {
          DEFAULT: "#1C2229", // graphite
          muted: "#3A4552", // slate
        },
        accent: {
          DEFAULT: "#F2A71B", // safety amber
          dark: "#D68C0A", // hover/active (button backgrounds)
          // Darker amber for text/icons on light backgrounds — #D68C0A only
          // hits ~2.8:1 on white, which fails WCAG AA (4.5:1). This hits ~5.9:1.
          contrast: "#8A5A0A",
        },
        background: "#FFFFFF",
        surface: "#F5F6F7",
        body: "#3F454B",
        heading: "#1C2229",
      },
      fontFamily: {
        heading: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        "7xl": "1280px",
      },
      spacing: {
        18: "4.5rem",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [],
};

export default config;
