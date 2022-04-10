window.Backed = window.Backed || {};
// binding does it's magic using the propertyStore ...
window.Backed.PropertyStore = window.Backed.PropertyStore || new Map();

// TODO: Create & add global observer
var PropertyMixin = base => {
  return class PropertyMixin extends base {
    static get observedAttributes() {
      return Object.entries(this.properties).map(entry => {if (entry[1].reflect) {return entry[0]} else return null});
    }

    get properties() {
      return customElements.get(this.localName).properties;
    }

    constructor() {
      super();
      if (this.properties) {
        for (const entry of Object.entries(this.properties)) {
          entry[1];
          // allways define property even when renderer is not found.
          this.defineProperty(entry[0], entry[1]);
        }
      }
    }

    connectedCallback() {
      if (super.connectedCallback) super.connectedCallback();
      if (this.attributes)
        for (const attribute of this.attributes) {
          if (String(attribute.name).includes('on-')) {
            const fn = attribute.value;
            const name = attribute.name.replace('on-', '');
            this.addEventListener(String(name), event => {
              let target = event.path[0];
              while (!target.host) {
                target = target.parentNode;
              }
              if (target.host[fn]) {
                target.host[fn](event);
              }
            });
          }
      }
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this[name] = newValue;
    }

    /**
     * @param {function} options.observer callback function returns {instance, property, value}
     * @param {boolean} options.reflect when true, reflects value to attribute
     * @param {function} options.render callback function for renderer (example: usage with lit-html, {render: render(html, shadowRoot)})
     */
    defineProperty(property = null, {strict = false, observer, reflect = false, renderer, value}) {
      Object.defineProperty(this, property, {
        set(value) {
          if (value === this[`___${property}`]) return;
          this[`___${property}`] = value;

          if (reflect) {
            if (value) this.setAttribute(property, String(value));
            else this.removeAttribute(property);
          }

          if (observer) {
            if (observer in this) this[observer]();
            else console.warn(`observer::${observer} undefined`);
          }

          if (renderer) {
            const obj = {};
            obj[property] = value;
            if (renderer in this) this.render(obj, this[renderer]);
            else console.warn(`renderer::${renderer} undefined`);
          }

        },
        get() {
          return this[`___${property}`];
        },
        configurable: strict ? false : true
      });
      // check if attribute is defined and update property with it's value
      // else fallback to it's default value (if any)
      const attr = this.getAttribute(property);
      this[property] = attr || this.hasAttribute(property) || value;
    }
  }
};

/**
 * @mixin Backed
 * @module utils
 * @export merge
 *
 * some-prop -> someProp
 *
 * @param {object} object The object to merge with
 * @param {object} source The object to merge
 * @return {object} merge result
 */
var merge = (object = {}, source = {}) => {
  // deep assign
  for (const key of Object.keys(object)) {
    if (source[key]) {
      Object.assign(object[key], source[key]);
    }
  }
  // assign the rest
  for (const key of Object.keys(source)) {
    if (!object[key]) {
      object[key] = source[key];
    }
  }
  return object;
};

