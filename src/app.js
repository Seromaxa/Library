import "./styles/root.css"
import createHeader from "./conteiners/header"

function app() {
  const root = document.getElementById("root")
  root.insertAdjacentElement("afterbegin", createHeader().start())
}

app()

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
