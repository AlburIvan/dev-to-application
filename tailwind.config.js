module.exports = {
  purge: ['./public/**/*.html'],
  theme: {
    extend: {
      width: {
        '50px': '3.125rem',
      },
      maxWidth: {
        '8xl': '80rem',
      },
      minWidth: {
        'icon': '24px',
        'icon-md': '40px',
      },
      colors: {
        'dev-blue': {
          '500': '#3b49df',
          '700': '#323ebe',
        },
      },
      spacing: {
        14: '3.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
