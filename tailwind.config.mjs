/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f6f6f6",
        foreground: "var(--foreground)",
        primary: '#FF5722',
        hover: '#E64A19',
        backgroundLight: '#FFF3E0',
        primaryText: '#212121',
        secondaryText: '#757575',
        tintPrimary: '#FFF3E0',
        border: '#C0C0C0',
        review: '#FFB74D',
        error: '#e53935',
        done: '#388E3C',
        mainText: '#212121'
      },
    },
  },
  plugins: [],
};
