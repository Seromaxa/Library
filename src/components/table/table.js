import "./table.css"

export default class Table {
  constructor(options = {}) {
    this._el = document.createElement("table")
    this.headers = options.headers ?? {}
    this.items = options.items ?? []
    this.onClick = options.onClick
    this.style = options.style
      ? {
          table: options.style.table ?? "default_table",
          header: options.style.header ?? "default_heders",
          row: options.style.row ?? "default_row",
          data: options.style.data ?? "default_data",
          borders: options.style.borders ?? "default_borders",
          tooltip: options.style.tooltip ?? "default_tooltip",
        }
      : {
          table: "default_table",
          header: "default_heders",
          row: "default_row",
          data: "default_data",
          borders: "default_borders",
          tooltip: "default_tooltip",
        }

    this.clickHandler = this.clickHandler.bind(this)

    this.#create()
    this.#setUp()
  }
  #create() {
    let header = Object.keys(this.headers)
    let body = new DocumentFragment()
    let headRow = document.createElement("tr")
    header.forEach((item) => {
      let column = document.createElement("th")
      column.classList.add(...[this.style.header, this.style.borders])
      column.setAttribute("data-name", this.headers[item])
      column.textContent = item
      headRow.append(column)
    })
    this.items.forEach((item) => {
      let row = document.createElement("tr")
      let tooltip = document.createElement("div")
      tooltip.textContent = item.description
      tooltip.classList.add(this.style.tooltip)
      row.setAttribute("data-id", item.id)
      row.classList.add(this.style.row)
      header.forEach((it, index) => {
        let column = document.createElement("td")
        column.classList.add(...[this.style.data, this.style.borders])
        column.textContent = item[this.headers[it]]
        column.setAttribute("data-name", this.headers[it])
        column.setAttribute("data-id", item.id)
        if (index === 0 && item.description != "") {
          column.insertAdjacentElement("afterbegin", tooltip)
        }
        row.append(column)
      })
      body.append(row)
    })
    this._el.append(headRow)
    this._el.append(body)
    this._el.classList.add(...[this.style.table, this.style.borders])
  }
  #setUp() {
    this._el.addEventListener("click", this.clickHandler)
  }

  clickHandler(ev) {
    this.onClick ? this.onClick(ev.target.dataset.id) : null
  }
  rerender() {
    this.#create()
  }
  start() {
    return this._el
  }
  destroy() {
    this._el.removeEventListener("click", this.clickHandler)
    this._el.remove()
  }
}

// option.headers = {
//   ['Название заголовка']: 'название поля которое отображается под заголовком',
//   ['Автор']: 'author',
//   ["Название книги"]: "name",
//   ...
//   и т.д.
// }

//////////////////criete var 1 //////////
// let header = Object.keys(this.headers)
// let head = `<tr >${header
//   .map((item) => {
//     return `<th class = '${this.style.header} ${this.style.borders} data-name="${this.headers[item]}"'>${item}</th>`
//   })
//   .join("")}</tr>`
// let body = this.items
//   .map((item) => {
//     return `<tr data-value='${item?.id}' class = '${
//       this.style.row
//     }'>${header
//       .map((it) => {
//         return `<td class = "${this.style.data} ${
//           this.style.borders
//         }" data-name ="${this.headers[it]}">${item[this.headers[it]]}</td>`
//       })
//       .join("")}

//       </tr>`
//   })
//   .join("")

// this._el.innerHTML = head + body
// this._el.classList.add(...[this.style.table, this.style.borders])

///////////////// Table var 2 by divs ///////

// export default class Table2 {
//   constructor(options = {}) {
//     this._root = document.createElement("div")
//     // this._row = document.createElement("div")
//     // this._column = document.createElement("div")
//     this.headers = options.headers ?? {}
//     this.items = options.items ?? []
//     this.onClick = options.onClick
//     this.style = options.style
//       ? {
//           table: options.style.table ?? "default_table",
//           header: options.style.header ?? "default_heders",
//           row: options.style.row ?? "default_row",
//           data: options.style.data ?? "default_data",
//           borders: options.style.borders ?? "default_borders",
//           tooltip: options.style.tooltip ?? "default_tooltip",
//         }
//       : {
//           table: "default_table",
//           header: "default_heders",
//           row: "default_row",
//           data: "default_data",
//           borders: "default_borders",
//           tooltip: "default_tooltip",
//         }

//     this.clickHandler = this.clickHandler.bind(this)

//     this.#create()
//     this.#setUp()
//   }
//   #create() {
//     let headers = Object.keys(this.headers)
//     let body = new DocumentFragment()
//     let headRow = document.createElement("div")
//     headRow.classList.add(this.style.row)
//     headers.forEach((item) => {
//       let column = document.createElement("div")
//       column.classList.add(...[this.style.header, this.style.data])
//       column.textContent = item
//       headRow.append(column)
//     })
//     this.items.forEach((item) => {
//       let row = document.createElement("div")
//       let tooltip = document.createElement("div")
//       tooltip.classList.add(this.style.tooltip)
//       tooltip.textContent = item.description
//       row.append(tooltip)
//       row.classList.add(...[this.style.row])
//       row.setAttribute("data-id", item.id)
//       headers.forEach((it) => {
//         let column = document.createElement("div")

//         column.classList.add(this.style.data)
//         column.textContent = item[this.headers[it]]
//         row.append(column)
//       })
//       body.append(row)
//     })
//     this._root.append(headRow)
//     this._root.append(body)
//     this._root.classList.add(this.style.table)
//   }
//   #setUp() {
//     this._root.addEventListener("click", this.clickHandler)
//   }

//   clickHandler(ev) {
//     console.log(ev.target.parentNode.dataset.id)
//   }
//   rerender() {
//     this.#create()
//   }
//   start() {
//     return this._root
//   }
//   destroy() {
//     this._root.removeEventListener("click", this.clickHandler)
//     this._root.remove()
//   }
// }
