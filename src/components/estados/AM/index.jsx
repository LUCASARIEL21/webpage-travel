import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Am = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "green" }} />
              Amazonas
            </S.tnx>
            <S.txt>AM</S.txt>
            <S.paragrafo>
              Amazonas é um enorme estado no noroeste do Brasil, coberto quase
              na sua totalidade pela floresta tropical da Amazónia. A capital,
              Manaus, é um porto fluvial com pontos de referência que datam do
              ciclo da borracha de finais do século XIX, incluindo o Teatro
              Amazonas, uma grande casa de ópera. A cidade marca o "Encontro das
              Águas", onde o rio Negro, de água negra, e o rio Solimões se
              juntam para formar o rio Amazonas.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Teatro+Amazonas&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIya5UAjMts7PMDLQUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAHDKeBw7AAAA#fpstate=trskp&trifp=kpq%253DTeatro%252BAmazonas%2526skpm%253D/m/09kj60%2526t%253Dd"
                target="_blank">
                Teatro Amazonas - Manuas
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Parque%20Municipal%20do%20Mindu&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIya5U4tFP1zc0rDDMyzUvydVSzE620s_JT04syczPgzOsEktKihKTQcxiAPiQ9RY-AAAA&ved=0CBQQ4mhqFwoTCOjyjebD__wCFQAAAAAdAAAAABAk&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BMunicipal%252Bdo%252BMindu%2526skpm%253D/g/11x1nm7tm%2526t%253Dd"
                target="_blank">
                Parque Municipal do Mindu
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Museu%20da%20Amaz%C3%B4nia%20-%20MUSA&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIya5U4tZP1zc0MkzLMcrJ1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAjULabT0AAAA&ved=0CB4Q4mhqFwoTCIiN_KXcqPsCFQAAAAAdAAAAABAa&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMuseu%252Bda%252BAmaz%2525C3%2525B4nia%252B-%252BMUSA%2526skpm%253D/g/121fl2lk%2526t%253Dd"
                target="_blank">
                Museu da Amazônia - MUSA
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=CIGS%27s%20Zoo&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIya5U4tVP1zc0TKu0qCoyLKrUUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgD9ZfVDPwAAAA&ved=0CBcQ4mhqFwoTCOjyjebD__wCFQAAAAAdAAAAABAX&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCIGS's%252BZoo%2526skpm%253D/g/11fy8zr1ry%2526t%253Dd"
                target="_blank">
                Zoológico dos CIGS - Manaus
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}