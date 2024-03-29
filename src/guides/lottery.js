var lottery = customElements.define('lottery-guide', class LotteryGuide extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = this.template;
    }
  
    get template() {
      return `
  <style>
  *{
    pointer-events: auto;
  }
    :host {
      display: flex;
      height: 100%;
      width: 100%;
      pointer-events: auto;
      overflow-y: auto;
      align-items: center;
      justify-content: center;
    }
  
    a {
      pointer-events: auto;
      color: coral;
      text-decoration: none;
    }
  </style>
  
  
  <h1>coming soon</h1>
  
      `
    }
  });
  
  export { lottery as default };
  