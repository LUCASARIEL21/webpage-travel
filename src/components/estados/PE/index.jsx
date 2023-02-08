import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Pe = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "blueviolet" }} />
              Pernambuco
            </S.tnx>
            <S.txt>PE</S.txt>
            <S.paragrafo>
              Pernambuco é um estado no nordeste do Brasil, no Oceano Atlântico.
              A sua capital moderna, o Recife, inclui um porto, a cidade velha e
              a popular área balnear de Boa Viagem. Ao largo da costa, o
              arquipélago vulcânico de Fernando de Noronha possui uma linha
              costeira dentada, praias poucos urbanizadas e um parque marítimo.
              A sul do Recife, a praia de Porto de Galinhas, protegida por um
              recife, oferece piscinas naturais. A norte encontra-se Olinda, uma
              cidade colonial situada entre uma vegetação exuberante.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Parque%20da%20Jaqueira&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKShQ4tFP1zc0jK9ML7cwKNNSzE620s_JT04syczPgzOsEktKihKTQcxiAGeIon4-AAAA&ved=0CBgQ4mhqFwoTCLDwwdr1gP0CFQAAAAAdAAAAABAs&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252Bda%252BJaqueira%2526skpm%253D/g/11_ygw80v%2526t%253Dd"
                target="_blank">
                Parque da Jaqueira
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Pracinha%20de%20Boa%20Viagem&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKShQ4tVP1zc0TCrJTTY1KUnRUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgDT79oXPwAAAA&ved=0CBMQ4mhqFwoTCLDwwdr1gP0CFQAAAAAdAAAAABA6&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPracinha%252Bde%252BBoa%252BViagem%2526skpm%253D/g/11btmc54td%2526t%253Dd"
                target="_blank">
                Praça de Boa Viagem
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Praça%20do%20Marco%20Zero&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKShQ4tFP1zc0qqxMT0uuMtRSzE620s_JT04syczPgzOsEktKihKTQcxiACtqMVI-AAAA&ved=0CBoQ4mhqFwoTCLDwwdr1gP0CFQAAAAAdAAAAABAW&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPra%2525C3%2525A7a%252Bdo%252BMarco%252BZero%2526skpm%253D/g/12yygfcz1%2526t%253Dd"
                target="_blank">
                Praça do Marco Zero
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Praia%20dos%20Carneiros&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKShQ4tZP1zc0MjQuyyjJ0FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAZsN3Oj0AAAA&ved=0CBsQ4mhqFwoTCLDwwdr1gP0CFQAAAAAdAAAAABAM&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bdos%252BCarneiros%2526skpm%253D/g/1213vhth%2526t%253Dd"
                target="_blank">
                Praia dos Carneiros
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}