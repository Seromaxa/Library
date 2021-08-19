"use strict"
import "./nav.css"
export default class Nav {
  constructor(options = {}) {
    this._el = document.createElement("nav")
    this.items = options.items
    this.style = options.style ? options.style : "navigation_default"
    this.action = false
    this.animationOn = options.animationOn
    this.animationOff = options.animationOff
    this.#create()
  }

  #create() {
    this._el.classList.add(this.style)
    this.items
      ? Array.isArray(this.items)
        ? this.items.map((item) => {
            item.start
              ? this._el.append(item.start())
              : this._el.insertAdjacentHTML("afterbegin", item)
          })
        : this.items.start
        ? this._el.append(this.items.start())
        : this._el.insertAdjacentHTML("afterbegin", this.items)
      : null
  }
  change() {
    this.action = !this.action
    if (this.action) {
      this._el.classList.add(this.animationOn)
    } else {
      this._el.classList.remove(this.animationOn)
    }
    if (!this.action) {
      this._el.classList.add(this.animationOff)
    } else {
      this._el.classList.remove(this.animationOff)
    }
  }

  start() {
    return this._el
  }
}
