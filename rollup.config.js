export default [{
  input: ['src/shell.js'],
  output: {
    dir: './www',
    format: 'es'
  }
}, {
  input: ['src/themes/dark.js', 'src/themes/default.js'],
  output: {
    dir: './www/themes',
    format: 'es'
  }
}, {
  input: [
    'src/pages/home.js', 'src/pages/guide.js', 'src/pages/info.js',
    'src/pages/links.js'
  ],
  output: {
    dir: './www/pages',
    format: 'es'
  }
}, {
  input: ['src/guides/exchange.js', 'src/guides/platform.js'],
  output: {
    dir: './www/guides',
    format: 'es'
  }
}]
