import Nav from "../components/navigation/navigation"
import Form from "../components/UI/form/form"
import Input from "../components/UI/input/input"
import Button from "../components/UI/button/button"
import Burger from "../components/UI/burger/burger"

export default function createNavigation(search) {
  const searchInput = new Input({
    inputStyle: "header_nav_search_input",
    wrapper: "header_nav_input_wrapper",
    placeholder: "Найти книгу",
    warningStyle: "header_nav_search_warning",
    onInput(ev) {
      if (this.current.length >= 4) {
        this.resetWarning()
      }
    },
  })
  const searchButton = new Button({
    text: "Найти",
    position: "header_nav_search_submit",
    root: "header_nav_search_button",
    color: "header_nav_search_button_color",
  })

  const enterButton = new Button({
    text: "Войти",
    root: "header_nav_enter_button",
    color: "header_nav_enter_button_color",
    position: "header_nav_enter_button_margin",
    onClick: test,
  })
  function test() {
    const root = document.getElementById("root")

    closeNav()
  }

  const searchForm = new Form({
    items: [searchInput],
    formCls: "header_nav_search_form",
    button: searchButton,
    onSubmit(ev) {
      ev.preventDefault()
      if (searchInput.current.length <= 3) {
        searchInput.warning("Введите больше трех символов")
        return
      } else {
        search(searchInput.current)
        searchInput.reset()
        closeNav()
      }
    },
  })

  const burger = new Burger({
    onClick() {
      nav.change()
    },
  })

  const nav = new Nav({
    items: [searchForm, enterButton, burger],
    style: "header_nav",
    animationOn: "header_nav_active",
    animationOff: "header_nav_unactive",
  })
  function closeNav() {
    !nav.action ? null : nav.change()
    !burger.action ? null : burger.change()
  }
  return nav
}
