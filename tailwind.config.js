module.exports = {
content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            spacing: {
                'min-content': 'min-content',
                '100': '35rem'
              }
        },
    },
    plugins: [],
}
  