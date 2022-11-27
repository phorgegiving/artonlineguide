import {article, floatyRight, footer, footerstyle} from './../shared-styles/shared'
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
    max-width: 100%;
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
    max-width: 100%;
      line-height: 10px;
      heigh: 100vh;
      width: 100vh;
      font-size: 140%;
      text-align: center;
    }
    h3{

      color: var(--wave-color);
    }
    h4{
      font-size: 140%;
    }
    img{
      width: 80%;
      margin-top: 24vh;
      margin-left: 40%;
    }
    .wavecol{
      background: var(--wave-color);
      width: 100%;
      margin-top: -4vh;
    }
    ${floatyRight}
    ${article}
    ${footerstyle}
  </style>



  <div class ="floatyRight">
  <p> next step ➜</p>
  </div>

  <div class="mplatform">
  <h1>Lets get started</h1>
  <h3>Virtual mining is waiting for you!<h3>
  <img src="https://assets.artonline.site/gpus.webp">
  <svg viewBox="0 0 1440 179" preserveAspectRatio="xMidYMid meet" style="pointer-events: none; display: block; width: 205%; height: 100%; margin-top: -25vh; margin-left: -345px;"><g><path d="M187.5 8.7034C-33.7 -24.0966 -50.6666 83.0367 -31.5 140.703L-53 248.703L1464.5 309.703L1636 140.703C1577.33 112.87 1431.1 47.5034 1315.5 8.7034C1171 -39.7966 1069 128.703 838 162.203C607 195.703 464 49.7034 187.5 8.7034Z" fill="var(--wave-color)"></path></g></svg>
  </div>
  <div class="wavecol">

  
  
  <article class="first">
  <h4>What do you need?</h4> 
  <p>you need artonline and metamask wallet blah blah иди нахуй короче делай что хочешь, я забываюсь это нон стоп, не прекращаясь</p>
  </article>

  <article class="second">
  <h4>How to get artonline?</h4> 
  <p>похуй потом допишу окей боб мне нужно чем то это все заполнить музыка громче глаза закрыты ок</p>
  </article>

  <article class="third">
  <h4>Penis</h4>
  <p>this will motivate me to continue working on this code so i could delete the penis </p>
  </article>
  </div>
${footer}
      `
    }
  });
