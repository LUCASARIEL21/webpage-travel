import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Pr = ({ closeModal }) => {
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
              Paraná
            </S.tnx>
            <S.txt>PR</S.txt>
            <S.paragrafo>
              Paraná é um estado no sul do Brasil que alberga as Cataratas do
              Iguaçu, com centenas de cascatas que se estendem ao longo da
              fronteira com a Argentina. Em torno das cataratas encontra-se o
              Parque Nacional do Iguaçu, uma floresta subtropical com diversas
              espécies selvagens, enquanto no norte se encontra a enorme
              barragem de Itaipu. Centenas de quilómetros a este, perto das
              praias atlânticas de Guaratuba e do grande porto de Paranaguá,
              fica a frondosa capital do estado, Curitiba.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Parque%20das%20Aves&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMU5T4gIx09OT0jJMtRSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgANg9RDzwAAAA&ved=0CB4Q4mhqFwoTCIi18aT4gP0CFQAAAAAdAAAAABBb&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252Bdas%252BAves%2526skpm%253D/m/0ggbfh5%2526t%253Dd"
                target="_blank">
                Parque das Aves - Foz do Iguaçu
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Cataratas%20do%20Igua%C3%A7u&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMU5T4gAxkyvNsrUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAMgT6uI6AAAA&ved=0CBwQ4mhqFwoTCJCI85uEqvsCFQAAAAAdAAAAABAS&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCataratas%252Bdo%252BIgua%2525C3%2525A7u%2526skpm%253D/m/0cy6k%2526t%253Dd"
                target="_blank">
                Cataratas do Iguaçu
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Mercado%20Municipal%20de%20Curitiba&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMU5T4tZP1zc0MipOL04q1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIA34emTz0AAAA&ved=0CBsQ4mhqFwoTCIi18aT4gP0CFQAAAAAdAAAAABBT&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMercado%252BMunicipal%252Bde%252BCuritiba%2526skpm%253D/g/122sgsbs%2526t%253Dd"
                target="_blank">
                Mercado Municipal de Curitiba
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Jardim%20Botânico%20de%20Curitiba&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMU5T4gIxjZOrCivStBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgA5-rVfjwAAAA&ved=0CBQQ4mhqFwoTCIi18aT4gP0CFQAAAAAdAAAAABAV&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DJardim%252BBot%2525C3%2525A2nico%252Bde%252BCuritiba%2526skpm%253D/m/03czqxf%2526t%253Dd"
                target="_blank">
                Jardim Botânico de Curitiba
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}