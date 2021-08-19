"use strict"
import "./button.scss"
export default class Button {
  constructor(styles = {}) {
    this._el = document.createElement("button")
    this.text = styles.text ?? "Push it"
    this.root = styles.root ? styles.root : styles.root ?? "button_default"
    this.span = styles.span ?? "button_span_default"
    this.color = styles.color
      ? styles.color
      : styles.color ?? "button_default_color"
    this.position = styles.position
      ? styles.position
      : styles.position ?? "button_position_default"
    this.fn = styles.onClick
    this.clickHandler = this.clickHandler.bind(this)
    this.create()
  }
  clickHandler(ev) {
    this.fn ? this.fn(ev) : null
  }
  create() {
    this._el.innerHTML = `<span class="${this.span}">${this.text}</span>`
    this._el.classList.add(this.root, this.color, this.position)
    this._el.addEventListener("click", this.clickHandler)
  }
  start() {
    return this._el
  }
  destroy() {
    this._el.removeEventListener("click", this.clickHandler)
    this._el.remove()
  }
}
