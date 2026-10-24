tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#086288",
          dark: "#053b53",
          light: "#0d79a6",
        },
        secondary: {
          DEFAULT: "#4D8DBA",
          light: "#6fa9d2",
          dark: "#3a7096",
        },
        accent: {
          DEFAULT: "#97D7FF",
          light: "#c4e9ff",
          dark: "#68b9ea",
        },
        cream: {
          DEFAULT: "#FFEFC4",
          light: "#fff7df",
          dark: "#f2dda0",
        },
        ocean: {
          50: "#f0f7fb",
          100: "#e0f0f8",
          200: "#c2e2f2",
          300: "#97D7FF",
          400: "#6aaee0",
          500: "#4D8DBA",
          600: "#2a73a3",
          700: "#1b5a82",
          800: "#086288",
          900: "#063c54",
          950: "#03212f",
        },
      },
    },
  },
};
