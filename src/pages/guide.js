export default customElements.define('guide-page', class GuidePage extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
    this.onselect = this.onselect.bind(this)
    this.onselect({detail: 'platform'})
  }

  connectedCallback() {
    this.#tabs.addEventListener('selected', this.onselect)
  }

  get #pages() {
    return this.shadowRoot.querySelector('custom-pages')
  }

  get #tabs() {
    return this.shadowRoot.querySelector('custom-tabs')
  }

  onselect({detail}) {
    location.hash = `#!/guide?selected=${detail}`
  }

  async select(selected) {
    if (!await customElements.get(`${selected}-guide`)) await import(`./../guides/${selected}.js`)
    this.#tabs.select(selected)
    this.#pages.select(selected)
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
      }

      custom-tab {
        pointer-events: auto;
      }

      flex-row {
        width: 100%;
        align-items: flex-end;
        justify-content: center;
      }
    </style>
    <flex-row>
      <custom-tabs attr-for-selected="data-route">
        <custom-tab data-route="platform"><span>platform</span></custom-tab>
        <custom-tab data-route="exchange"><span>exchange</span></custom-tab>
      </custom-tabs>
    </flex-row>

    <custom-pages attr-for-selected="data-route">
      <platform-guide data-route="platform"></platform-guide>
      <exchange-guide data-route="exchange"></exchange-guide>
    </custom-pages>
    `

  }
})
