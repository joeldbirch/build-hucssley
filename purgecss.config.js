module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.svelte', './src/**/*.vue' ],
  css: ['src/styles/*.css'],
  // whitelist: [],
  // whitelistPatterns: [/^startswiththis/],
  extractors: [
    {
      extractor: function(content) {
        // eslint-disable-next-line no-useless-escape
        return content.match(/[A-Za-z0-9-_&:@<>\/]+/g) || []
      },
      extensions: ['html', 'js', 'svelte', 'vue'],
    },
  ],
}
