import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Df = ({ closeModal }) => {
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
              Distrito Federal
            </S.tnx>
            <S.txt>DF</S.txt>
            <S.paragrafo>
              Brasília, inaugurada como capital do Brasil em 1960, é uma cidade
              planeada que se distingue pela sua arquitetura branca e moderna,
              essencialmente concebida por Oscar Niemeyer. Disposta em forma de
              avião, a sua "fuselagem" é o Eixo Monumental, 2 avenidas amplas
              flanqueadas por um enorme parque. No "cockpit" encontra-se a Praça
              dos Três Poderes, cujo nome provém das 3 agências do governo que a
              rodeiam.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Feira%20da%20Torre%20de%20TV&stick=H4sIAAAAAAAAAONgFuLQz9U3MMyojFfi1k_XNyxJMS1OqizUUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgC7VjjOPAAAAA&ved=0CBgQ4mhqFwoTCIiQz_vM__wCFQAAAAAdAAAAABBn&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DFeira%252Bda%252BTorre%252Bde%252BTV%2526skpm%253D/g/1td5sbyq%2526t%253Dd"
                target="_blank">
                Palácio do Planalto
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Zoológico%20de%20Brasília&stick=H4sIAAAAAAAAAONgFuLQz9U3MMyojFfi0U_XNzQsii_IzUpO01LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAOc-tlj0AAAA&ved=0CBQQ4mhqFwoTCIiQz_vM__wCFQAAAAAdAAAAABBb&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DZool%2525C3%2525B3gico%252Bde%252BBras%2525C3%2525ADlia%2526skpm%253D/g/11r_pmjcf%2526t%253Dd"
                target="_blank">
                Zoológico de Brasília
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Pontão%20do%20Lago%20Sul&stick=H4sIAAAAAAAAAONgFuLQz9U3MMyojFfi0U_XNywoqTSrMrUs0lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIACokJvD0AAAA&ved=0CBQQ4mhqFwoTCIiQz_vM__wCFQAAAAAdAAAAABBD&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPont%2525C3%2525A3o%252Bdo%252BLago%252BSul%2526skpm%253D/g/1pty6z59r%2526t%253Dd"
                target="_blank">
                Pontão do Lago Sul
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Catedral%20Metropolitana%20Nossa%20Senhora%20Aparecida&stick=H4sIAAAAAAAAAONgFuLQz9U3MMyojFfiBLHSTSoKy7UUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYABmuiiE6AAAA&ved=0CBgQ4mhqFwoTCNCa-pufqfsCFQAAAAAdAAAAABA9&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCatedral%252BMetropolitana%252BNossa%252BSenhora%252BAparecida%2526skpm%253D/m/0g4xqw%2526t%253Dd"
                target="_blank">
                Catedral Metropolitana Nossa Senhora Aparecida
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}