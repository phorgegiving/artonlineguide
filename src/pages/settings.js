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
  
      coming soon <br> 
      (В моих глазах горит квазар <br> 
        Иду вперед, ни шагу назад <br> 
        Кидаю step, бегу на старт...)
      `
  
    }
  });
  
  export { settings as default };