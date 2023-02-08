import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Es = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "pink" }} />
              Espírito Santo
            </S.tnx>
            <S.txt>ES</S.txt>
            <S.paragrafo>
              O Espírito Santo, estado da região Sudeste do Brasil, é conhecido
              por suas praias tropicais e áreas naturais montanhosas
              preservadas. Fundada em 1551, Vitória, capital e cidade portuária,
              tem um pequeno centro da era colonial. Do outro lado da estreita
              baía de Vitória, fica Vila Velha, com a movimentada Praia da Costa
              e o Convento da Penha, construção do século XVI que fica no alto
              de um penhasco e oferece uma vista panorâmica.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Praia%20do%20Morro&stick=H4sIAAAAAAAAAONgFuLUz9U3MDIsqUxS4tFP1zeszC0zzDMwtdBSzE620s_JT04syczPgzOsEktKihKTQcxiAOVjBMM-AAAA&ved=0CBEQ4mhqFwoTCKiJlqvO__wCFQAAAAAdAAAAABBX&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bdo%252BMorro%2526skpm%253D/g/1ymv1n058%2526t%253Dd"
                target="_blank">
                Praia do Morro - Guarapari
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Shopping%20Vitória&stick=H4sIAAAAAAAAAONgFuLUz9U3MDIsqUxS4tFP1zcsqKo0KC7OTdNSzE620s_JT04syczPgzOsEktKihKTQcxiAEccd5E-AAAA&ved=0CCAQ4mhqFwoTCKiJlqvO__wCFQAAAAAdAAAAABAv&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DShopping%252BVit%2525C3%2525B3ria%2526skpm%253D/g/1pzy0ssmf%2526t%253Dd"
                target="_blank">
                Shopping Center Vitória
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Convento%20da%20Penha&stick=H4sIAAAAAAAAAONgFuLUz9U3MDIsqUxSAjONDSwKLbUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAIUNoBw7AAAA&ved=0CB4Q4mhqFwoTCNjXidegqfsCFQAAAAAdAAAAABA2&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DConvento%252Bda%252BPenha%2526skpm%253D/m/0308q9%2526t%253Dd"
                target="_blank">
                Convento da Penha
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Praça%20dos%20Namorados&stick=H4sIAAAAAAAAAONgFuLUz9U3MDIsqUxS4tFP1zcsNDMxKzYysNRSzE620s_JT04syczPgzOsEktKihKTQcxiAPgsk4c-AAAA&ved=0CBEQ4mhqFwoTCKiJlqvO__wCFQAAAAAdAAAAABAe&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPra%2525C3%2525A7a%252Bdos%252BNamorados%2526skpm%253D/g/1q646s209%2526t%253Dd"
                target="_blank">
                Praça dos Namorados
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}