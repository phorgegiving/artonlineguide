export default customElements.define('exchange-guide', class ExchangeGuide extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
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
    pointer-events: auto !important;
    overflow-y: auto;
    align-items: center;
    justify-content: center;
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
    background: var(--secondary-background-color);
    color: #eee;
    box-shadow: rgba(0,0,0,.05) 0 3px 15px;
    border-radius: 20px;
    transition: background-color 500ms;
  }

  ::-webkit-scrollbar {
    width: 12px;
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 50%);
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
    border-radius: 10px;
}
 
</style>


<article>
<h4>Buying a miner using the exchange</h4>
<p>
  Buying a GPU from exchange is simular to buying it from the mining app.
  Go to the market and select a preferable miner. Press "buy" button right under preferable miner and confirm the transaction. You should recieve the purchased miner within 5 minutes.
</p>
 
<h4>Listing from wallet</h4>

<ul>
  <li>Open the <a href="https://app.artonline.site">platform app</a></li>
  <li>Go to wallet</li>
  <li>Select the mining Card you want to list on exchange</li>
  <li>Press on the triangle next to your mining card id</li>
</ul>
<p>
Enter
0x535e67270f4feb15bffbfe86fee308b81799a7a5
in "currency to recieve" field if you would like to recieve artonline. Enter 0x0 if you would like to recieve BNB. Enter the price of your miner (it can be any price) in "price" field. Press "list" button and approve the transaction. Your miner will get listed on exchange within 10 minutes.
</p>
</article>

    `
  }
})
 