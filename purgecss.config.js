module.exports = {
  content: ['./src/**/*.svelte'],
  css: ['src/styles/*.css'],
  // whitelist: ['all-fill-current'],
  // whitelistPatterns: [/^logged-in/],
  keyframes: true,
  fontFace: true,
  extractors: [
    {
      extractor: function(content) {
        // eslint-disable-next-line no-useless-escape
        return content.match(/[A-Za-z0-9-_&:@<>\/]+/g) || []
      },
      extensions: ['svelte', 'html', 'js'],
    },
  ],
}
