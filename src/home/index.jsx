import React from "react"
import { Anuncios1 } from "../components/Comp home/anuncios1"
import { Anuncios2 } from "../components/Comp home/anuncios2"
import { Credits } from "../components/Comp home/creditos"
import { NavBar } from "../components/Comp home/navbar"
import { Carrosel } from "../components/Comp home/populares"
import { Estados } from "../components/Comp home/todos estados"

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Carrosel />
      <Anuncios1 />
      <Estados />
      <Anuncios2/>
      <Credits />
    </div>
  )
}