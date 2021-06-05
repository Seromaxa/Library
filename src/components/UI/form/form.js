import "./form.css"
export default class Form {
  constructor(styles = {}) {
    this._el = document.createElement("form")
    this.button = styles.button
    this.defaultButton = document.createElement("button")
    this.items = styles.items ?? []
    this.submitHandler = styles.onSubmit
    this.formCls = styles.formCls ? styles.formCls : "form_default"
    this.submiter = this.submiter.bind(this)
    this.create()
  }
  submiter(ev) {
    this.submitHandler ? this.submitHandler(ev) : null
  }

  create() {
    this.items
      ? Array.isArray(this.items)
        ? this.items.map((item) =>
            item.start
              ? this._el.insertAdjacentElement("beforeend", item.start())
              : typeof item !== "object"
              ? this._el.insertAdjacentHTML("beforeend", item)
              : this._el.insertAdjacentElement("beforeend", item)
          )
        : this.items.start
        ? this._el.insertAdjacentElement("beforeend", this.items.start())
        : typeof this.items !== "object"
        ? this._el.insertAdjacentHTML("beforeend", this.items)
        : this._el.insertAdjacentElement("beforeend", this.items)
      : null
    this.button
      ? this.button.start
        ? this._el.insertAdjacentElement("beforeend", this.button.start())
        : typeof this.button !== "object"
        ? this._el.insertAdjacentHTML("beforeend", this.button)
        : this._el.insertAdjacentElement("beforeend", this.button)
      : (this.defaultButton.textContent = "Submit") &&
        this._el.insertAdjacentElement("beforeend", this.defaultButton)
    this._el.classList.add(this.formCls)
    this._el.addEventListener("submit", this.submiter)
  }

  inspect() {
    return this.items
  }

  start() {
    return this._el
  }
  destroy() {
    this._el.removeEventListener("submit", this.submiter)
    this.button ? (this.button.destroy ? this.button.destroy() : null) : null
    Array.isArray(this.items)
      ? this.items.map((item) => (item.destroy ? item.destroy() : null))
      : this.items.destroy
      ? this.items.destroy()
      : null
    this._el.remove()
  }
}
