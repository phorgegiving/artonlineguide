export default customElements.define('links-page', class LinksPage extends HTMLElement {
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
      }
      a {
        pointer-events: auto;
        color: coral;
        text-decoration: none;
      }
      article {
        margin: 5em auto 0;
        padding: 1em;
        font-size: 140%;
        max-width: 800px;
        background: #222;
        color: #eee;
        box-shadow: rgba(0,0,0,.05) 0 3px 15px;
        border-radius: 20px;
        transition: background-color 500ms;
      }
    </style>
    <article>
    <ul>
  <li><a href="https://app.artonline.site">Mining platform</a></li>
  <li><a href="https://exchange.artonline.site/#!/market">Exchange</a></li>
  <li><a href="https://artonline.site/">Website</a></li>
  <br>
  <li><a href="https://github.com/phorgegiving/artonlineguide/issues">Found an issue?</a></li>
</ul>
    </article>
    `

  }
});