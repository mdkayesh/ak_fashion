/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // Tremor module
  ],

  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        footer_color: "var(--footer-color)",
        heading_color: "var(--heading-color)",
        text_color: "var(--text-color)",
        subHeading_color: "var(--subHeading-color)",

        // primary buttons
        primary_btn_bg: "var(--primary-btn-bg)",
        primary_btn_bg_hover: "var(--primary-btn-bg-hover)",
        primary_btn_text: "var(--primary-btn-text)",
        primary_btn_text_hover: "var(--primary-btn-text-hover)",

        // secondary buttons
        secondary_btn_bg: "var(--secondary-btn-bg)",
        secondary_btn_bg_hover: "var(--secondary-btn-bg-hover)",
        secondary_btn_text: "var(--secondary-btn-text)",
        secondary_btn_text_hover: "var(--secondary-btn-text-hover)",
      },

      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
