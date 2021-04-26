import "../../styles/logo.css"
export default class Logo {
  constructor(baner, text) {
    this.baner = baner
    this.text = text
    this._wrapper = document.createElement("div")
    this._baner = document.createElement("h2")
    this._text = document.createElement("p")
  }
  setLogo() {
    this._baner.textContent = this.baner
    this._text.textContent = this.text
    this._baner.classList.add("hero")
    this._text.classList.add("under-hero")
    this._wrapper.classList.add("logo-wrapper")
    this._wrapper.insertAdjacentElement("afterbegin", this._baner)
    this._wrapper.insertAdjacentElement("beforeend", this._text)
  }

  start() {
    this.setLogo()
    return this._wrapper
  }
}
