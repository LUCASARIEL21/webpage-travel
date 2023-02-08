import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Sc = ({ closeModal }) => {
  return (
    <Dialog
      open={true}
      onClose={() => closeModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.div>
        <S.buttonS onClick={() => closeModal(false)}>X</S.buttonS>
        <S.container>
          <S.ct>
            <S.tnx>
              <LocationOnIcon style={{ color: "red" }} />
              Santa Catarina
            </S.tnx>
            <S.txt>SC</S.txt>
            <S.paragrafo>
              Santa Catarina é um estado na região sul do Brasil. Com uma longa
              costa com o Atlântico e muitas ilhas, ela é conhecida por suas
              praias e montanhas. Florianópolis, a capital, tem um mercado
              público tradicional com bares, restaurantes e barracas de comida,
              além de um museu histórico instalado em um palácio do governo
              colonial do século 19. Florianópolis está basicamente na ilha de
              Santa Catarina, que conta com resorts de praia na extremidade
              norte.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Beto%20Carrero%20World&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJz6pS4gIxjcuTS0oqtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAtZPyVzwAAAA&ved=0CBsQ4mhqFwoTCOjzicyQqvsCFQAAAAAdAAAAABAM&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DBeto%252BCarrero%252BWorld%2526skpm%253D/m/03wcttx%2526t%253Dd"
                target="_blank">
                Beto Carrero World
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Parque%20Unipraias&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJz6pS4tVP1zc0TM4zyDU0ySrRUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgCYguf4PwAAAA&ved=0CBQQ4mhqFwoTCOjzicyQqvsCFQAAAAAdAAAAABAV&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BUnipraias%2526skpm%253D/g/11cn0m14jt%2526t%253Dd"
                target="_blank">
                Parque Unipraias - Balneário
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Mercado%20Público%20de%20Florianópolis&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJz6pS4tZP1zc0MrY0rKqw1FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIA2QTe8T0AAAA&ved=0CCEQ4mhqFwoTCKCvldOFgf0CFQAAAAAdAAAAABBv&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMercado%252BP%2525C3%2525BAblico%252Bde%252BFlorian%2525C3%2525B3polis%2526skpm%253D/g/12391zx9%2526t%253Dd"
                target="_blank">
                Mercado Público de Florianópolis
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Empório%20Vila%20Germânica&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJz6pS4tFP1zcsKKmoSEuyMNdSzE620s_JT04syczPgzOsEktKihKTQcxiACy4m4E-AAAA&ved=0CBoQ4mhqFwoTCKCvldOFgf0CFQAAAAAdAAAAABBf&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DEmp%2525C3%2525B3rio%252BVila%252BGerm%2525C3%2525A2nica%2526skpm%253D/g/1ptxxfb87%2526t%253Dd"
                target="_blank">
                Empório Vila Germânica
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}