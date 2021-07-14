import "./logo.css"
export default class Logo {
  constructor(options = {}) {
    this.baner = options.baner
    this.text = options.text
    this.imagen = options.imagen
    this.alt = options.alt ? options.alt : "imagen"

    this.rootStyle = options.rootStyle ? options.rootStyle : "root_default"
    this.textStyle = options.textStyle ? options.textStyle : "text_default"
    this.banerStyle = options.banerStyle ? options.banerStyle : "baner_default"
    this.imgStyle = options.imgStyle ? options.imgStyle : "img_default"

    this.h = options.header ? options.header : "h2"
    this.underBaner = options.underBaner ? options.underBaner : "span"

    this._wrapper = document.createElement("div")
    this.#setLogo()
  }
  #setLogo() {
    this._wrapper.classList.add(this.rootStyle)
    this.baner ? (this._baner = document.createElement(this.h)) : null
    this.text ? (this._text = document.createElement(this.underBaner)) : null
    this.imagen ? (this._imagen = document.createElement("img")) : null
    this._imagen ? this._imagen.setAttribute("src", this.imagen) : null
    this._imagen ? this._imagen.setAttribute("alt", this.alt) : null

    this._baner
      ? (this._baner.textContent = this.baner) &&
        this._wrapper.insertAdjacentElement("beforeend", this._baner) &&
        this._baner.classList.add(this.banerStyle)
      : null
    this._imagen
      ? this._wrapper.insertAdjacentElement("beforeend", this._imagen) &&
        this._imagen.classList.add(this.imgStyle)
      : null
    this._text
      ? (this._text.textContent = this.text) &&
        this._wrapper.insertAdjacentElement("beforeend", this._text) &&
        this._text.classList.add(this.textStyle)
      : null
  }

  start() {
    return this._wrapper
  }
}
