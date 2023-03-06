var defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['../../packages/ui/components/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  plugins: [require('prettier-plugin-tailwindcss')],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['IBM Plex Sans', defaultTheme.fontFamily.sans[0]]
      }
    }
  }
};
