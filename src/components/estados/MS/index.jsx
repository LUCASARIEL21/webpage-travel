import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Ms = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "skyblue" }} />
              Mato Grosso do Sul
            </S.tnx>
            <S.txt>MS</S.txt>
            <S.paragrafo>
              Mato Grosso do Sul é uma das 27 unidades federativas do Brasil.
              Localiza-se no sul da Região Centro-Oeste. Limita-se com cinco
              estados brasileiros: Mato Grosso, Goiás e Minas Gerais, São Paulo
              e Paraná; e dois países sul-americanos: Paraguai e Bolívia.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Santuário%20Estadual%20Nossa%20Senhora%20Perpétuo%20Socorro&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyTNV4tZP1zcsSy-3LCxI1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIA2-0EZz0AAAA&ved=0CBsQ4mhqFwoTCKjpq6LZ__wCFQAAAAAdAAAAABBp&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DSantu%2525C3%2525A1rio%252BEstadual%252BNossa%252BSenhora%252BPerp%2525C3%2525A9tuo%252BSocorro%2526skpm%253D/g/1vgw9qpc%2526t%253Dd"
                target="_blank">
                Santuário Estadual Nossa Senhora Perpétuo Socorro
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Parque%20das%20Na%C3%A7%C3%B5es%20Ind%C3%ADgenas&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyTNV4tZP1zc0MrQ0NDEy1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAgC52UD0AAAA&ved=0CB4Q4mhqFwoTCNDpncj0qfsCFQAAAAAdAAAAABAT&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252Bdas%252BNa%2525C3%2525A7%2525C3%2525B5es%252BInd%2525C3%2525ADgenas%2526skpm%253D/g/12191423%2526t%253Dd"
                target="_blank">
                Parque das Nações Indígenas
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Mercadão%20Municipal%20Campo%20Grande-%20MS&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyTNV4tFP1zcsNE3Ky8oxz9VSzE620s_JT04syczPgzOsEktKihKTQcxiAOLpIHM-AAAA&ved=0CBwQ4mhqFwoTCKjpq6LZ__wCFQAAAAAdAAAAABBL&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMercad%2525C3%2525A3o%252BMunicipal%252BCampo%252BGrande-%252BMS%2526skpm%253D/g/1q5bnjl7m%2526t%253Dd"
                target="_blank">
                Mercadão Municipal Campo Grande
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Recanto%20Ecol%C3%B3gico%20Rio%20da%20Prata%20-%20Flutua%C3%A7%C3%A3o%20em%20Bonito%20MS&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyTNV4tFP1zesTMuIz04zNtRSzE620s_JT04syczPgzOsEktKihKTQcxiAEVsT8M-AAAA&ved=0CCYQ4mhqFwoTCNDpncj0qfsCFQAAAAAdAAAAABAm&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DRecanto%252BEcol%2525C3%2525B3gico%252BRio%252Bda%252BPrata%252B-%252BFlutua%2525C3%2525A7%2525C3%2525A3o%252Bem%252BBonito%252BMS%2526skpm%253D/g/1yfh_kf31%2526t%253Dd"
                target="_blank">
                Praça Ary Coelho
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}