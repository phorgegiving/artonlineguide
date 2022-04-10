var info = customElements.define('info-page', class InfoPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `
    <style>
      :host {
        display: flex;
        flex-direction: column;
      }
    </style>
    <h3>coming soon...</h3>
    `

  }
});

export { info as default };