var SelectMixin = base => {
  return class SelectMixin extends PropertyMixin(base) {

    static get properties() {
      return merge(super.properties, {
        selected: {
          value: 0,
          observer: '__selectedObserver__'
        }
      });
    }

    constructor() {
      super();
    }

    get slotted() {
      return this.shadowRoot ? this.shadowRoot.querySelector('slot') : this;
    }

    get _assignedNodes() {
      const nodes = 'assignedNodes' in this.slotted ? this.slotted.assignedNodes() : this.children;
      const arr = [];
      for (var i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.nodeType === 1) arr.push(node);
      }
      return arr;
    }

    /**
    * @return {String}
    */
    get attrForSelected() {
      return this.getAttribute('attr-for-selected') || 'name';
    }

    set attrForSelected(value) {
      this.setAttribute('attr-for-selected', value);
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        // check if value is number
        if (!isNaN(newValue)) {
          newValue = Number(newValue);
        }
        this[name] = newValue;
      }
    }

    /**
     * @param {string|number|HTMLElement} selected
     */
    select(selected) {
      if (selected) this.selected = selected;
      // TODO: fix selectedobservers
      if (this.multi) this.__selectedObserver__();
    }

    next(string) {
      const index = this.getIndexFor(this.currentSelected);
      if (index !== -1 && index >= 0 && this._assignedNodes.length > index &&
          (index + 1) <= this._assignedNodes.length - 1) {
        this.selected = this._assignedNodes[index + 1];
      }
    }

    previous() {
      const index = this.getIndexFor(this.currentSelected);
      if (index !== -1 && index >= 0 && this._assignedNodes.length > index &&
          (index - 1) >= 0) {
        this.selected = this._assignedNodes[index - 1];
      }
    }

    getIndexFor(element) {
      if (element && element instanceof HTMLElement === false)
        return console.error(`${element} is not an instanceof HTMLElement`);

      return this._assignedNodes.indexOf(element || this.selected);
    }

    _updateSelected(selected) {
      selected.classList.add('custom-selected');
      if (this.currentSelected && this.currentSelected !== selected) {
        this.currentSelected.classList.remove('custom-selected');
      }
      this.currentSelected = selected;
    }

    /**
     * @param {string|number|HTMLElement} change.value
     */
    __selectedObserver__(value) {
      const type = typeof this.selected;
      if (Array.isArray(this.selected)) {
        for (const child of this._assignedNodes) {
          if (child.nodeType === 1) {
            if (this.selected.indexOf(child.getAttribute(this.attrForSelected)) !== -1) {
              child.classList.add('custom-selected');
            } else {
              child.classList.remove('custom-selected');
            }
          }
        }
        return;
      } else if (type === 'object') return this._updateSelected(this.selected);
      else if (type === 'string') {
        for (const child of this._assignedNodes) {
          if (child.nodeType === 1) {
            if (child.getAttribute(this.attrForSelected) === this.selected) {
              return this._updateSelected(child);
            }
          }
        }
      } else {
        // set selected by index
        const child = this._assignedNodes[this.selected];
        if (child && child.nodeType === 1) this._updateSelected(child);
        // remove selected even when nothing found, better to return nothing
      }
    }
  }
};

/**
 * @extends HTMLElement
 */
class CustomPages extends SelectMixin(HTMLElement) {
  constructor() {
    super();
    this.slotchange = this.slotchange.bind(this);
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          flex: 1;
          position: relative;
          --primary-background-color: #ECEFF1;
          overflow: hidden;
        }
        ::slotted(*) {
          display: flex;
          position: absolute;
          opacity: 0;
          pointer-events: none;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transition: transform ease-out 160ms, opacity ease-out 60ms;
          /*transform: scale(0.5);*/
          transform-origin: left;
        }
        ::slotted(.animate-up) {
          transform: translateY(-120%);
        }
        ::slotted(.animate-down) {
          transform: translateY(120%);
        }
        ::slotted(.custom-selected) {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
          transition: transform ease-in 160ms, opacity ease-in 320ms;
          max-height: 100%;
          max-width: 100%;
        }
      </style>
      <!-- TODO: scale animation, ace doesn't resize that well ... -->
      <div class="wrapper">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.shadowRoot.querySelector('slot').addEventListener('slotchange', this.slotchange);
  }

  isEvenNumber(number) {
    return Boolean(number % 2 === 0)
  }

  /**
   * set animation class when slot changes
   */
  slotchange() {
    let call = 0;
    for (const child of this.slotted.assignedNodes()) {
      if (child && child.nodeType === 1) {
        child.style.zIndex = 99 - call;
        if (this.isEvenNumber(call++)) {
          child.classList.add('animate-down');
        } else {
          child.classList.add('animate-up');
        }
        this.dispatchEvent(new CustomEvent('child-change', {detail: child}));
      }
    }
  }
}customElements.define('custom-pages', CustomPages);

