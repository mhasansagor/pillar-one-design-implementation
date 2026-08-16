import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        panel: "rgba(255,255,255,0.10)",
        accent: {
          DEFAULT: "#FD853A",
          soft: "#FEB273",
        },
        cream: "#FFFFFF",
        muted: "#344054",
        line: "#D0D5DD",
        fog: "#E4E7EC",
        navy: "#1D2939",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
      },
    },
  },
  plugins: [],
};

export default config;
