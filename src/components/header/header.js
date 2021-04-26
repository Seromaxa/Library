import "../../styles/header.css"

export default class Header {
  constructor() {
    this._el = document.createElement("header")
  }
  setHeader() {
    this._el.classList.add("header")
  }
  start() {
    this.setHeader()
    return this._el
  }
}
