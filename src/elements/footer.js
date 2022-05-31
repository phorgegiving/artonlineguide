export default customElements.define('footer-element', class FooterElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
  }

  get template() {
    return `
    <style>
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        font-size: 14px;
        padding: 8px 16px;
        box-sizing: border-box;
        background: var(--wave-color);
      }

      .footer-right {
        width: 230px;
      }

      a {
        text-decoration: none;
        color: var(--accent-color);
      }
    </style>
    <flex-row>
      <flex-row>

        
        
      </flex-row>

      

    </flex-row>
    <flex-row>
    <p><a href="#!/contributers" style="padding-left: 6px;" >Artonline</a> &copy; 2022. All rights reserved.</p>
    <p style="padding-left: 8px;">beta 1.3.4 this website may have some known bugs.</p>
    <flex-one></flex-one>
      <contributers-page data-route="contributers"></contributers-page>
    </flex-row>
    `
  }
})
