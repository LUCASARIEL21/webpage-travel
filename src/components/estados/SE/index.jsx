import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Se = ({ closeModal }) => {
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
              Sergipe
            </S.tnx>
            <S.txt>SE</S.txt>
            <S.paragrafo>
              Sergipe, o estado mais pequeno do Brasil, situa-se na costa
              atlântica da região do nordeste. A capital, Aracaju, é conhecida
              pelas praias, tal como a Praia da Atalaia, com o seu longo
              passeio. Fundada em 1590, a antiga capital, São Cristóvão, alberga
              edifícios da era colonial, incluindo o convento e a Igreja de São
              Francisco, do século XVII. O Cânion do Xingó, no rio de São
              Francisco, ladeia um popular lago para passeios de barco.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Feira%20do%20Turista%20de%20Aracaju%20Oficial&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTFX4tVP1zc0TEqqMKgoyDXVUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgAPwNS6PwAAAA&ved=0CBMQ4mhqFwoTCOCY3KCIgf0CFQAAAAAdAAAAABBL&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DFeira%252Bdo%252BTurista%252Bde%252BAracaju%252BOficial%2526skpm%253D/g/11bbx0xpm5%2526t%253Dd"
                target="_blank">
                Feira do Turista de Aracaju
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Fundação%20Projeto%20Tamar%20-%20Aracaju&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTFX4tFP1zcsNE0qMCg0StJSzE620s_JT04syczPgzOsEktKihKTQcxiADPVmak-AAAA&ved=0CCEQ4mhqFwoTCOCY3KCIgf0CFQAAAAAdAAAAABBV&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DFunda%2525C3%2525A7%2525C3%2525A3o%252BProjeto%252BTamar%252B-%252BAracaju%2526skpm%253D/g/1q5bp0q2b%2526t%253Dd"
                target="_blank">
                Fundação Projeto Tamar
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Mercado%20Municipal%20Antônio%20Franco&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTFX4tZP1zcsSSs2tDDN1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAHCcpUT0AAAA&ved=0CBwQ4mhqFwoTCOCY3KCIgf0CFQAAAAAdAAAAABA8&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMercado%252BMunicipal%252BAnt%2525C3%2525B4nio%252BFranco%2526skpm%253D/g/1tfs185k%2526t%253Dd"
                target="_blank">
                Mercado Municipal Antônio Franco
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Passarela%20do%20Caranguejo&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTFX4tFP1zesTMlOMTI0NdVSzE620s_JT04syczPgzOsEktKihKTQcxiAKERJH8-AAAA&ved=0CBkQ4mhqFwoTCNCtjfqRqvsCFQAAAAAdAAAAABAr&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPassarela%252Bdo%252BCaranguejo%2526skpm%253D/g/1ydkd2155%2526t%253Dd"
                target="_blank">
                Passarela do Caranguejo
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}