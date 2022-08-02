var settings = customElements.define('settings-page', class SettingsPage extends HTMLElement {
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
     
    
      </style>
  
      <h1>coming soon</h1>
      (Играй с огнем, будь котом, <br>
        Дай мне лапку, пойдем, <br>
        Мы оттопыримся на странной вечеринке с бомжом, <br>
        На вечеринке с бомжом, <br>
        На вечеринке с бомжом, <br>
        Мы оттопыримся на странной вечеринке с бомжом...
)
      `
  
    }
  });
  
  export { settings as default };