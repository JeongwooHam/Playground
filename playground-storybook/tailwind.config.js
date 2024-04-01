/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#0D9276",
      secondary: "#40A2E3",
      tertiary: "#BBE2EC",
      white: "#ffffff",
      mono100: "#f1f1f1",
      mono200: "#bebebe",
      error: "#d01e1e",
      social: "#FFF6E9",
    },
    borderRadius: {
      "button-default": "5px",
      "tag-button": "17.5px",
    },
    fontFamily: {
      body: ["Noto Sans KR"],
    },
    fontSize: {
      xs: [
        "12px",
        {
          lineHeight: "18px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "21px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      xl: ["20px", "30px"],
      "2xl": [
        "24px",
        {
          lineHeight: "36px",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
    },
  },
  plugins: [],
};
