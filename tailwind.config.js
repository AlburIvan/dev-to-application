module.exports = {
  purge: ['./public/**/*.html'],
  theme: {
    extend: {
      width: {
        '50px': '3.125rem',
      },
      maxWidth: {
        'site-width': 'var(--site-width)',
      },
      minWidth: {
        'icon': '24px',
        'icon-md': '40px',
        'icon-lg': '56px',
        'icon-xl': '64px',
      },
      inset: {
        '14': '3.5rem',
        '18': '5.5rem',
      },
      colors: {
        'dev-gray': {
          '500': '#F9FAFA',
        },
        'dev-blue': {
          '500': '#3b49df',
          '700': '#323ebe',
        },
        'dev-background': 'var(--site-background)',
      },
      spacing: {
        14: '3.5rem',
      },
      gridTemplateColumns: {
        sidebar: '4rem 1fr',
        full: '4rem 7fr 3fr',
      },
    },
  },
  variants: {},
  plugins: [],
};
