import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        pink: {
          50: "#FFF1F8",
          100: "#FFE1F0",
          200: "#FFC1E1",
          300: "#FF8FC9",
          400: "#F958AA",
          500: "#EC1E88",
          600: "#D10E73",
          700: "#AA0A5C",
          800: "#800846",
          900: "#5C0633",
        },
        sun: {
          50: "#FFFBEB",
          100: "#FFF3C4",
          200: "#FFE68A",
          300: "#FFD658",
          400: "#FFC627",
          500: "#F5AE0A",
          600: "#CC8B06",
          700: "#996807",
          800: "#734F0C",
          900: "#5C3F0E",
        },
        ink: {
          50: "#F7F6F8",
          100: "#EDEBEF",
          400: "#8B8494",
          600: "#544D5C",
          800: "#2D2733",
          900: "#1C1720",
        },
        cream: "#FFFDFB",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 20px 60px -15px rgba(236, 30, 136, 0.18)",
        card: "0 10px 30px -10px rgba(28, 23, 32, 0.10)",
        "card-hover": "0 24px 48px -12px rgba(236, 30, 136, 0.22)",
      },
      backgroundImage: {
        "blob-gradient": "radial-gradient(circle at 30% 20%, rgba(255,198,39,0.25), transparent 60%), radial-gradient(circle at 80% 80%, rgba(236,30,136,0.16), transparent 55%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(3deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%" },
          "50%": { borderRadius: "62% 38% 40% 60% / 55% 62% 38% 45%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
