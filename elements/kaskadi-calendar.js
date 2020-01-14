import {html, LitElement } from 'https://cdn.klimapartner.net/modules/lit-element/lit-element.js'

class KaskadiCalendar extends LitElement {
  static get properties () {
    return {
      month: { type: String },
      date: { type: String },
    }
  }
  render () {
    return html`
    <style>
      #outer-calendar {
        width: 65px;
        height: 80px;
        border-radius: 5px;
        border: 5px solid #333;
        box-shadow: 1px 1px 5px #888;
        margin-right: 80px;
      }
      #top-calendar {
        height: 30px;
        font-size: 20px;
        color: white;
        text-align: center;
        background-color: #0069B3;
      }
      #bottom-calendar {
        font-size: 40px;
        color: #333;
        text-align: center;
        font-weight: bold;
      }
    </style>
    <div id="outer-calendar">
      <div id="top-calendar">
        ${this.month}
      </div>
      <div id="bottom-calendar">
        ${this.date}
      </div>
    </div>`
  }
}

customElements.define('kaskadi-calendar', KaskadiCalendar)
