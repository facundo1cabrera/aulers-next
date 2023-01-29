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
          popup: {
            '0%': { transform: 'scale(0.0)'},
            '10%': { transform: 'scale(0.1)'},
            '20%': { transform: 'scale(0.2)'},
            '30%': { transform: 'scale(0.3)'},
            '40%': { transform: 'scale(0.4)'},
            '50%': { transform: 'scale(0.5)'},
            '60%': { transform: 'scale(0.6)'},
            '70%': { transform: 'scale(0.7)'},
            '80%': { transform: 'scale(0.8)'},
            '90%': { transform: 'scale(0.9)'},
            '100%': { transform: 'scale(1.0)'},
          }
        },
        animation: {
          'modal-popup': 'popup 0.07s linear ',
        },
      }
    },
    plugins: [],
  }