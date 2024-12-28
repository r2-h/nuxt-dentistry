/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        generalSans: ["General Sans"],
        poppins: ["Poppins"],
      },
      colors: {
        blue: {
          mid: "#1376f8",
          dark: "#011632",
          sky: "#25b4f8",
          light: "#e6f6fe",
        },
        green: {
          success: "#17BF28",
        },
        gray: {
          body: "#3c4959",
        },
        white: "#fff",
        success: "#17bf28",
        warnint: "#ec942c",
        error: "#e52323",
      },
      fontSize: {
        h1: [
          "3.875rem",
          {
            lineHeight: "1.2",
            letterSpacing: "-2%",
            fontWeight: "600",
          },
        ],
        h2: [
          "2.62rem",
          {
            lineHeight: "1.25",
            letterSpacing: "0",
            fontWeight: "600",
          },
        ],
        h3: [
          "2.25rem",
          {
            lineHeight: "1.25",
            letterSpacing: "0",
            fontWeight: "600",
          },
        ],
        h4: [
          "2.25rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0",
            fontWeight: "600",
          },
        ],

        b1: [
          "1.125rem",
          {
            lineHeight: "1.55",
            letterSpacing: "1.5%",
            fontWeight: "400",
          },
        ],

        b2: [
          "1rem",
          {
            lineHeight: "1.55",
            letterSpacing: "1.5%",
            fontWeight: "400",
          },
        ],

        b3: [
          "0.875rem",
          {
            lineHeight: "1.55",
            letterSpacing: "2%",
            fontWeight: "400",
          },
        ],

        b4: [
          "0.75rem",
          {
            lineHeight: "1.55",
            letterSpacing: "1.5%",
            fontWeight: "400",
          },
        ],
      },
      maxWidth: {
        max: "90rem",
      },
      boxShadow: {
        userMessageCard: "0 8px 40px 0 rgba(0, 0, 0, 10%)",
        firstScreenCircle: "0 4px 4px 0 rgba(0, 0, 0, 10%)",
      },
      animation: {
        "spin-slow": "spin 100s linear infinite",
        "spin-slow-reverse": "spin-reverse 100s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      borderRadius: {
        lg2: "0.625rem",
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        12.5: "3.125rem",
        94: "23.5rem",
      },

      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
      },
      screens: {
        xs: "26.75rem",
      },
    },
  },
  plugins: [],
}
