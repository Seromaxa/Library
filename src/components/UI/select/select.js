"use strict"
import "./select.scss"

export default class Select {
  constructor(selects = [], parametr, plaseholder, styles = {}) {
    this._root = document.createElement("div")
    this._el = document.createElement("div")
    this.parametr = parametr
    this.seletedId = styles.selectedId ?? null
    this.plaseholder = plaseholder ?? "You text"
    this.selects = selects
    this.cls = styles.root ? styles.root : "root__default"
    this.inpCls = styles.input ? styles.input : "select__input__default"
    this.dropdown = styles.dropdown
      ? styles.dropdown
      : "select__dropdown_default"
    this.listCls = styles.list ? styles.list : "select_list_default_animation"

    this.optCls =
      styles.option === ""
        ? "select_item__default"
        : styles.option ?? "select_item__default"

    this.selStyle =
      styles.selected === ""
        ? "selected_default"
        : styles.selected ?? "selected_default"

    this.#create()
    this.#setup()
  }

  changeHandler(ev) {
    this.fun(ev)
  }
  #create() {
    this.selects = this.selects.map((item, index) => {
      if (typeof item !== "object") {
        let buffer = item
        item = {
          id: index,
          [this.parametr]: buffer,
        }
        return item
      } else {
        item
      }
      return item
    })

    let plaseholder = this.plaseholder
    let items = this.selects.map((item) => {
      let cls = ""
      if (item.id == this.seletedId) {
        plaseholder = item[this.parametr]
        cls = this.selStyle
      }
      return `<li data-id="${item.id}"  class = "select__item ${
        this.optCls
      } ${cls}" data-type='item'>${item[this.parametr]}</li> `
    })

    let select = `<div class="select__backdrop" data-type="backdrop"></div>
    <div class="select__input ${this.inpCls}" data-type="input">
      <span data-type="value">${plaseholder}</span>
      <i class="fa fa-chevron-down" data-type="arrow"></i>
    </div>
    <div class="select__dropdown ${this.dropdown}">
      <ul class="select__list" data-type="list">
        ${items.join("")}
      </ul>
    </div>`
    this._el.classList.add("select__wrapper")
    this._el.innerHTML = select
    this._root.classList.add(this.cls)
    this._root.append(this._el)
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this)

    this._root.addEventListener("click", this.clickHandler)

    this._arrow = this._el.querySelector('[data-type="arrow"]')
    this._value = this._el.querySelector('[data-type="value"]')
  }

  clickHandler(event) {
    const { type } = event.target.dataset
    if (type === "input" || type === "arrow" || type === "value") {
      this.toggle()
    } else if (type === "item") {
      const id = event.target.dataset.id
      this.select(id)
    } else if (type === "backdrop") {
      this.close()
    }
  }
  get current() {
    return this.selects.find((item) => item.id == this.seletedId)
  }

  select(id) {
    this.seletedId = id
    this._value.textContent = this.current[this.parametr]
    this._el.querySelectorAll(`[data-type="item"]`).forEach((item) => {
      item.classList.remove(this.selStyle)
    })
    this._el.querySelector(`[data-id="${id}"]`).classList.add(this.selStyle)

    this.close()
  }

  reset() {
    this.seletedId = null
    this._el.querySelectorAll(`[data-type="item"]`).forEach((item) => {
      item.classList.remove(this.selStyle)
    })
    this._value.textContent = this.plaseholder
  }

  start() {
    return this._root
  }
  get isOpen() {
    return this._el.classList.contains("open")
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }
  open() {
    this._el.classList.add("open")
    this._el.querySelector('[data-type="list"]').classList.add(this.listCls)
    this._arrow.classList.remove("fa-chevron-down")
    this._arrow.classList.add("fa-chevron-up")
  }
  close() {
    this._el.classList.remove("open")
    this._el.querySelector('[data-type="list"]').classList.remove(this.listCls)
    this._arrow.classList.remove("fa-chevron-up")
    this._arrow.classList.add("fa-chevron-down")
  }

  destroy() {
    this._root.removeEventListener("click", this.clickHandler)
    this._root.remove()
  }
}

/* 
  selects = [] - масив (строк чисел обьектов(в обьекте обязательны id)) 
  parametr - название поля значение которого будет выводится в списке (options)
  plaseholder - первое значение
  styles = {
  
    каждое поле содержит название класс (css)

    root: стили для родительского элемента 
    input: заглавный элемент 
    dropdown: элемент держащий список
    list: список
    options: вид элементов
    selected: вид выбранного элемента
    selectedId: номер выбраного по умолчанию обьекта (id)

  }
  
*/
