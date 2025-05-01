module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], // Tailwind content scanning

  theme: {
    extend: {
      colors: {
        "electric-blue": "#1B9AAA",
        "deep-ocean": "#0A2342",
        coral: "#FF6B6B",
        teal: "#2D7D7D",
        cloud: "#F5F5F5",
        "warm-gray": "#5A5A5A",
        sand: "#EAE7DC", // Warm neutral
        coral: "#FF5E5B", // Updated coral accent
        seafoam: "#88D8C0", // Fresh accent
        gold: "#FFD700", // For highlights
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
