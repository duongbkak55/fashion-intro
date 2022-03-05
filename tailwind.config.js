module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myred: {
          DEFAULT: `hsl(0, 93%, 68%)`,
          300: `hsl(0, 93%, 68%)`,
          700: `hsl(0, 36%, 70%)`,
        },
        DDarkred : `hsl(0, 6%, 24%)`,
        mygradient: `linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(248,191,191,1) 0%, rgba(238,140,140,1) 100%)`
      },
      fontFamily: {
        sans: ['"Josefin Sans"']
      }
    },
  },
  plugins: [],
}
