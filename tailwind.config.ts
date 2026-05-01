import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "SF Pro Display",
          "SF Pro Text",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        clinic: {
          50: "#f3f8ff",
          100: "#e5efff",
          200: "#c7dcff",
          300: "#9ec2ff",
          400: "#6ea1ff",
          500: "#3b7dff",
          600: "#1f5ce0",
          700: "#1747b0",
          800: "#10316f",
          900: "#0a1f47",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glass:
          "0 10px 40px -10px rgba(31, 92, 224, 0.25), 0 4px 16px -4px rgba(10, 31, 71, 0.12), inset 0 1px 0 0 rgba(255,255,255,0.6)",
        "glass-lg":
          "0 30px 80px -20px rgba(31, 92, 224, 0.35), 0 12px 32px -8px rgba(10, 31, 71, 0.18), inset 0 1px 0 0 rgba(255,255,255,0.7)",
      },
      backgroundImage: {
        "mesh-clinic":
          "radial-gradient(at 20% 10%, rgba(110,161,255,0.45) 0, transparent 50%), radial-gradient(at 80% 0%, rgba(199,220,255,0.55) 0, transparent 45%), radial-gradient(at 80% 80%, rgba(59,125,255,0.25) 0, transparent 55%), radial-gradient(at 10% 80%, rgba(243,248,255,0.9) 0, transparent 50%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-14px) translateX(6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
