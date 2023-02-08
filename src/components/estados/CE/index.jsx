import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Ce = ({ closeModal }) => {
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
              Ceará
            </S.tnx>
            <S.txt>CE</S.txt>
            <S.paragrafo>
              O Ceará, um estado do nordeste brasileiro, tem um interior
              montanhoso e um litoral atlântico com impressionantes falésias
              vermelhas. O balneário de Canoa Quebrada tem enormes dunas de
              areia rosadas e a Rua Dragão do Mar, muito movimentada e também
              conhecida como Broadway. A cidade isolada de Jericoacoara, cercada
              pelo Parque Nacional de Jericoacoara, repleto de dunas, é famosa
              por suas ruas de areia, pela prática de windsurfe e pelo pôr do
              sol incomum em tons de verde.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Mercado%20Central%20de%20Fortaleza&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyUlT4tZP1zc0Msg1TEk30lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAwJGlsz0AAAA&ved=0CBwQ4mhqFwoTCOD9tqXJ__wCFQAAAAAdAAAAABBj&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMercado%252BCentral%252Bde%252BFortaleza%2526skpm%253D/g/120m1dg2%2526t%253Dd"
                target="_blank">
                Mercado Central de Fortaleza
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Arena%20Castelão&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyUlTAjPNiwySC7QUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAClIgWs7AAAA&ved=0CBgQ4mhqFwoTCOD9tqXJ__wCFQAAAAAdAAAAABBY&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DArena%252BCastel%2525C3%2525A3o%2526skpm%253D/m/07r0cp%2526t%253Dd"
                target="_blank">
                Arena Castelão - Fortaleza
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Beach%20Park&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyUlT4gIxTQoNM8yytRSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAy6DEuzwAAAA&ved=0CBQQ4mhqFwoTCKC8kdXtqPsCFQAAAAAdAAAAABAj&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DBeach%252BPark%2526skpm%253D/m/04q1h6k%2526t%253Dd"
                target="_blank">
                Beach Park - Aquiraz
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Mercado%20dos%20Peixes%20de%20Fortaleza&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyUlT4tZP1zcsSSmLNyo31VLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAYEFGsD0AAAA&ved=0CCAQ4mhqFwoTCOD9tqXJ__wCFQAAAAAdAAAAABBP&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMercado%252Bdos%252BPeixes%252Bde%252BFortaleza%2526skpm%253D/g/1tdv_2w5%2526t%253Dd"
                target="_blank">
                Mercado dos Peixes
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}