(function () {

  /**
   * @mixin Backed
   * @module utils
   * @export merge
   *
   * some-prop -> someProp
   *
   * @param {object} object The object to merge with
   * @param {object} source The object to merge
   * @return {object} merge result
   */
  var merge = (object = {}, source = {}) => {
    // deep assign
    for (const key of Object.keys(object)) {
      if (source[key]) {
        Object.assign(object[key], source[key]);
      }
    }
    // assign the rest
    for (const key of Object.keys(source)) {
      if (!object[key]) {
        object[key] = source[key];
      }
    }
    return object;
  };

  window.Backed = window.Backed || {};
  // binding does it's magic using the propertyStore ...
  window.Backed.PropertyStore = window.Backed.PropertyStore || new Map();

  // TODO: Create & add global observer
  var PropertyMixin = base => {
    return class PropertyMixin extends base {
      static get observedAttributes() {
        return Object.entries(this.properties).map(entry => {if (entry[1].reflect) {return entry[0]} else return null});
      }

      get properties() {
        return customElements.get(this.localName).properties;
      }

      constructor() {
        super();
        if (this.properties) {
          for (const entry of Object.entries(this.properties)) {
            entry[1];
            // allways define property even when renderer is not found.
            this.defineProperty(entry[0], entry[1]);
          }
        }
      }

      connectedCallback() {
        if (super.connectedCallback) super.connectedCallback();
        if (this.attributes)
          for (const attribute of this.attributes) {
            if (String(attribute.name).includes('on-')) {
              const fn = attribute.value;
              const name = attribute.name.replace('on-', '');
              this.addEventListener(String(name), event => {
                let target = event.path[0];
                while (!target.host) {
                  target = target.parentNode;
                }
                if (target.host[fn]) {
                  target.host[fn](event);
                }
              });
            }
        }
      }

      attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
      }

      /**
       * @param {function} options.observer callback function returns {instance, property, value}
       * @param {boolean} options.reflect when true, reflects value to attribute
       * @param {function} options.render callback function for renderer (example: usage with lit-html, {render: render(html, shadowRoot)})
       */
      defineProperty(property = null, {strict = false, observer, reflect = false, renderer, value}) {
        Object.defineProperty(this, property, {
          set(value) {
            if (value === this[`___${property}`]) return;
            this[`___${property}`] = value;

            if (reflect) {
              if (value) this.setAttribute(property, String(value));
              else this.removeAttribute(property);
            }

            if (observer) {
              if (observer in this) this[observer]();
              else console.warn(`observer::${observer} undefined`);
            }

            if (renderer) {
              const obj = {};
              obj[property] = value;
              if (renderer in this) this.render(obj, this[renderer]);
              else console.warn(`renderer::${renderer} undefined`);
            }

          },
          get() {
            return this[`___${property}`];
          },
          configurable: strict ? false : true
        });
        // check if attribute is defined and update property with it's value
        // else fallback to it's default value (if any)
        const attr = this.getAttribute(property);
        this[property] = attr || this.hasAttribute(property) || value;
      }
    }
  };

  var SelectMixin = base => {
    return class SelectMixin extends PropertyMixin(base) {

      static get properties() {
        return merge(super.properties, {
          selected: {
            value: 0,
            observer: '__selectedObserver__'
          }
        });
      }

      constructor() {
        super();
      }

      get slotted() {
        return this.shadowRoot ? this.shadowRoot.querySelector('slot') : this;
      }

      get _assignedNodes() {
        const nodes = 'assignedNodes' in this.slotted ? this.slotted.assignedNodes() : this.children;
        const arr = [];
        for (var i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          if (node.nodeType === 1) arr.push(node);
        }
        return arr;
      }

      /**
      * @return {String}
      */
      get attrForSelected() {
        return this.getAttribute('attr-for-selected') || 'name';
      }

      set attrForSelected(value) {
        this.setAttribute('attr-for-selected', value);
      }

      attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
          // check if value is number
          if (!isNaN(newValue)) {
            newValue = Number(newValue);
          }
          this[name] = newValue;
        }
      }

      /**
       * @param {string|number|HTMLElement} selected
       */
      select(selected) {
        if (selected) this.selected = selected;
        // TODO: fix selectedobservers
        if (this.multi) this.__selectedObserver__();
      }

      next(string) {
        const index = this.getIndexFor(this.currentSelected);
        if (index !== -1 && index >= 0 && this._assignedNodes.length > index &&
            (index + 1) <= this._assignedNodes.length - 1) {
          this.selected = this._assignedNodes[index + 1];
        }
      }

      previous() {
        const index = this.getIndexFor(this.currentSelected);
        if (index !== -1 && index >= 0 && this._assignedNodes.length > index &&
            (index - 1) >= 0) {
          this.selected = this._assignedNodes[index - 1];
        }
      }

      getIndexFor(element) {
        if (element && element instanceof HTMLElement === false)
          return console.error(`${element} is not an instanceof HTMLElement`);

        return this._assignedNodes.indexOf(element || this.selected);
      }

      _updateSelected(selected) {
        selected.classList.add('custom-selected');
        if (this.currentSelected && this.currentSelected !== selected) {
          this.currentSelected.classList.remove('custom-selected');
        }
        this.currentSelected = selected;
      }

      /**
       * @param {string|number|HTMLElement} change.value
       */
      __selectedObserver__(value) {
        const type = typeof this.selected;
        if (Array.isArray(this.selected)) {
          for (const child of this._assignedNodes) {
            if (child.nodeType === 1) {
              if (this.selected.indexOf(child.getAttribute(this.attrForSelected)) !== -1) {
                child.classList.add('custom-selected');
              } else {
                child.classList.remove('custom-selected');
              }
            }
          }
          return;
        } else if (type === 'object') return this._updateSelected(this.selected);
        else if (type === 'string') {
          for (const child of this._assignedNodes) {
            if (child.nodeType === 1) {
              if (child.getAttribute(this.attrForSelected) === this.selected) {
                return this._updateSelected(child);
              }
            }
          }
        } else {
          // set selected by index
          const child = this._assignedNodes[this.selected];
          if (child && child.nodeType === 1) this._updateSelected(child);
          // remove selected even when nothing found, better to return nothing
        }
      }
    }
  };

  var SelectorMixin = base => {
    return class SelectorMixin extends SelectMixin(base) {

    static get properties() {
        return merge(super.properties, {
          selected: {
            value: 0,
            observer: '__selectedObserver__'
          },
          multi: {
            value: false,
            reflect: true
          }
        });
      }
      constructor() {
        super();
      }
      connectedCallback() {
        super.connectedCallback();
        this._onClick = this._onClick.bind(this);
        this.addEventListener('click', this._onClick);
      }
      disconnectedCallback() {
        this.removeEventListener('click', this._onClick);
      }
      _onClick(event) {
        const target = event.path ? event.path[0] : event.composedPath()[0];
        const attr = target.getAttribute(this.attrForSelected);
        let selected;

        if (target.localName !== this.localName) {
          selected = attr ? attr : target;
        } else {
          selected = attr;
        }
        if (this.multi) {
          if (!Array.isArray(this.selected)) this.selected = [];
          const index = this.selected.indexOf(selected);
          if (index === -1) this.selected.push(selected);
          else this.selected.splice(index, 1);
          // trigger observer
          this.select(this.selected);

        } else this.selected = selected;

        this.dispatchEvent(new CustomEvent('selected', { detail: selected }));
      }
    }
  };

  customElements.define('custom-tabs', class CustomTabs extends SelectorMixin(HTMLElement) {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = this.template;
    }
    // TODO: make scrollable
    get template() {
      return `
      <style>
        :host {
          display: flex;
          flex-direction: row;
          /*align-items: flex-end;*/
          height: var(--custom-tabs-height, 48px);
        }
      </style>
      <slot></slot>
    `;
    }
  });

}());

