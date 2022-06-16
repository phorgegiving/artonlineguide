var home = customElements.define('home-page', class HomePage extends HTMLElement {
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
      text-decoration: none;
    }
      :host {
        display: flex;
        height: 100%;
        width: 100%;

        align-items: center;
        justify-content: center;
        pointer-events: auto !important;
        overflow: hidden;
        font-family: 'Noto Sans', sans-serif;
        background-size: cover;
      }
      .card-block {
        margin: 0% 0% 8px 0%;
        display: inline-block;
        width: 20vh;
        height: 20vh;
        float: left;
        border-radius: 48px;
          box-sizing: border-box;
          pointer-events: auto;
        transition: all 0.2s ease-out;
        text-align: center;
         background: var(--secondary-background-color);
         margin-left: 25px;
         margin-right: 25px;
    }
    .card-block:hover{
      background: var(--secondary-background-color-hover);
      transition: all 0.2s ease-out;
      font-size: large;
    }
    p{
        text-transform: uppercase;
        font-size: 1.3em;
        color: white;
        text-align: center;
        margin: 15px;
    }
    img {
      -webkit-filter: invert(1);
      filter: invert(1);
      margin-top: 20%;
      opacity; 0.5;
      }
    h2{
      color: white;
      text-align: center;
      font-size: 2em;
      margin-bottom: -15px;
      margin-top: 15px;
  }
  h3{
    text-align: center;
    margin-bottom: 30px;
  }
    .content {
      color: #ffffff;
      background-color: var(--main-background-color);
  }
  .cards{
    display: flex;
     justify-content: center;
     z-index: 2;
     position: relative;
  }
  .svg{
    margin-top: -15.5%;
    z-index: 1;
    position: relative;
  }
  span{
    color: var(--wave-color);
  }
    </style>
  
    <div class="content">
    <h2>Have a <span>question?</span></h2>
    <h3>try looking here...</h3>
        <div class="cards">
            <a href="#!/guide"> 
                <div class="card-block">
                <img src="https://i.ibb.co/CV710SL/guide-icon.png" ; width="60%";  alt="" onClick="chgfootcol">
                </div><p>Guide</p></a>

            <a href="#!/links">
                <div class="card-block">
                <img src="https://www.shareicon.net/data/2016/01/15/703460_secure_512x512.png"; width="60%";  alt="">
                </div><p>Links</p></a>

            <a href="#!/info">
                <div class="card-block">
                <img src="https://cdn.pixabay.com/photo/2012/04/24/23/56/information-41225_1280.png"; width="60%";  alt="">
                </div><p>Info</p></a>
                </div>
                <div class="svg"> 
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:rgba(0,0,0,0);display:block;z-index:1;position:relative" width="1518" height="600" preserveAspectRatio="xMidYMid" viewBox="0 0 1518 657">
<g transform="translate(759,328.5) scale(-1,-1) translate(-759,-328.5)"><linearGradient id="lg-0.5373593774668177" x1="0" x2="1" y1="0" y2="0">
  <stop stop-color="var(--wave-color)" offset="0"></stop>
</linearGradient><path d="" fill="url(#lg-0.5373593774668177)" opacity="1">
  <animate attributeName="d" dur="50s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" values="M0 0L 0 275.8776062860173Q 189.75 318.7415515240492  379.5 278.9499141751492T 759 215.99170444129874T 1138.5 317.4375454325949T 1518 227.2337751127726L 1518 0 Z;M0 0L 0 290.66251867207745Q 189.75 241.27146521110834  379.5 226.84445928876715T 759 222.20717106222457T 1138.5 324.52166060567555T 1518 325.10876073457655L 1518 0 Z;M0 0L 0 257.00949447528944Q 189.75 252.66482933398908  379.5 234.46256818436453T 759 253.35409997798905T 1138.5 214.58780201482324T 1518 236.15419573626977L 1518 0 Z;M0 0L 0 275.8776062860173Q 189.75 318.7415515240492  379.5 278.9499141751492T 759 215.99170444129874T 1138.5 317.4375454325949T 1518 227.2337751127726L 1518 0 Z"></animate>
</path></g>
</svg>
      </div>
    </div>
    `

  }
});

export { home as default };