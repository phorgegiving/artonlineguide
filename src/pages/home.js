var home = customElements.define('home-page', class HomePage extends HTMLElement {
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
        pointer-events: auto !important;
        overflow: hidden;
        font-family: 'Noto Sans', sans-serif;
        background-size: cover;
      }
      .card-block {
        margin: 5% 0% 0% 5%;
        display: inline-block;
        width: 30vh;
        height: 30vh;
        float: left;
        border-radius: 10% 30% 50% 30%;
          box-sizing: border-box;
          pointer-events: auto;
        transition: all 0.2s ease-out;
        text-align: center;
         background: var(--secondary-background-color);
         margin-left: 15px;
         margin-right: 15px;
    }
    .card-block:hover{
      background: var(--secondary-background-color-hover);
      transition: all 0.2s ease-out;
      font-size: large;
    }
    p{
        text-transform: uppercase;
        color: white;
        text-align: center;
    }
    h2{
      text-transform: uppercase;
      color: white;
      text-align: center;
  }
    .content {
      color: #ffffff;
      background-color: var(--main-background-color);
  }
  .cards{
    display: flex;
     justify-content: center;
  }
  .svg{
    margin-top: 7%;
  }
    </style>
  
    <div class="content">
    <h2>Feel confused?</h2>
        <div class="cards">
            <a href="#!/guide">
                <div class="card-block"><p>Guide</p>
                <img src="https://i.ibb.co/CV710SL/guide-icon.png" ; width="60%";  alt="">
                </div></a>

            <a href="#!/links">
                <div class="card-block"><p>Links</p>
                <img src="https://www.shareicon.net/data/2016/01/15/703460_secure_512x512.png"; width="60%";  alt="">
                </div></a>

            <a href="#!/info">
                <div class="card-block"><p>Info</p>
                <img src="https://cdn.pixabay.com/photo/2012/04/24/23/56/information-41225_1280.png"; width="60%";  alt="">
                </div></a>
                </div>
                <div class="svg"> 
                <svg height="179" width="1440">
        <path d="M187.5 8.7034C-33.7 -24.0966 -50.6666 83.0367 -31.5 140.703L-53 248.703L1464.5 309.703L1636 140.703C1577.33 112.87 1431.1 47.5034 1315.5 8.7034C1171 -39.7966 1069 128.703 838 162.203C607 195.703 464 49.7034 187.5 8.7034Z" fill="var(--wave-color)"></path>
      </svg>
      </div>
    </div>
    `

  }
});

export { home as default };