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
  
      align-items: center;
      justify-content: center;
    }
  
    a {
      pointer-events: auto;
      color: coral;
      text-decoration: none;
    }
    article {
      margin: 5em auto 0;
      padding: 1em;
      font-size: 140%;
      max-width: 800px;
      background: var(--secondary-background-color);
      color: #eee;
      box-shadow: rgba(0,0,0,.05) 0 3px 15px;
      border-radius: 20px;
      min-width: 400px;
    }
  </style>
  
  
  <article>
  <h4>Coming soon...</h4>
  </article>
  
      `
    }
  });
  
  export { lottery as default };
  