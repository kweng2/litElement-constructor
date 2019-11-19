// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import './third-element.js';

// Extend the LitElement base class
class FirstElement extends LitElement {
  render() {
    console.log('FirstElement: rendering');
    return html`
      <!-- template content -->
      <div style="background-color: rgba(100,200,100,0.2); padding:5px;">
        <h2>FIRST ELEMENT</h2>
        <third-element></third-element>
      </div>
    `;
  }
}
customElements.define('first-element', FirstElement);