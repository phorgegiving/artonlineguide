import {scrollbar} from './../shared-styles/shared'


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
        overflow-y: auto;
      }
      .card-block {
        margin: 5% 0% 0% 5%;
        display: inline-block;
        width: 30vh;
        height: 30vh;
        float: left;
        border-radius: 20px;
        transition: all 0.2s ease-out;
        text-align: center;
    }
    .grad:hover{
      width: 30.25vh;
      height: 30.25vh;
      background: var(--secondary-background-color-hover);
      transition: all 0.2s ease-out;
      font-size: large;
    }
    .grad{
      background: var(--secondary-background-color);
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
  .hidact{
    opacity="0";
    width="5vh";
  }
    .content {
      color: #ffffff;
      background-color: var(--main-background-color);
        display: flex;
        height: 100%;
        width: 100%;

  }
  ${scrollbar}
    </style>

    <div class="content">
        <div>
        <h2>Feel confused?</h2>
            <a href="#!/guide">
                <div class="card-block grad"><p>Guide</p>
                <img src="https://i.ibb.co/CV710SL/guide-icon.png" ; width="60%";  alt="">
                </div></a>

            <a href="#!/links">
                <div class="card-block grad"><p>Links</p>
                <img src="https://www.shareicon.net/data/2016/01/15/703460_secure_512x512.png"; width="60%";  alt="">
                </div></a>

            <a href="#!/info">
                <div class="card-block grad"><p>Info</p>
                <img src="https://cdn.pixabay.com/photo/2012/04/24/23/56/information-41225_1280.png"; width="60%";  alt="">
                </div></a>
                <svg viewBox="0 0 1440 276" width= "151%"; max-width= "100%"; >
                <path fill= "var(--wave-color)" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,138.7C672,149,768,203,864,229.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
        </div>
    </div>
    `

  }
});

export { home as default };