(function () {

  customElements.define('custom-tab', class CustomTab extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = this.template;
      this._onMouseIn = this._onMouseIn.bind(this);
      this._onMouseOut = this._onMouseOut.bind(this);
    }

    connectedCallback() {
      this.addEventListener('mouseover', this._onMouseIn);
      this.addEventListener('mouseout', this._onMouseOut);
    }

    disconnected() {
      this.removeEventListener('mouseover', this._onMouseIn);
      this.removeEventListener('mouseout', this._onMouseOut);
    }

    _onMouseIn() {
      this.classList.add('over');
    }

    _onMouseOut() {
      this.classList.remove('over');
    }

    get template() {
      return `
    <style>
      :host {
        position: relative;
        display: inline-flex;
        width: 148px;
        height: 48px;
        align-items: center;
        justify-content: center;
        padding: 8px 12px;
        box-sizing: border-box;
        cursor: pointer;
        
        --tab-underline-color:  #00B8D4;
      }

      :host(.custom-selected) {
        border-bottom: 2px solid var(--tab-underline-color);
      }
      
      ::slotted(*) {
        pointer-events: none;
      }
    </style>
    <slot></slot>
    `;
    }
  });

}());

customElements.define('flex-column', class FlexColumn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  get template() {
    return `<style>
      :host {
        display: flex;
        flex-direction: column;
      }      
    </style>
    <slot></slot>
    `
  }
});

