module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
      fontFamily: {
        "display": ['Roboto Slab']
      },
      fontSize: {
        sm: '16px',
        base: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '128px',
      },
      extend: {
        colors: {
          'dark-purple': '#271F5F',
          'purple': '#644FFF',
          'light-blue': '#57D7F7',
          'green': '#4AF799',
          'black': '#28272F',
        },
        backgroundImage: {
          'hero': "url('/img/background-hero.png')",
          'purple-hero': "url('/img/purple-hero.png')",
        },
      }
    },
    plugins: [],
  }