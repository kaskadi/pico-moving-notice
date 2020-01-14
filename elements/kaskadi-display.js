import {html, LitElement } from 'https://cdn.klimapartner.net/modules/lit-element/lit-element.js'
import './kaskadi-digit.js'

class Display extends LitElement {
  constructor () {
    super()
    this.number = 1
    this.digits = []
  }
  static get properties () {
    return {
      digits: { type: Array },
      number: { type: Number },
      value: { type: Number }
    }
  }
  updated (changedProperties) {
    if (changedProperties.has('value')) {
      this.updateDisplay(this.value)
    }
  }
  updateDisplay (number) {
    let currentNumber = number
    this.digits.forEach(digit => {
      digit.number = currentNumber%10
      currentNumber = (currentNumber - currentNumber%10)/10
    })
  }
  render () {
    const root = document.createElement('div')
    root.classList.add('display')
    root.setAttribute('style', 'display: flex; flex-direction: row-reverse;')
    let digits = []
    for (let i=0; i<this.number; i++) {
      let d = document.createElement('kaskadi-digit')
      d.number = 10
      d.root.setAttribute('style', 'padding: 0 3px')
      root.append(d)
      digits.push(d)
    }
    this.digits = digits
    return html`
    <style>
      .display {
        padding: 10px 5px;
        margin: 0 5px;
        background-color: #333;
        box-shadow: 1px 1px 5px #888;
        border-radius: 5px;
      }
    </style>
    ${root}`
  }
}

customElements.define('kaskadi-display', Display)
