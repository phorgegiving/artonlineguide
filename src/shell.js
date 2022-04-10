import './../node_modules/custom-pages/src/custom-pages.js'
import './../node_modules/custom-tabs/custom-tabs.js'
import './../node_modules/custom-tabs/custom-tab.js'
import './../node_modules/@vandeurenglenn/flex-elements/src/flex-elements.js'
import './elements/container.js'
import './elements/footer.js'
import './elements/header.js'

export default customElements.define('guide-shell', class GuideShell extends HTMLElement {

  get #pages() {
    return this.shadowRoot.querySelector('custom-pages')
  }
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
    this.onhashchange = this.onhashchange.bind(this)
    globalThis.onhashchange = this.onhashchange
    this.setTheme('dark')
    if (location.hash.length === 0) location.hash = '#!/home'
    this.onhashchange()
  }

  async onhashchange() {
    let parts = location.hash.split('#!/')
    parts = parts[1].split('?')
    const selected = parts[0]
    await this.#select(selected)
    if (parts[1]) {
      parts = parts[1].split('=')
      const params = {}
      params[parts[0]] = parts[1]
      if (params.selected) {
        this.shadowRoot.querySelector(`${selected}-page`).select(params.selected)
      }

    }
  }

  async #select(selected) {
    if (!customElements.get(`${selected}-page`)) await import(`./pages/${selected}.js`)
    this.#pages.select(selected)
  }

  async setTheme(theme) {
    const importee = await import(`./themes/${theme}.js`)
    for (const prop of Object.keys(importee.default)) {
      document.querySelector('body').style.setProperty(`--${prop}`, importee.default[prop])
    }
  }

  get template() {
    return `
    <style>
      * {
        pointer-events: none;
      }
      :host {
        display: flex;
        flex-direction: column;
        background: var(--main-background-color);
        color: var(--main-color);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        --custom-tab-color: var(--main-color);
      }

      custom-tab {
        pointer-events: auto;
      }
    </style>

    <header-element></header-element>

    <custom-pages attr-for-selected="data-route">
      <home-page data-route="home"></home-page>
      <guide-page data-route="guide"></guide-page>
      <info-page data-route="info"></info-page>
      <links-page data-route="links"></links-page>
    </custom-pages>
    <footer-element></footer-element>
    `
  }
})
