var home = customElements.define('home-page', class HomePage extends HTMLElement {
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
        pointer-events: auto !important;
        overflow-y: auto;
      }
      .card-block {
        margin: 5% 0% 0% 5%;
        display: inline-block;
        width: 30vh;
        height: 30vh;
        float: left;
        background: var(--secondary-background-color);
        border-radius: 20px;
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
                <div class="card-block"><p>Guide</p></div></a>
            
            <a href="#!/links">
                <div class="card-block"><p>Links</p></div></a>

            <a href="#!/info">
                <div class="card-block"><p>Info</p></div></a>

               
                <div class="card-block  hidact"></div
        </div>
    </div>
    `

  }
});

export { home as default };
