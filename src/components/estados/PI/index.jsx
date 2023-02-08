import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Pi = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "yellowgreen" }} />
              Piauí
            </S.tnx>
            <S.txt>PI</S.txt>
            <S.paragrafo>
              Piauí é um estado no nordeste do Brasil conhecido pelos parques
              nacionais. O Parque Nacional Serra da Capivara, no sudeste, possui
              sítios arqueológicos com pinturas rupestres pré-históricas. Nas
              proximidades, o Parque Nacional Serra das Confusões tem
              gigantescas formações rochosas e grandes áreas de caatinga
              (vegetação semiárida), onde vivem aves em risco de extinção. As
              mangueiras ladeiam as ruas da capital à beira-rio, Teresina.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Praia%20da%20Pedra%20do%20Sal&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKcxS4tVP1zc0TDIrSDO1zDbUUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgAeeOd0PwAAAA&ved=0CBMQ4mhqFwoTCNjQ34L3gP0CFQAAAAAdAAAAABBh&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bda%252BPedra%252Bdo%252BSal%2526skpm%253D/g/11b6pf59k1%2526t%253Dd"
                target="_blank">
                Praia da Pedra do Sal
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Parque%20Ambiental%20Encontro%20dos%20Rios&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKcxS4gIxswzLjA2MtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgA18ltqTwAAAA&ved=0CBUQ4mhqFwoTCNjQ34L3gP0CFQAAAAAdAAAAABBW&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BAmbiental%252BEncontro%252Bdos%252BRios%2526skpm%253D/m/0j1v302%2526t%253Dd"
                target="_blank">
                Parque Ambiental Encontro dos Rios
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Parque%20Potycabana&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKcxS4tFP1zcsNE1KS8muMtVSzE620s_JT04syczPgzOsEktKihKTQcxiAIiBzBY-AAAA&ved=0CBYQ4mhqFwoTCNjQ34L3gP0CFQAAAAAdAAAAABBK&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BPotycabana%2526skpm%253D/g/1q5bfdkz5%2526t%253Dd"
                target="_blank">
                Parque Potycabana
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Parque%20da%20Cidadania&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKcxS4tVP1zc0TKoqSU8qqijRUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgDQXMFJPwAAAA&ved=0CBMQ4mhqFwoTCNjQ34L3gP0CFQAAAAAdAAAAABA-&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252Bda%252BCidadania%2526skpm%253D/g/11bztgbrxt%2526t%253Dd"
                target="_blank">
                Parque da Cidadania
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}