export default class Select {
  constructor(selects = [], opt, fun) {
    this._el = document.createElement("select")
    this._firstOptions = document.createElement("option")
    this.fun = fun
    this.selects = selects
    this.opt = opt
  }
  setSelect() {
    this._firstOptions.setAttribute("value", "")
    this._firstOptions.textContent = this.opt
    this._el.insertAdjacentElement("afterbegin", this._firstOptions)
    this.selects.map((item) => {
      let option = document.createElement("option")
      option.setAttribute("value", item)
      option.textContent = item
      this._el.append(option)
    })
    this._el.addEventListener("change", this.fun)
  }
  start() {
    this.setSelect()
    return this._el
  }
  delete() {
    return this._el.removeEventListener("change", this.fun)
  }
}