customElements.define('flex-row', class FlexRow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  get template() {
    return `<style>
      :host {
        display: flex;
        flex-direction: row;
      }      
    </style>
    <slot></slot>
    `
  }
});

customElements.define('flex-one', class FlexOne extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  get template() {
    return `<style>
      :host {
        flex: 1;
      }
    </style>
    
    <slot></slot>`
  }
});

customElements.define('flex-two', class FlexTwo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  get template() {
    return `<style>
      :host {
        flex: 2;
      }
    </style>
    
    <slot></slot>`
  }
});

customElements.define('flex-three', class FlexThree extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  get template() {
    return `<style>
      :host {
        flex: 3;
      }
    </style>
    
    <slot></slot>`
  }
});

customElements.define('flex-four', class FlexFour extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  get template() {
    return `<style>
      :host {
        flex: 4;
      }
    </style>
    
    <slot></slot>`
  }
});

customElements.define('flex-wrap-around', class FlexWrapAround extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  get template() {
    return `<style>
      :host {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
      }      
    </style>
    <slot></slot>
    `
  }
});

customElements.define('flex-wrap-evenly', class FlexWrapEvenly extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  get template() {
    return `<style>
      :host {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
      }      
    </style>
    <slot></slot>
    `
  }
});

customElements.define('flex-wrap-between', class FlexWrapBetween extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  get template() {
    return `<style>
      :host {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
      }      
    </style>
    <slot></slot>
    `
  }
});

customElements.define('container-element', class ContainerElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `
    <style>
      :host {
        display: flex;
        flex-direction: column;
        max-width: 640px;
        width: 100%;
        background: var(--secondary-background-color);
        padding: 48px;
        box-sizing: border-box;
      }
    </style>
    <slot></slot>
    `
  }
});

customElements.define('footer-element', class FooterElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
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
});

customElements.define('header-element', class HeaderElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `
    <style>
      :host {
        display: flex;
        flex-direction: row;
        width: 100%;
        font-size: 16px;
        padding: 8px 16px;
        box-sizing: border-box;
      }

      a {
        text-decoration: none;
        color: var(--main-color);
        text-transform: uppercase;
        padding: 6px 12px;
        pointer-events: auto;
      }
    </style>
    <flex-one></flex-one>
    <a href="#!/home">home</a>
    <a href="#!/guide">guide</a>
    <a href="#!/links">links</a>
    <a href="#!/info">info</a>
    `
  }
});

var shell = customElements.define('guide-shell', class GuideShell extends HTMLElement {

  get #pages() {
    return this.shadowRoot.querySelector('custom-pages')
  }
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
    this.onhashchange = this.onhashchange.bind(this);
    globalThis.onhashchange = this.onhashchange;
    this.setTheme('dark');
    if (location.hash.length === 0) location.hash = '#!/home';
    this.onhashchange();
  }

  async onhashchange() {
    let parts = location.hash.split('#!/');
    parts = parts[1].split('?');
    const selected = parts[0];
    await this.#select(selected);
    if (parts[1]) {
      parts = parts[1].split('=');
      const params = {};
      params[parts[0]] = parts[1];
      if (params.selected) {
        this.shadowRoot.querySelector(`${selected}-page`).select(params.selected);
      }

    }
  }

  async #select(selected) {
    if (!customElements.get(`${selected}-page`)) await import(`./pages/${selected}.js`);
    this.#pages.select(selected);
  }

  async setTheme(theme) {
    const importee = await import(`./themes/${theme}.js`);
    for (const prop of Object.keys(importee.default)) {
      document.querySelector('body').style.setProperty(`--${prop}`, importee.default[prop]);
    }
  }

  get template() {
    return `
    <style>
      * {
        pointer-events: none;
      }
      :host {
        display: flex;
        flex-direction: column;
        background: var(--main-background-color);
        color: var(--main-color);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        --custom-tab-color: var(--main-color);
      }

      custom-tab {
        pointer-events: auto;
      }
    </style>

    <header-element></header-element>

    <custom-pages attr-for-selected="data-route">
      <home-page data-route="home"></home-page>
      <guide-page data-route="guide"></guide-page>
      <info-page data-route="info"></info-page>
      <links-page data-route="links"></links-page>
    </custom-pages>
    <footer-element></footer-element>
    `
  }
});

export { shell as default };
