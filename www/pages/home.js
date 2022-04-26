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
        margin: 0.5% 0% 0% 0.5%;
        display: inline-block;
        min-width: 23vh;
        height: 23vh;
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
    .content {  
      color: #ffffff; 
      background-color: var(--main-background-color);
  }
    </style>

    <div class="content">
    <h2>Feel confused?</h2>
        <p>We can help!</p>
        <div class="cards">
            <a href="" target="_blank">
                <div class="card-block">Guide</div></a>
            
            <a href="" target="_blank">
                <div class="card-block">Links</div></a>

            <a href="" target="_blank">
                <div class="card-block">Info</div></a>
        </div>
    </div>
    `

  }
});

export { home as default };
