/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'link-water': {
          '50': '#f2f8fd',
          '100': '#e4f0fa',
          '200': '#d2e8f6',
          '300': '#8bc7ff',
          '400': '#55a7ff',
          '500': '#2e92c9',
          '600': '#1f75aa',
          '700': '#1a5d8a',
          '800': '#173a96',
          '900': '#1a4360',
          '950': '#122b3f',
        },
        'light-text': '#f5f5f5'
      },
    },
  },
  plugins: [require('daisyui')],
}

