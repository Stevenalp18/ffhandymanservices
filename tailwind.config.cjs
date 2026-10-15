/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        plaster: '#F5F6F4',
        mist: '#E4EAEC',
        line: '#D3DADC',
        ink: '#1D2A30',
        slate: '#4A6270',
        tape: '#3D8BDB',
        'tape-ink': '#1E61AB',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '72rem' },
    },
  },
  plugins: [],
}
