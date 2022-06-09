export default customElements.define('contributers-page', class ContributersPage extends HTMLElement {
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
    <p>Made with love by: Phorge, Iondependent, BHero...  
    
    `

  }
});
