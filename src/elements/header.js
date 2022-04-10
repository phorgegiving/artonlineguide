export default customElements.define('header-element', class HeaderElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
  }

  get template() {
    return `
    <style>
      :host {
        display: flex;
        flex-direction: row;
        width: 100%;
        font-size: 16px;
        padding: 8px 16px;
        box-sizing: border-box;
      }

      a {
        text-decoration: none;
        color: var(--main-color);
        text-transform: uppercase;
        padding: 6px 12px;
        pointer-events: auto;
      }
    </style>
    <flex-one></flex-one>
    <a href="#!/home">home</a>
    <a href="#!/guide">guide</a>
    <a href="#!/links">links</a>
    <a href="#!/info">info</a>
    `
  }
})
