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
        spacing: {
          'image': '448px',
        },
        keyframes: {
          slide: {
            '25%': { transform: 'translateX(50px)'},
            '50%': { transform: 'translateX(50px)'},
            '75%': { transform: 'translateX(50px)'},
            '100%': { transform: 'translateX(50px)'}
          }
        },
        animation: {
          'slider': 'slide 2s linear'
        }
      }
    },
    plugins: [],
  }