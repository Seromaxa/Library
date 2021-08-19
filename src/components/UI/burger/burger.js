"use strict"
import "./burger.css"
export default class Burger {
  constructor(styles = {}) {
    this._root = document.createElement("div")
    this._burger = document.createElement("div")
    this.action = false
    this.wrapper = styles.wrapper ? styles.wrapper : "default_burger_wrapper"
    this.border = styles.border ? styles.border : "default_burger_border"
    this.active = styles.active ? styles.active : "default_burger_active"
    this.burger = styles.burger ? styles.burger : "default_burger"
    this.position = styles.position
      ? styles.position
      : "default_burger_position"
    this.onClick = styles.onClick
    this.clickHandler = this.clickHandler.bind(this)
    this.#create()
  }
  clickHandler(ev) {
    this.change()
    this.onClick ? this.onClick(ev) : null
  }
  change() {
    this.action = !this.action
    if (this.action) {
      this._root.classList.add(this.active)
    } else {
      this._root.classList.remove(this.active)
    }
  }
  #create() {
    this._root.classList.add(...[this.wrapper, this.position, this.border])
    this._burger.classList.add(this.burger)
    this._root.append(this._burger)
    this._root.addEventListener("click", this.clickHandler)
  }
  start() {
    return this._root
  }
  destroy() {
    this._root.removeEventListener("click", this.clickHandler)
    this._root.remove()
  }
}
