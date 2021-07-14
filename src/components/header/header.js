import "./header.css"
export default class Header {
  constructor(options = {}) {
    this._el = document.createElement("header")
    this.logo = options.logo
    this.nav = options.nav
    this.style = options.style ? options.style : "header_default"
    this.background = options.background
      ? options.background
      : "header_background_default"
    this.setHeader()
  }
  setHeader() {
    this._el.classList.add(this.style, this.background)
    this.nav
      ? this.nav.start
        ? this._el.insertAdjacentElement("afterbegin", this.nav.start())
        : this._el.insertAdjacentHTML("afterbegin", this.nav)
      : null
    this.logo
      ? this.logo.start
        ? this._el.insertAdjacentElement("afterbegin", this.logo.start())
        : this._el.insertAdjacentHTML("afterbegin", this.logo)
      : null
  }
  start() {
    return this._el
  }
}
