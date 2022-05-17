export default customElements.define('platform-guide', class PlatformGuide extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
  }

  get template() {
    return `
    *{
      pointer-events: auto;
    }
<style>
  :host {
    flex-direction: column;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;

    pointer-events: auto !important;
    overflow-y: auto;
  }
  container-element {
    margin-bottom: 24px;
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
    margin-top; 200px;
  }
</style>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<article>
  <h4>Getting a mining card</h4>
  <p>
    Using mining platform requires you to have a mining card wich are available on the
    exchange.
    There is also an exchange on the mining platform. Celect a preferable mining card and press buy.
  </p>
  <p>
    A pop up metamask window should appear. Press confirm, the card you bought is now yours. If it didnt happen, make sure the transaction was successful.
  </p>
  </article>

<article>
  <h4>Miner ROI</h4>

  <p>
    Roi means return on investment. So if you have bought a miner for 7000 and its ROI is 1 year it means you mine 7000 back in 1 years . Heres miners ROI. At current artonline price Genesis miner has the fastest ROI.
  </p>
  <flex-column>
    <flex-row>
      <h4>Miner</h4>
      <flex-one></flex-one>
      <h4>Price</h4>
      <flex-one></flex-one>
      <h4>Yearly</h4>
      <flex-one></flex-one>
      <h4>ROI</h4>
    </flex-row>
    <flex-row>
      <h4>ARTX1000</h4>
      <flex-one></flex-one>
      <h4>9600 ART</h4>
      <flex-one></flex-one>
      <h4>9600 ART</h4>
      <flex-one></flex-one>
      <h4>1 year</h4> 
    </flex-row>

    <flex-row>
      <h4>ARTX2000</h4>
      <flex-one></flex-one>
      <h4>50500 ART</h4>
      <flex-one></flex-one>
      <h4>37661 ART</h4>
      <flex-one></flex-one>
      <h4>1.3 years</h4> 
    </flex-row>

    <flex-row>
      <h4>Genesis</h4>
      <flex-one></flex-one>
      <h4>153000 ART</h4>
      <flex-one></flex-one>
      <h4>229572 ART</h4>
      <flex-one></flex-one>
      <h4>0.67 year</h4> 
    </flex-row>

    <flex-row>
      <h4>Module</h4>
      <flex-one></flex-one>
      <h4>2300 ART</h4>
      <flex-one></flex-one>
      <h4>2300 ART</h4>
      <flex-one></flex-one>
      <h4>1 year</h4> 
    </flex-row>

    <flex-row>
      <h4>Xtreme</h4>
      <flex-one></flex-one>
      <h4>110000 ART</h4>
      <flex-one></flex-one>
      <h4>145556 ART</h4>
      <flex-one></flex-one>
      <h4>0.76 year</h4> 
    </flex-row>
  </flex-column>
  
</article>

<article>
<h4>Listing mining card from wallet</h4>
<p>Go to
mining platform
and go to wallet. Select a pool of mining Card you want to list on exchange.
 Select the mining card you want to list.
  Press on the triangle next to your mining card id. Enter
<h5>0x535e67270f4feb15bffbfe86fee308b81799a7a5</h5>
in "currency to recieve" field if you would like to recieve artonline.
 Enter 0x0 if you would like to recieve BNB.
  Enter the price of your miner (it can be any price) in "price" field.
   Press "list" button and approve the transaction.
 Your miner will get listed on exchange within 10 minutes.</p>
 </article>
    `
  }
})
