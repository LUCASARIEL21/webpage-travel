import React from "react"
import { GoogleAd } from "../components/Comp home/anuncios1"
import { Credits } from "../components/Comp home/creditos"
import { NavBar } from "../components/Comp home/navbar"
import { Carrosel } from "../components/Comp home/populares"
import { Estados } from "../components/Comp home/todos estados"

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Carrosel />
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15px"
      }}>
        <GoogleAd slot="1085787706" googleAdId="ca-pub-5729807167062648" />
      </div>
      <Estados />
      <Credits />
    </div>
  )
}