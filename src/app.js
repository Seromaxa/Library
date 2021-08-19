"use strict"
import "./styles/root.css"
import createHeader from "./conteiners/header"
import Table from "./components/table/table"
import Button from "./components/UI/button/button"
import { state } from "./debug/book"

function app(some) {
  const root = document.getElementById("root")
  root.insertAdjacentElement("afterbegin", createHeader(serch).start())

  

  const state1 = [...state]

  const testTable = new Table({
    headers: {
      ["Название"]: "name",
      ["Автор"]: "author",
      ["Жанр"]: "genre",
      ["Копий"]: "copy",
    },
    items: some,
    onClick(ev) {
      some = some.filter((item) => item.id != ev.target.dataset.id)
      this.items = some
      this.rerender()
    },

    rebuld() {
      return (this.items = this.items.map((item) => {
        let active = item.copy.filter((it) => it.onHand).length
        let unactive = item.copy.filter((it) => !it.onHand).length
        return { ...item, copy: `${unactive}/${active}` }
      }))
    },
  })
  root.insertAdjacentElement("beforeend", testTable.start())
  const button = new Button({
    onClick() {
      some.splice(0, 1)
      testTable.items = some
      testTable.rerender()
    },
  })
}
function serch(string) {
  console.log(string)
}

app(state)

// function alasetState(state){
//   toolbar.state = state
//   toolbar.rerender()
// }

// const state = []
// let count = 0
//
// const button = new Button({
//   text: "ADD  ",
//   onClick() {
//     root.insertAdjacentElement("afterbegin", createPopup(state, a).start())
//   },
// })

// let a = new Table({
//   headers: { Book: "name", Author: "author", Genre: "genre" },
//   items: state,
//   onClick(ev) {
//     let a = state.filter((item) => item.id == ev)
//     console.log(a)
//   },
// })

// root.insertAdjacentElement("beforeend", a.start())

// root.insertAdjacentElement("afterbegin", button.start())
