export default customElements.define('platform-guide', class PlatformGuide extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
  }

  get template() {
    return `
<style>
  :host {
    flex-direction: column;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  container-element {
    margin-bottom: 24px;
  }
</style>

<container-element>
  <h4>Getting a mining card</h4>
  <p>
    Using mining platform requires you to have a mining card wich are available on the
    exchange.
    There is also an exchange on the mining platform. Celect a preferable mining card and press buy.
  </p>
  <p>
    A pop up metamask window should appear. Press confirm, the card you bought is now yours. If it didnt happen, make sure the transaction was successful.
  </p>
</container-element>

<container-element>
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
  </flex-column>
</container-element>
    `
  }
})
