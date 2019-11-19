// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

const DEFAULT_RAND = 'abc';
// Extend the LitElement base class
class ThirdElement extends LitElement {
  constructor() {
    super();
    console.log('ThirdElement: constructor, this.rand =', this.rand);
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.rand) {
      this.rand = DEFAULT_RAND;
    }
    if (!this.queryParameters) {
      const params = {};
      document.location.search.substring(1).split('&').forEach(ele => {
        const tuple = ele.split('=');
        params[tuple[0]] = tuple[1];
      });
      this.queryParameters = params;
    }
    console.log('ThirdElement: connected, this.rand =', this.rand);
  }

  updated(changedState) {
    console.log('ThirdElement: updated, this.queryParameters =', this.queryParameters);
  }

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render() {
    console.log('ThirdElement: rendering, this.queryParameters =', this.queryParameters);
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <!-- template content -->
      <div style="background-color: rgb(200,200,200); padding:5px;">
        <h2>THIRD ELEMENT</h2>
        <p>${this.rand}</p>
        <pre>${JSON.stringify(this.queryParameters)}</pre>
      </div>
    `;
  }

  static get properties() {
    return {
      queryParameters: {type: Object},
      rand: {type: String},
    };
  }
}
// Register the new element with the browser.
customElements.define('third-element', ThirdElement);