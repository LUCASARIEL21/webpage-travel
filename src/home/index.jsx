import React from "react"
import { Anuncio1 } from "../components/Comp home/anuncio1"
import { Anuncio2 } from "../components/Comp home/anuncio2"
import { Credits } from "../components/Comp home/creditos"
import { NavBar } from "../components/Comp home/navbar"
import { Carrosel } from "../components/Comp home/populares"
import { Estados } from "../components/Comp home/todos estados"

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Carrosel />
      <Anuncio1 />
      <Estados />
      <Anuncio2/>
      <Credits />
    </div>
  )
}