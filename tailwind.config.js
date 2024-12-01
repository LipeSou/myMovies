/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      boxShadow: {
        'custom-multi': `
          rgba(0, 0, 0, 0.24) 0px 2px 1px, rgba(0, 0, 0, 0.24) 0px -2px 1px, rgba(0, 0, 0, 0.24) -2px 0px 1px, rgba(0, 0, 0, 0.24) 2px 0px 1px,
          rgba(0, 0, 0, 0.24) 0px 4px 2px, rgba(0, 0, 0, 0.24) 0px -4px 2px, rgba(0, 0, 0, 0.24) -4px 0px 2px, rgba(0, 0, 0, 0.24) 4px 0px 2px,
          rgba(0, 0, 0, 0.24) 0px 8px 4px, rgba(0, 0, 0, 0.24) 0px -8px 4px, rgba(0, 0, 0, 0.24) -8px 0px 4px, rgba(0, 0, 0, 0.24) 8px 0px 4px,
          rgba(0, 0, 0, 0.24) 0px 16px 8px, rgba(0, 0, 0, 0.24) 0px -16px 8px, rgba(0, 0, 0, 0.24) -16px 0px 8px, rgba(0, 0, 0, 0.24) 16px 0px 8px,
          rgba(0, 0, 0, 0.24) 0px 32px 16px, rgba(0, 0, 0, 0.24) 0px -32px 16px, rgba(0, 0, 0, 0.24) -32px 0px 16px, rgba(0, 0, 0, 0.24) 32px 0px 16px
        `,
      },
    },
  },
  plugins: [],
}

