import Form from "../components/UI/form/form"
import Select from "../components/UI/select/select"
import Input from "../components/UI/input/input"
import Popup from "../components/popup/popup"
import Book from "../components/book/book"
import { genre } from "../const"

export default function createPopup(state, tab) {
  const genres = new Select(genre, "name", "Выберите жанр")
  const author = new Input({
    placeholder: "Введите Автора",
    label: "up",
    lableContext: "Автор",
  })
  const book = new Input({
    placeholder: "Введите название книги",
    lableContext: "Название",
  })
  const house = new Input({
    placeholder: "Издательство",
    lableContext: "Издательство",
  })
  const copys = new Input({
    placeholder: "Количество копий",
    lableContext: "Копий",
    type: "number",
  })
  function years(from, to) {
    let year = []
    for (to; to >= from; to--) {
      year.push(to)
    }
    return year
  }

  const year = new Select(years(1900, new Date().getFullYear()), "year")
  const form = new Form([genres, author, book, house, copys, year], {
    onSubmit(ev) {
      ev.preventDefault()
      state.push(
        new Book({
          genre: genres.current.name,
          author: author.current,
          copy: copys.current,
          name: book.current,
          age: year.current.year,
          publishHouse: house.current,
        })
      )
      popup.close()
      tab.rerender()
    },
  })

  const popup = new Popup(form)
  return popup
}
