import {article} from './../shared-styles/shared'
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
        color: var(--main-color);
        text-decoration: none;
      }
${article}
    </style>
    <article>
    <ul>
  <li><a href="https://app.artonline.site">Mining platform</a></li>
  <li><a href="https://exchange.artonline.site/#!/market">Exchange</a></li>
  <li><a href="https://artonline.site/">Website</a></li>
  <li><a href="https://stats.artonline.site/">Statistics</a></li>
  <br>
  <li><a href="https://github.com/phorgegiving/artonlineguide/issues">Found an issue?</a></li>
</ul>
    </article>
    `

  }
});