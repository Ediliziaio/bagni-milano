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
        ink: { DEFAULT: "hsl(var(--ink))", soft: "hsl(var(--ink-soft))", muted: "hsl(var(--ink-muted))" },
        alabaster: "hsl(var(--alabaster))",
        travertine: "hsl(var(--travertine))",
        brass: { DEFAULT: "hsl(var(--brass))", dark: "hsl(var(--brass-dark))", deep: "hsl(var(--brass-deep))", light: "hsl(var(--brass-light))" },
        line: "hsl(var(--line))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      borderRadius: { xl: "0.75rem", "2xl": "1rem" },
      maxWidth: { prose: "68ch" },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-up": { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.22s ease-out",
        "accordion-up": "accordion-up 0.22s ease-out",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
