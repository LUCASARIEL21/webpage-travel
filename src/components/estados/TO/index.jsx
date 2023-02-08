import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const To = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "yellow" }} />
              Tocantins
            </S.tnx>
            <S.txt>TO</S.txt>
            <S.paragrafo>
              Tocantins é um estado no centro do Brasil. Caracteriza-se pelo
              cerrado (prado seco e matagais), rios vastos e plantações de soja.
              A capital moderna, Palmas, foi construída propositadamente no
              centro geográfico do estado e está rodeada de colinas arborizadas.
              Ligeiramente a sudeste de Palmas, Taquaruçu do Porto é um destino
              de ecoturismo conhecido pelos trilhos de caminhada e pelas quedas
              de água.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Ilha%20Canela%20Beach&stick=H4sIAAAAAAAAAONgFuLQz9U3SDHINlHi1U_XNzRMKi-oMjMvNtFSzE620s_JT04syczPgzOsEktKihKTQcxiAMfk8aU-AAAA&ved=0CBMQ4mhqFwoTCMDFjMiKgf0CFQAAAAAdAAAAABB3&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DIlha%252BCanela%252BBeach%2526skpm%253D/g/11bwpz67s4%2526t%253Dd"
                target="_blank">
                Ilha Canela Beach - Palmas
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Praia%20do%20Caju&stick=H4sIAAAAAAAAAONgFuLQz9U3SDHINlHi1U_XNzRMqszINTCtSNJSzE620s_JT04syczPgzOsEktKihKTQcxiAFXSyIQ-AAAA&ved=0CBYQ4mhqFwoTCMDFjMiKgf0CFQAAAAAdAAAAABBX&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bdo%252BCaju%2526skpm%253D/g/11byhm05xb%2526t%253Dd"
                target="_blank">
                Praia do Caju - Palmas
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Parque%20dos%20Povos%20Indígenas&stick=H4sIAAAAAAAAAONgFuLQz9U3SDHINlHi1U_XNzRMMzA0MTYsq9BSzE620s_JT04syczPgzOsEktKihKTQcxiAKaVNkw-AAAA&ved=0CBwQ4mhqFwoTCMDFjMiKgf0CFQAAAAAdAAAAABBP&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252Bdos%252BPovos%252BInd%2525C3%2525ADgenas%2526skpm%253D/g/11f01431vx%2526t%253Dd"
                target="_blank">
                Parque dos Povos Indígenas
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Parque%20Cesamar&stick=H4sIAAAAAAAAAONgFuLQz9U3SDHINlHi0U_XNywoqSw0KzYu0FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAZLWRGD0AAAA&ved=0CBcQ4mhqFwoTCMDFjMiKgf0CFQAAAAAdAAAAABBB&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BCesamar%2526skpm%253D/g/1ptyq6s3p%2526t%253Dd"
                target="_blank">
                Parque Cesamar - Palmas
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}