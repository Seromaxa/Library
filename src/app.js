import "./styles/root.css"
import Logo from "./components/logo/logo"
import Header from "./components/header/header"
import Select from "./components/UI/select/select"
import Nav from "./components/navigation/navigation"
import Form from "./components/UI/form/form"
import Popup from "./components/popup/popup"
import Button from "./components/UI/button/button"

function app() {
  const root = document.querySelector("body")

  root.insertAdjacentElement(
    "afterbegin",
    new Header({
      logo: new Logo({
        baner: "sdfghjkl",

        h: "h1",
        text: "Second Test",
      }),
      nav: new Nav({
        items: [
          '<a href="/">TEST</a>',
          '<a href="/">TEST</a>',
          '<a href="/">TEST</a>',
          new Button(),
          new Form(),
        ],
      }),
    }).start()
  )

  const but = new Button({
    text: "Нажми меня нажми",
    // span: "red",
    onClick: b,
  }).start()
  root.insertAdjacentElement("beforeend", but)

  function b(ev) {
    let sel = new Select(
      [1, "Ж", "А", { id: "3", name: "rrrrr" }, 0],
      "name",
      "Автор"
    )
    let sel2 = new Select(
      [2, "Ж", "А", { id: "3", name: "rrrrr" }, 1],
      "name",
      "Автор"
    )
    let sel3 = new Select(
      [3, "Ж", "А", { id: "3", name: "rrrrr" }, 2],
      "name",
      "Автор"
    )
    const form = new Form([sel, sel2, sel3], {
      onSubmit: a,
      button: new Button({ text: "Submit" }),
    })
    const test = document.createElement("div")
    test.setAttribute("style", "width:100px; height:100px; background:#ffff;")
    const popup = new Popup(form)
    const pop = popup.start()
    pop.classList.add("open")
    root.insertAdjacentElement("afterbegin", pop)
    ev.target.blur()

    function a(ev) {
      ev.preventDefault()
      console.log(sel3.current)
      setTimeout(() => {
        form.inspect().map((item, index) => {
          if (item.current) {
            item.reset()
          }
        })
      }, 500)
      setTimeout(() => {
        popup.close()
      }, 2000)
    }
  }
}

app()

// let sel2 = new Select(["detect", "afynfcnb"], "Жанр", fun).start()
// let sel = new Select(["Ж", "А"], "Автор", fun).start()
// let sel3 = new Select(["detect", "afynfcnb"], "Жанр").start()
// let sel4 = new Select(["Ж", "А"], "Автор").start()
// const myForm = new Form([sel, sel2], fun, "Ds,")

// const nav = new Nav([myForm.start(), but]).start()
// root.insertAdjacentElement("afterbegin", nav)
// root.insertAdjacentElement("afterbegin", header)
// header.insertAdjacentElement("afterbegin", logo)
// //

// function fun(ev) {
//   ev.preventDefault()
//   console.log(ev)
// }

const state = {
  library: {
    detective: {
      "Agata Cristi": {
        "book 1": [
          {
            id: 5555,
            history: [{ user: "vsia", date1: "02.03.2020", date2: "" }],
            hand: { user: "vsia", date1: "02.03.2020" },
            innal: false,
          },
          {
            id: 5556,
            history: [
              { user: "vsia", date1: "02.03.2020", date2: "03.04.2020" },
            ],
            hand: "",
            innal: true,
          },
        ],
        "book 2": [
          {
            id: 5555,
            history: [{ user: "vsia", date1: "02.03.2020", date2: "" }],
            hand: { user: "vsia", date1: "02.03.2020" },
            innal: false,
          },
          {
            id: 5556,
            history: [
              { user: "vsia", date1: "02.03.2020", date2: "03.04.2020" },
            ],
            hand: "",
            innal: true,
          },
        ],
      },
      "Arthur Conan Doil": {
        "book 1": [
          {
            id: 5555,
            history: [{ user: "vsia", date1: "02.03.2020", date2: "" }],
            hand: { user: "vsia", date1: "02.03.2020" },
            innal: false,
          },
          {
            id: 5556,
            history: [
              { user: "vsia", date1: "02.03.2020", date2: "03.04.2020" },
            ],
            hand: "",
            innal: true,
          },
        ],
        "book 2": [
          {
            id: 5555,
            history: [{ user: "vsia", date1: "02.03.2020", date2: "" }],
            hand: { user: "vsia", date1: "02.03.2020" },
            innal: false,
          },
          {
            id: 5556,
            history: [
              { user: "vsia", date1: "02.03.2020", date2: "03.04.2020" },
            ],
            hand: "",
            innal: true,
          },
        ],
      },
    },
  },
  users: [
    {
      id: 1,
      name: "Serg....",
      tel: "4587-58",
      history: [{ book: { id: 222, date1: "02.03.2020" } }],
    },
  ],
}
