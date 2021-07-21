"use strict"
import "./styles/root.css"
import createHeader from "./conteiners/header"
import Table from "./components/table/table"
import { state } from "./debug/book"

function app() {
  const root = document.getElementById("root")
  root.insertAdjacentElement("afterbegin", createHeader(serch).start())

  const buffer = state.map((item) => {
    return { ...item, action: item.copy.length }
  })

  const testTable = new Table({
    headers: {
      ["Название"]: "name",
      ["Автор"]: "author",
      ["Жанр"]: "genre",
      ["Копий"]: "action",
    },
    items: buffer,
    onClick(ev) {
      console.log(ev)
    },
  })

  root.insertAdjacentElement("beforeend", testTable.start())
}
function serch(string) {
  console.log(string)
}

app()

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
