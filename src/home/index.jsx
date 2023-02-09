import React from "react"
import { GoogleAd } from "../components/Comp home/adsense"
import { Credits } from "../components/Comp home/creditos"
import { NavBar } from "../components/Comp home/navbar"
import { Carrosel } from "../components/Comp home/populares"
import { Estados } from "../components/Comp home/todos estados"

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Carrosel />
      <GoogleAd />
      <Estados />
      <Credits />
    </div>
  )
}