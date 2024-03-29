import {scrollbar} from './../shared-styles/shared'

export default customElements.define('guide-page', class GuidePage extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
    this.onselect = this.onselect.bind(this)
    this.onselect({detail: 'ghome'})
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
        overflow: hidden;
        height: 100%;
        font-family: 'Noto Sans', sans-serif;
      }

      custom-tab {
        pointer-events: auto;
      }

      flex-row {
        width: 100%;
        align-items: flex-end;
        justify-content: center;
      }

      ${scrollbar}
    </style>
    <flex-row>
      <custom-tabs attr-for-selected="data-route">
      <custom-tab data-route="ghome" class="ghome"><span>get started</span></custom-tab>
        <custom-tab data-route="platform"><span>platform</span></custom-tab>
        <custom-tab data-route="exchange"><span>exchange</span></custom-tab>
        <custom-tab data-route="lottery"><span>lottery</span></custom-tab>
        <custom-tab data-route="chain"><span>chain</span></custom-tab>
      </custom-tabs>
    </flex-row>

    <custom-pages attr-for-selected="data-route">
      <ghome-guide data-route="ghome"></ghome-guide>
      <platform-guide data-route="platform"></platform-guide>
      <exchange-guide data-route="exchange"></exchange-guide>
      <lottery-guide data-route="lottery"></lottery-guide>
      <chain-guide data-route="chain"></chain-guide>
    </custom-pages>
    `

  }
})
