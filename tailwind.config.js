module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page': 'url(\'image/louis-hansel-landing-page.jpg\')',
        'landing-page-gradient-background': 'linear-gradient(to bottom, rgba(0,0,0,20.83%), rgba(86,190,161,30%)), url(\'image/louis-hansel-landing-page.jpg\')',
        'about-gradient-background': 'linear-gradient(to bottom, rgb(10,194,160), rgb(6,16,67))',
        'pricingPlan-gradient-background': 'linear-gradient(to bottom, rgb(81, 117, 85),rgb(56, 91, 80))',
        'about-preparation': 'url(\'image/Vector.svg\')',
        'about-schedule': 'url(\'image/Vector2.svg\')',
        'about-results': 'url(\'image/Vector3.svg\')',
      },
      colors: {
        myLime: {
          100: '#45F76F',
          200: '#0CEF41',
        },
        myTeal: {
          100: '#13DEA1',
          200: '#0AC2A0',
          300: '#56BEA1',
          400: '#497267',
          500: '#20604A',
          600: '#2D6142',
          700: '#273F1E',
        },
        myOrange: {
          100: '#FFF9E4',
          200: '#F86A38',
          300: '#F75921',
          400: '#8B4614',
          500: '#706B54',
        },
        myBlue: {
          100: '#133339',
          200: '#0B1B46',
          300: '#061043',
        },
        myNeutral: {
          100: '#FFFCF7',
          200: '#FFFDF3',
          300: '#FFFEFA',
          400: '#FAFAFA',
          500: '#F6F6F6',
        },
      },
      borderRadius: {
        52: "52px",
      },
      spacing: {
        104: '36rem',
        120: '40rem',
      },
      boxShadow: {
        'inner-xl': 'inset 0 4px 20px 0 rgba(20,20,20,0.25),  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) ',
        'xl-myGreen': '0 2px 12px 0px #13DEBA',
        'xl-myOrange': '0 2px 12px 0px rgba(169,11,11,0.50)'
      },
      width: {
        '60%': '60%'
      }
    },
  },
  plugins: [],
}
