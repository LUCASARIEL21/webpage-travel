import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Go = ({ closeModal }) => {
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
              Goiás
            </S.tnx>
            <S.txt>GO</S.txt>
            <S.paragrafo>
              Goiás, um estado no centro do Brasil, alberga a savana acidentada,
              cidades da era colonial e uma agricultura de grande escala. O
              Parque Nacional da Chapada dos Veadeiros é uma reserva de
              montanhas paisagísticas com trilhos, rios, desfiladeiros e quedas
              de água. Fundadas durante o século XVIII, as cidades do ciclo de
              ouro de Pirenópolis e Goiás Velho (antiga capital do estado)
              distinguem-se pela arquitetura colonial portuguesa e pelas
              vibrantes festas cristãs.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Parque%20Vaca%20Brava&stick=H4sIAAAAAAAAAONgFuLUz9U3MDSqrIpX4tZP1zc0Mkq3KMvO0FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAa4npVj0AAAA&ved=0CBgQ4mhqFwoTCIj6suLP__wCFQAAAAAdAAAAABAx&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BVaca%252BBrava%2526skpm%253D/g/122g8vkh%2526t%253Dd"
                target="_blank">
                Parque Vaca Brava
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=diRoma%20Acqua%20Park&stick=H4sIAAAAAAAAAONgFuLUz9U3MDSqrIpX4tVP1zc0TDI3KykvKSvTUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgBUBS90PwAAAA&ved=0CBMQ4mhqFwoTCIj6suLP__wCFQAAAAAdAAAAABAq&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DdiRoma%252BAcqua%252BPark%2526skpm%253D/g/11b76twtvv%2526t%253Dd"
                target="_blank">
                diRoma Acqua Park
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Hot%20Park&stick=H4sIAAAAAAAAAONgFuLUz9U3MDSqrIpX4tFP1zc0NC5MKjY2ytVSzE620s_JT04syczPgzOsEktKihKTQcxiAG_kwyA-AAAA&ved=0CB8Q4mhqFwoTCLCMv5vvqfsCFQAAAAAdAAAAABAs&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DHot%252BPark%2526skpm%253D/g/113qbs32m%2526t%253Dd"
                target="_blank">
                Hot Park - Rio Quente
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Parque%20Flamboyant&stick=H4sIAAAAAAAAAONgFuLUz9U3MDSqrIpX4tFP1zeszDCPrzDPytJSzE620s_JT04syczPgzOsEktKihKTQcxiAFkFlZA-AAAA&ved=0CBgQ4mhqFwoTCIj6suLP__wCFQAAAAAdAAAAABAe&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BFlamboyant%2526skpm%253D/g/1yh7_x7jj%2526t%253Dd"
                target="_blank">
                Parque Flamboyant
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}