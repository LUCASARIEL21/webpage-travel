import React from "react"
import linkedin from "../../../assets/svgs/linkedin.svg"
import github from "../../../assets/svgs/github.svg"
import insta from "../../../assets/svgs/insta.svg"
import * as S from "./styles"

export const Credits = () => {
  return (
    <S.container id="credits">
      <S.txt>INFORMAÇÕES E CONTATO</S.txt>
      <S.social>
        <a href="https://www.linkedin.com/in/lucas-ariel-0ab3721ba/">
          <img src={linkedin} alt="Icon" />
        </a>
        <a href="https://github.com/LUCASARIEL21">
          <img src={github} alt="Icon" />
        </a>
        <a href="https://www.instagram.com/lucas_arielfran/?hl=el">
          <img src={insta} alt="Icon" />
        </a>
      </S.social>
      <h6 style={{marginBottom: "15px", color: "black", fontSize: "20px", fontWeight: "900"}}>Email: lukasbcunha@gmail.com</h6>
      <h6 style={{color: "black"}}>Copyright 2022. All Rights Reserved by Lucas Ariel</h6>
      <h6 style={{marginBottom: "15px", color: "black"}}>Creator by Lucas Ariel</h6>
    </S.container>
  )
}
