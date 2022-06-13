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
      text-decoration: none;
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
        margin: 0% 0% 8px 0%;
        display: inline-block;
        width: 20vh;
        height: 20vh;
        float: left;
        border-radius: 48px;
          box-sizing: border-box;
          pointer-events: auto;
        transition: all 0.2s ease-out;
        text-align: center;
         background: var(--secondary-background-color);
         margin-left: 25px;
         margin-right: 25px;
    }
    .card-block:hover{
      background: var(--secondary-background-color-hover);
      transition: all 0.2s ease-out;
      font-size: large;
    }
    p{
        text-transform: uppercase;
        font-size: 1.3em;
        color: white;
        text-align: center;
        margin: 15px;
    }
    img {
      -webkit-filter: invert(1);
      filter: invert(1);
      margin-top: 20%;
      opacity; 0.5;
      }
    h2{
      text-transform: uppercase;
      color: white;
      text-align: center;
      margin-bottom: 30px
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
    margin-top: 12.5%;
  }
    </style>
  
    <div class="content">
    <h2>Feel confused?</h2>
        <div class="cards">
            <a href="#!/guide"> 
                <div class="card-block">
                <img src="https://i.ibb.co/CV710SL/guide-icon.png" ; width="60%";  alt="" onClick="chgfootcol">
                </div><p>Guide</p></a>

            <a href="#!/links">
                <div class="card-block">
                <img src="https://www.shareicon.net/data/2016/01/15/703460_secure_512x512.png"; width="60%";  alt="">
                </div><p>Links</p></a>

            <a href="#!/info">
                <div class="card-block">
                <img src="https://cdn.pixabay.com/photo/2012/04/24/23/56/information-41225_1280.png"; width="60%";  alt="">
                </div><p>Info</p></a>
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