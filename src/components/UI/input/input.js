"use strict"
import "./input.css"

export default class Input {
  constructor(options = {}) {
    this._root = document.createElement("div")
    this._input = document.createElement("input")
    this._id = Date.now()
    this.placeholder = options.placeholder
    this.autocomplete = options.autocomplete ?? false
    this.label = options.label
    this.lableContext = options.lableContext
    this.type = options.type ?? "text"
    this.span = options.span
    this.spanContext = options.spanContext
    this.onChange = options.onChange
    this.onInput = options.onInput
    this.wrapper = options.wrapper ? options.wrapper : "input_wrapper_default"
    this.spanStyle = options.spanStyle
      ? options.spanStyle
      : "input_span_default"
    this.inputStyle = options.inputStyle ? options.inputStyle : "input_default"
    this.warningStyle = options.warningStyle
      ? options.warningStyle
      : "input_warning_default"
    this.#create()
    this.#setup()
  }

  #create() {
    this._input.setAttribute("id", this._id)
    this._input.setAttribute("type", this.type)
    this._input.classList.add(this.inputStyle)
    this.placeholder
      ? this._input.setAttribute("placeholder", this.placeholder)
      : null
    !this.autocomplete
      ? this._input.setAttribute("autocomplete", "off")
      : this._input.setAttribute("autocomplete", "on")
    this._root.classList.add(this.wrapper)
    this._root.insertAdjacentElement("beforeend", this._input)
    if (this.label) {
      this._lable = document.createElement("label")
      this._lable.setAttribute("for", this._id)
      this.lableContext ? (this._lable.textContent = this.lableContext) : null
      if (this.label === "up") {
        this._root.insertAdjacentElement("afterbegin", this._lable)
      }
      if (this.label === "down")
        this._root.insertAdjacentElement("beforeend", this._lable)
    }
    if (this.span) {
      this._span = document.createElement("span")
      this._span.classList.add(this.spanStyle)
      this._span.textContent = this.spanContext
      this._root.insertAdjacentElement("beforeend", this._span)
    }
  }

  #setup() {
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this._input.addEventListener("change", this.onChangeHandler)

    this.onInputHandler = this.onInputHandler.bind(this)
    this._input.addEventListener("input", this.onInputHandler)
  }

  start() {
    return this._root
  }
  onChangeHandler(ev) {
    this.onChange ? this.onChange(ev) : null
  }
  onInputHandler(ev) {
    this.onInput ? this.onInput(ev) : null
  }

  warning(text) {
    if (this.span) {
      this._span.textContent = text
      this._span.classList.remove(this.spanStyle)
      this._span.setAttribute("data-type", "warning")
      this._span.classList.add(this.warningStyle)
    } else if (this._root.querySelector('[data-type="warning"]')) {
      return
    } else {
      this._span = document.createElement("span")
      this._span.setAttribute("data-type", "warning")
      this._span.classList.add(this.warningStyle)
      this._span.textContent = text
      this._root.insertAdjacentElement("beforeend", this._span)
    }
  }
  resetWarning() {
    if (this.span) {
      this._span.removeAttribute("data-type")
      this._span.classList.remove(this.warningStyle)
      this._span.classList.add(this.spanStyle)
      this._span.textContent = this.spanContext
    } else if (this._root.querySelector('[data-type="warning"]')) {
      this._root.querySelector('[data-type="warning"]').remove()
    }
  }
  reset() {
    this._input.value = ""
    this.resetWarning()
  }

  get current() {
    return this._input.value
  }

  destroy() {
    this._input.removeEventListener("change", this.onChangeHandler)
    this._input.removeEventListener("input", this.onInputHandler)
    this._root.remove()
  }
}
