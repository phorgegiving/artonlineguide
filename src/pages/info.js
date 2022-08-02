export default customElements.define('info-page', class InfoPage extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
  }

  get template() {
    return `
    <style>
    * {
      pointer-events: auto;
    }
      :host {
        display: flex;
        height: 100%;
        width: 100%;

        align-items: center;
        justify-content: center;
      }

      article {
        margin: 5em auto 0;
        padding: 1em;
        font-size: 140%;
        max-width: 800px;
        min-width: 400px;
        background: var(--secondary-background-color);
        color: #eee;
        box-shadow: rgba(0,0,0,.05) 0 3px 15px;
        border-radius: 20px;
      }
    </style>


    <h1>coming soon</h1>
    `

  }
})
