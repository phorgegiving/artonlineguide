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
        z-index: 288;
        width: 100%;
        font-size: 16px;
        box-sizing: border-box;
        height: 5vh;
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
    <a href="#!/settings">settings</a>
    `
  }
})
