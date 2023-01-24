const edgeComponent = require('@jrmc/edge-components/build/tailwind.config').default

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./resources/views/**/*.edge', ...edgeComponent.content, './resources/js/**/*.js'],
  darkMode: 'class',
  // theme: {
  //   extend: {},
  // },
  theme: {
    themeVariants: ['dark'],
  },
  plugins: [...edgeComponent.plugins],
}
