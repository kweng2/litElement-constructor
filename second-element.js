// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import './third-element.js';

// Extend the LitElement base class
class SecondElement extends LitElement {
  constructor() {
    super();
    this.name = 'Kevin'
    console.log('SecondElement: constructor, this.attributes = ', this.attributes);
    console.log('SecondElement: constructor, this.name = ', this.name);
  }

  connectedCallback() {
    super.connectedCallback();
    this.queryString = document.location.search.substring(1);
    console.log('SecondElement: connected, this.name =', this.name);

    const params = {};
    this.queryString.split('&').forEach(ele => {
      const tuple = ele.split('=');
      params[tuple[0]] = tuple[1];
    });
    this.parsedParams = params;
  }

  updated(changedState) {
    console.log('SecondElement: updated, changedState =', changedState);
    console.log('SecondElement: updated, this.name =', this.name);
  }

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render() {
    console.log('SecondElement: rendering, this.name =', this.name)
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <!-- template content -->
      <div style="background-color: rgba(100,100,200,0.2); padding:5px;">
        <h2>SECOND ELEMENT</h2>
        <p>A paragraph</p>
        <p>My name is <pre>${this.name}</pre></p>
        <p>My age is <pre>${this.age}</pre></p>
        <p>queryString is <pre>${this.queryString}</pre></p>
        <p>pasredParams is</p>
        <pre>${JSON.stringify(this.parsedParams)}</pre>
        <div>Below is the third element</div>
        <third-element
          .queryParameters=${this.parsedParams}
          .rand=${'abc'}
        ></third-element>
      </div>
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      age: {type: Number},
      queryString: {type: String},
    };
  }
}
// Register the new element with the browser.
customElements.define('second-element', SecondElement);