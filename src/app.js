import "./styles/root.css"
import Logo from "./components/logo/logo"
import Header from "./components/header/header"
import Select from "./components/UI/select"

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
  users: {
    user1: {
      id: 1,
      name: "Serg....",
      tel: "4587-58",
      history: [{ book: { id: 222, date1: "02.03.2020" } }],
    },
  },
}

function app() {
  const root = document.querySelector("body")
  const header = new Header().start()
  const logo = new Logo("Библиотека", "имени Меня").start()

  root.insertAdjacentElement("afterbegin", header)
  header.insertAdjacentElement("afterbegin", logo)

  let sel = new Select(["detect", "afynfcnb"], "Жанр", fun)
  root.insertAdjacentElement("beforeend", sel.start())
  let sel2 = new Select(["Жанр", "Автор"], "Автор", fun)
  root.insertAdjacentElement("beforeend", sel2.start())

  function fun(ev) {
    if (ev.target.value) {
      console.log(ev.target.value)
    }
  }
}

app()
