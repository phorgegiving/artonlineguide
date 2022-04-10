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
      }

      .footer-right {
        width: 230px;
      }

      a {
        text-decoration: none;
      }
    </style>
    <flex-row>
      <flex-row>

        <p>Phorgegiving &copy; 2022. All rights reserved.</p>
        <p style="padding-left: 8px;">beta 1.2.2 this website may have some known bugs.</p>
      </flex-row>

      <flex-one></flex-one>

      <flex-row class="footer-right">

        <a href="#"><i class="fa "><img src="img/telegram.png" class="telegram"></i></a>
        <a href="https://discord.gg/ntAXPmEW2S"><i class="fa "></i>
        <img src="img/discord.png" class="telegram"></a>
      </flex-row>
    </flex-row>
    <flex-row>
      made with love <a style="padding-left: 6px;" href="#!/contributers">by</a>
    </flex-row>
    `
  }
})
