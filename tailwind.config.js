module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
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
          'principal': '#DD2D4A',
          'secondary': '#E76F51',
          'secondary-h': '#F4552D'
        },
        spacing: {
          'line': '2px',
          'small-line': '1px',
          'selected-item': '450px'
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
        padding: {
          'login-container-large': '15%',
          'login-container-medium': '17%'
        },
      }
    },
    plugins: [],
  }