import { execSync } from 'child_process'

try {
  execSync('rm -rf www/**/*.js')
} catch (e) {

}

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
  input: ['src/pages/guide.js', 'src/pages/home.js',
  'src/pages/contributers.js', 'src/pages/info.js', 'src/pages/links.js', 'src/pages/settings.js'],
  output: {
    dir: './www/pages',
    format: 'es'
  }
}, {
  input: ['src/guides/exchange.js', 'src/guides/platform.js', 'src/guides/lottery.js', 'src/guides/chain.js',
   'src/guides/ghome.js'],
  output: {
    dir: './www/guides',
    format: 'es'
  }
}]
