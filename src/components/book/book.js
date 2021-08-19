"use strict"
export default class Book {
  constructor(options = {}) {
    this.name = options.name
    this.author = options.author
    this.copy = options.copy
    this.publishHouse = options.publishHouse
    this.age = options.age
    this.genre = options.genre
    this.copys = []
    this.#setBook()
  }
  createCopy() {
    return {
      id: Date.now(),
      history: [],
      user: "",
      onHand: false,
      setUser(name) {
        if (this.onHand) {
          return
        }
        this.user = name
        this.onHand = true
      },
      get back() {
        if (!this.user) {
          return
        }
        this.history.push(this.user)
        this.onHand = false
        this.user = ""
      },
    }
  }
  #setBook() {
    this.id = Date.now()
    for (let i = 0; i < this.copy; i++) {
      setTimeout(() => {
        this.copys.push(this.createCopy())
      }, i + 1)
    }
  }
}
