var home = customElements.define('contributers-page', class ContributersPage extends HTMLElement {
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
  
  export { contributors as default };