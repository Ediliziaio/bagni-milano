import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1280px" } },
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        accent: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "hsl(var(--ink))",
          2: "hsl(var(--ink-2))",
          3: "hsl(var(--ink-3))",
          soft: "hsl(var(--ink-soft))",
          muted: "hsl(var(--ink-muted))",
        },
        cream: { DEFAULT: "hsl(var(--cream))", hi: "hsl(var(--cream-hi))" },
        sand: "hsl(var(--sand))",
        gold: {
          DEFAULT: "hsl(var(--gold))",
          deep: "hsl(var(--gold-deep))",
          soft: "hsl(var(--gold-soft))",
        },
        line: { DEFAULT: "hsl(var(--line))", dark: "hsl(var(--line-dark))" },
        background: "hsl(var(--cream))",
        foreground: "hsl(var(--ink))",
      },
      maxWidth: { prose: "68ch" },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down .22s ease-out",
        "accordion-up": "accordion-up .22s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
