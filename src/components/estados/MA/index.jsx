import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Ma = ({ closeModal }) => {
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
              Maranhão
            </S.tnx>
            <S.txt>MA</S.txt>
            <S.paragrafo>
              Maranhão, estado no nordeste brasileiro, é formado em parte pela
              Floresta Amazônica e pelas praias ao longo do Oceano Atlântico.
              Próximo à cidade de Barreirinhas, grandes dunas de areia branca
              criam paisagens que lembram um deserto no Parque Nacional Lençóis
              Maranhenses, onde lagoas de água fresca nas quais se pode nadar se
              formam durante a temporada de chuvas. É na capital, São Luís, que
              se encontra o agitado bairro histórico conhecido como Reviver.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Parque%20Nacional%20dos%20Len%C3%A7%C3%B3is%20Maranhenses&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMa5UAjOTcrIyjLUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAH_tWOU7AAAA&ved=0CBYQ4mhqFwoTCICm9J7xqfsCFQAAAAAdAAAAABAL&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BNacional%252Bdos%252BLen%2525C3%2525A7%2525C3%2525B3is%252BMaranhenses%2526skpm%253D/m/0bljh3%2526t%253Dd"
                target="_blank">
                Lençóis Maranhenses
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Valparaíso%20Adventure%20Park&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMa5U4tVP1zc0zDDOLSw0LsnVUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgCYr7zCPwAAAA&ved=0CB0Q4mhqFwoTCLir3vvS__wCFQAAAAAdAAAAABAq&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DValpara%2525C3%2525ADso%252BAdventure%252BPark%2526skpm%253D/g/11h3mqq3tm%2526t%253Dd"
                target="_blank">
                Valparaíso Adventure Park
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Pal%C3%A1cio%20dos%20Le%C3%B5es&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMa5U4tZP1zc0MsooKDTJ0FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAB13beT0AAAA&ved=0CBQQ4mhqFwoTCICm9J7xqfsCFQAAAAAdAAAAABAe&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPal%2525C3%2525A1cio%252Bdos%252BLe%2525C3%2525B5es%2526skpm%253D/g/122hpq4h%2526t%253Dd"
                target="_blank">
                Palácio dos Leões - São Luís
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Praia%20do%20Araçagy&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMa5U4tZP1zc0MjIzyUrP0FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAJTchzD0AAAA&ved=0CBkQ4mhqFwoTCLir3vvS__wCFQAAAAAdAAAAABAf&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bdo%252BAra%2525C3%2525A7agy%2526skpm%253D/g/12264jgh%2526t%253Dd"
                target="_blank">
                Praia do Araçagy - São José de Ribamar
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}