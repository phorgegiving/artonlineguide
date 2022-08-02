export default customElements.define('ghome-guide', class GhomeGuide extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = this.template;
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

    a {
      pointer-events: auto;
      color: coral;
      text-decoration: none;
    }

    .mplatform{
      heigh: 100vh;
      font-size: 140%;
    }
    h1{
      margin-bottom: 90%;
    }
  </style>

  <div class="mplatform">
  <h1>Lets get started!</h1>
  </div>

      `
    }
  });
