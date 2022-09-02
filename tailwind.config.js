module.exports = {
  // darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}