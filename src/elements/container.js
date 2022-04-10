export default customElements.define('container-element', class ContainerElement extends HTMLElement {
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
        flex-direction: column;
        max-width: 640px;
        width: 100%;
        background: var(--secondary-background-color);
        padding: 48px;
        box-sizing: border-box;
      }
    </style>
    <slot></slot>
    `
  }
})
