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
  input: ['src/guides/exchange.js', 'src/guides/platform.js',
  'src/guides/lottery.js', 'src/guides/chain.js'],
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
