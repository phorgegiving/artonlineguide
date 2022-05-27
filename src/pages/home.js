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
    background-color: var(--main-background-color);
  }
    .content {
      color: #ffffff;
      background-color: var(--main-background-color);
  }
    </style>

    <div class="content">
    <h2>Feel confused?</h2>
        <div class="cards">
            <a href="#!/guide">
                <div class="card-block grad guide"><p>Guide</p></div></a>

            <a href="#!/links">
                <div class="card-block grad links"><p>Links</p></div></a>

            <a href="#!/info">
                <div class="card-block grad info"><p>Info</p></div></a>


                <div class="card-block hidact"></div>
        </div>
    </div>
    `

  }
});

export { home as default };
