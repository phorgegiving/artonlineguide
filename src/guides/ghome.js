
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
    flex-direction: column;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    overflow-y: auto;
    pointer-events: auto !important;
  }

    a {
      pointer-events: auto;
      color: coral;
      text-decoration: none;
    }

    .mplatform{
      line-height: 10px;
      heigh: 100vh;
      width: 100vh;
      font-size: 140%;
      text-align: center;
    }
    h3{
      margin-bottom: 80%;
      color: var(--wave-color);
    }
    h4{
      font-size: 140%;
    }
  </style>

  <div class="mplatform">
  <h1>Lets get started</h1>
  <h3>Virtual mining is waiting for you!<h3>
  </div>
  <div class="first">
  <h4>What do you need?</h4> 
  <p>you need artonline and metamask wallet blah blah иди нахуй короче</p>
  </div>

  <div class="second">
  <h4>How to get artonline?</h4> 
  <p>блалалалаллал</p>
  </div>

      `
    }
  });
