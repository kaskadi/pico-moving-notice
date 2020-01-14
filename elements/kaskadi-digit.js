import {html, LitElement } from 'https://cdn.klimapartner.net/modules/lit-element/lit-element.js'

const svgNS = 'http://www.w3.org/2000/svg'

class Digit extends LitElement {
  constructor() {
    super()
    const p = 3
    const op = p/(2**(1/2))
    const w = 5
    const tw = 25
    const th = 40.5
    const dh = `M${op},0 L${w + op},${w} ${tw - w - op},${w} ${tw - op},0 z`
    const dv = `M0,${op} L0,${th/2 - p/2} l${w/2},${0} l${w/2},${-w/2} L${w},${op + w} z`
    const dm = `M${w + p},${th/2 - w/2} L${tw - w - p},${th/2 - w/2} l${w/2},${w/2} l${-w/2},${w/2} L${w + p},${th/2 + w/2} l${-w/2},${-w/2} z`
    this.root = document.createElementNS(svgNS, 'svg')
    this.root.setAttribute('width', `${tw}px`)
    this.root.setAttribute('height', `${th}px`)
    this.root.setAttribute('viewBox', `0 0 ${tw} ${th}`)
    const s1 = this.createSegment(dh)
    const s2 = this.createSegment(dv, `translate(0, ${th/2}) scale(1, -1) rotate(180, ${tw/2}, ${th/4})`)
    const s3 = this.createSegment(dv, `rotate(180, ${tw/2}, ${th/2})`)
    const s4 = this.createSegment(dh, `rotate(180, ${tw/2}, ${th/2})`)
    const s5 = this.createSegment(dv, `translate(0, ${th}) scale(1, -1)`)
    const s6 = this.createSegment(dv)
    const s7 = this.createSegment(dm)
    this.root.append(s1)
    this.root.append(s2)
    this.root.append(s3)
    this.root.append(s4)
    this.root.append(s5)
    this.root.append(s6)
    this.root.append(s7)
    this.segments = [s1, s2, s3, s4, s5, s6, s7]
    this.number = 10
  }
  static get properties () {
    return {
      root: { type: Object },
      segments: { type: Array },
      number: { type: Number }
    }
  }
  createSegment (d, t = '') {
    const s = document.createElementNS(svgNS, 'path')
    s.setAttribute('d', d)
    s.setAttribute('transform', t)
    s.classList.add('segment')
    s.classList.add('off')
    return s
  }
  updateDigit (n) {
    const numbers = [
    [1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
    ]
    numbers[n].forEach((item, index) => {
      if (item === 1) {
        this.segments[index].classList.remove('off')
      } else {
        this.segments[index].classList.add('off')
      }
    })
  }
  updated(changedProperties) {
    if (changedProperties.has('number')) {
      this.updateDigit(this.number)
    }
  }
  render () {
    return html`
    <style>
      .segment {
        fill: crimson;
      }
      .segment.off {
        opacity: 0.2;
      }
    </style>
    ${this.root}`
  }
}

customElements.define('kaskadi-digit', Digit)
