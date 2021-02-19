module.exports = {
  purge: ["./src/pages/**/*.ejs", "./src/views/**/*.ejs"],
  darkMode: "media", // or false or 'class'
  theme: {
    extend: {
      fontSize: {
        content: ["20px", "32px"],
        title: ["60px", "72px"],
        icon: ["25px", "32px"],
        bigTitle: ["54px", "72px"],
        titlemobile: ["40px", "52px"],
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
      colors: {
        balkanGreen: '#03AD4F'
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
