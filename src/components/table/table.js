import "./table.css"

export default class Table {
  constructor(options = {}) {
    this._el = document.createElement("table")
    this.headers = options.headers ?? {}
    this.items = options.items ?? []
    this.onClick = options.onClick

    this.clickHandler = this.clickHandler.bind(this)

    this.#create()
    this.#setUp()
  }
  #create() {
    let header = Object.keys(this.headers)
    let head = `<tr>${header
      .map((item) => {
        return `<th>${item}</th>`
      })
      .join("")}</tr>`
    let body = this.items
      .map((item) => {
        return `<tr data-value='${item?.id}'>${header
          .map((it) => {
            return `<td>${item[this.headers[it]]}</td>`
          })
          .join("")}</tr>`
      })
      .join("")

    this._el.innerHTML = head + body
  }
  #setUp() {
    this._el.addEventListener("click", this.clickHandler)
  }

  clickHandler(ev) {
    this.onClick(ev.target.parentNode.dataset.value)
  }
  rerender() {
    this.#create()
  }
  start() {
    return this._el
  }
  destroy() {
    this._el.removeEventListener("click", this.clickHandler)
  }
}

// options.headers = [{key:'val',sek:'val'}]
