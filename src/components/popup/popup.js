"use strict"
import "./popup.css"
export default class Popup {
  constructor(items = {}) {
    this.root = document.createElement("div")
    this.closer = document.createElement("div")
    this.item = items.item
    this.open = items.open ? items.open : "open"
    this.off = items.off ? items.off : "delete"
    this.closeHandler = this.closeHandler.bind(this)
    this.create()
  }
  closeHandler(ev) {
    if (ev.keyCode === 27 || ev.target.id === "close") {
      this.close()
    } else {
      return
    }
  }

  create() {
    this.root.classList.add("wrapper_popup")
    this.root.classList.add(this.open)
    this.closer.classList.add("closer")
    this.closer.setAttribute("id", "close")
    this.closer.innerHTML = "&#10008;"
    this.closer.addEventListener("click", this.closeHandler)
    this.item.start
      ? this.root.insertAdjacentElement("afterbegin", this.item.start())
      : this.root.insertAdjacentHTML("afterbegin", this.item)
    this.root.insertAdjacentElement("afterbegin", this.closer)
    window.addEventListener("keyup", this.closeHandler)
  }

  start() {
    return this.root
  }

  close() {
    this.root.classList.remove(this.open)
    this.root.classList.add(this.off)
    setTimeout(() => {
      this.destroy()
    }, 1000)
  }
  destroy() {
    this.closer.removeEventListener("click", this.closeHandler)
    window.removeEventListener("keyup", this.closeHandler)
    this.item.destroy ? this.item.destroy() : null
    this.root.remove()
  }
}

/* 
item = item which popup wrapping
open/off = css class which include animation like: .open{animation:open .3s leaner}
*/
