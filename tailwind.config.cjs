/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {
      fontFamily: {
        readable: ["Atkinson Hyperlegible", "sans-serif"],
      },
      screens: {
        "lpt-lg": "1025px",
        lpt: "769px",
        tbl: "426px",
        "mbl-lg": "376px",
        "mbl-md": "321px",
      },
      colors: {
        matty: {
          50: "#fafafa",
          100: "#ebebec",
          200: "#d7d7d8",
          300: "#a6acaf",
          400: "#70797f",
          500: "#5e696f",
          600: "#444f56",
          700: "#3d464c",
          800: "#2e3539",
          900: "#1e2326",
        },
        light: {
          'primary-container': '#c7e7ff',
          'on-primary-container': '#001e2e',
          secondary: '#4f616e',
          'on-secondary': '#ffffff',
          'secondary-container': '#d2e5f5',
          'on-secondary-container': '#0b1d29',
          tertiary: '#63597c',
          'on-tertiary': '#ffffff',
          'tertiary-container': '#e9ddff',
          'on-tertiary-container': '#1f1635',
          error: '#ba1a1a',
          'error-container': '#ffdad6',
          'on-error': '#ffffff',
          'on-error-container': '#410002',
          background: '#fcfcff',
          'on-background': '#191c1e',
          surface: '#fcfcff',
          'on-surface': '#191c1e',
          'surface-variant': '#dde3ea',
          'on-surface-variant': '#41484d',
          outline: '#71787e',
          'inverse-on-surface': '#f0f0f3',
          'inverse-surface': '#2e3133',
          'inverse-primary': '#86cfff',
          shadow: '#000000',
          'surface-tint': '#00658f',
          'outline-variant': '#c1c7ce',
          scrim: '#000000'
        },
        dark: {
          primary: '#86cfff',
          'on-primary': '#00344c',
          'primary-container': '#004c6d',
          'on-primary-container': '#c7e7ff',
          secondary: '#b6c9d8',
          'on-secondary': '#21323e',
          'secondary-container': '#384956',
          'on-secondary-container': '#d2e5f5',
          tertiary: '#cdc0e9',
          'on-tertiary': '#342b4b',
          'tertiary-container': '#4b4263',
          'on-tertiary-container': '#e9ddff',
          error: '#ffb4ab',
          'error-container': '#93000a',
          'on-error': '#690005',
          'on-error-container': '#ffdad6',
          background: '#191c1e',
          'on-background': '#e2e2e5',
          surface: '#191c1e',
          'on-surface': '#e2e2e5',
          'surface-variant': '#41484d',
          'on-surface-variant': '#c1c7ce',
          outline: '#8b9198',
          'inverse-on-surface': '#191c1e',
          'inverse-surface': '#e2e2e5',
          'inverse-primary': '#00658f',
          shadow: '#000000',
          'surface-tint': '#86cfff',
          'outline-variant': '#41484d',
          scrim: '#000000'
        },
        primary: {
          '10': '#001e2e',
          '20': '#00344c',
          '30': '#004c6d',
          '40': '#00658f',
          '50': '#007fb3',
          '60': '#3199d0',
          '70': '#54b4ed',
          '80': '#86cfff',
          '90': '#c7e7ff',
          '95': '#e5f2ff',
          '99': '#fbfcff',
          '100': '#ffffff'
        },
        secondary: {
          '0': '#000000',
          '10': '#0b1d29',
          '20': '#21323e',
          '30': '#384956',
          '40': '#4f616e',
          '50': '#687987',
          '60': '#8193a1',
          '70': '#9baebc',
          '80': '#b6c9d8',
          '90': '#d2e5f5',
          '95': '#e5f2ff',
          '99': '#fbfcff',
          '100': '#ffffff'
        },
        tertiary: {
          '0': '#000000',
          '10': '#1f1635',
          '20': '#342b4b',
          '30': '#4b4263',
          '40': '#63597c',
          '50': '#7c7296',
          '60': '#968bb1',
          '70': '#b1a5cc',
          '80': '#cdc0e9',
          '90': '#e9ddff',
          '95': '#f6eeff',
          '99': '#fffbff',
          '100': '#ffffff'
        },
        neutral: {
          '0': '#000000',
          '10': '#191c1e',
          '20': '#2e3133',
          '30': '#454749',
          '40': '#5c5e61',
          '50': '#75777a',
          '60': '#8f9193',
          '70': '#aaabae',
          '80': '#c5c6c9',
          '90': '#e2e2e5',
          '95': '#f0f0f3',
          '99': '#fcfcff',
          '100': '#ffffff'
        },
        'neutral-variant': {
          '0': '#000000',
          '10': '#161c21',
          '20': '#2b3136',
          '30': '#41484d',
          '40': '#595f65',
          '50': '#71787e',
          '60': '#8b9198',
          '70': '#a6acb2',
          '80': '#c1c7ce',
          '90': '#dde3ea',
          '95': '#ebf1f8',
          '99': '#fbfcff',
          '100': '#ffffff'
        },
        error: {
          '0': '#000000',
          '10': '#410002',
          '20': '#690005',
          '30': '#93000a',
          '40': '#ba1a1a',
          '50': '#de3730',
          '60': '#ff5449',
          '70': '#ff897d',
          '80': '#ffb4ab',
          '90': '#ffdad6',
          '95': '#ffedea',
          '99': '#fffbff',
          '100': '#ffffff'
        }
      },
      typography: ({ theme }) => ({
        matty: {
          css: {
            "--tw-prose-body": theme("colors.matty[700]"),
            "--tw-prose-headings": theme("colors.matty[900]"),
            "--tw-prose-lead": theme("colors.matty[700]"),
            "--tw-prose-links": theme("colors.matty[900]"),
            "--tw-prose-bold": theme("colors.matty[900]"),
            "--tw-prose-counters": theme("colors.matty[600]"),
            "--tw-prose-bullets": theme("colors.matty[400]"),
            "--tw-prose-hr": theme("colors.matty[300]"),
            "--tw-prose-quotes": theme("colors.matty[900]"),
            "--tw-prose-quote-borders": theme("colors.matty[300]"),
            "--tw-prose-captions": theme("colors.matty[700]"),
            "--tw-prose-code": theme("colors.matty[900]"),
            "--tw-prose-pre-code": theme("colors.matty[100]"),
            "--tw-prose-pre-bg": theme("colors.matty[900]"),
            "--tw-prose-th-borders": theme("colors.matty[300]"),
            "--tw-prose-td-borders": theme("colors.matty[200]"),
            "--tw-prose-invert-body": theme("colors.matty[300]"),
            "--tw-prose-invert-p": theme("colors.matty[200]"),
            "--tw-prose-invert-ul": theme("colors.matty[200]"),
            "--tw-prose-invert-li": theme("colors.matty[200]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.matty[300]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.matty[400]"),
            "--tw-prose-invert-bullets": theme("colors.matty[600]"),
            "--tw-prose-invert-hr": theme("colors.matty[700]"),
            "--tw-prose-invert-quotes": theme("colors.matty[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.matty[700]"),
            "--tw-prose-invert-captions": theme("colors.matty[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.matty[300]"),
            "--tw-prose-invert-pre-bg": theme("colors.matty[100]"),
            "--tw-prose-invert-th-borders": theme("colors.matty[600]"),
            "--tw-prose-invert-td-borders": theme("colors.matty[700]"),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
