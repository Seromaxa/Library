"use strict"
import Header from "../components/header/header"
import Logo from "../components/logo/logo"
import Img from "../assets/book.svg"
import navigation from "./headerNavigation"

export default function createHeader(search) {
  const logo = new Logo({
    baner: "Библиотека №253",
    text: "Имени Леопольд Леопольдовича",
    imagen: Img,
    alt: "Open book",
    rootStyle: "wrapper_logo_header",
    imgStyle: "header_imagen",
    banerStyle: "logo_baner",
    textStyle: "logo_text",
  })
  const header = new Header({
    logo: logo,
    nav: navigation(search),
    background: "header_background",
  })

  return header
}
