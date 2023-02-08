import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Rn = ({ closeModal }) => {
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
              Rio Grande do Norte
            </S.tnx>
            <S.txt>RN</S.txt>
            <S.paragrafo>
              Rio Grande do Norte é um estado na extremidade nordeste do Brasil.
              A capital, Natal, fica numa costa repleta de praias onde se
              encontra o Forte dos Reis Magos, em forma de estrela, um forte
              português do século XVI. Ponta Negra é uma praia enquadrada pela
              enorme duna, Morro do Careca, um símbolo da cidade. A sul, a Praia
              de Pipa é uma estância célebre pelo surf e pelos golfinhos.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Arena%20das%20Dunas&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKUpW4gIxjZPzyqoKtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAbyY8AzwAAAA&ved=0CBgQ4mhqFwoTCKCI5aj-gP0CFQAAAAAdAAAAABBW&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DArena%252Bdas%252BDunas%2526skpm%253D/m/03cnvzp%2526t%253Dd"
                target="_blank">
                Arena das Dunas
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Aquário%20Natal&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKUpW4tZP1zc0MjQ3NIg30VLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAqn21dj0AAAA&ved=0CBsQ4mhqFwoTCKCI5aj-gP0CFQAAAAAdAAAAABBM&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DAqu%2525C3%2525A1rio%252BNatal%2526skpm%253D/g/121710_4%2526t%253Dd"
                target="_blank">
                Aquário de Natal
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Praia%20dos%20Artistas&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKUpW4tZP1zc0MrRMyqko11LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAno8-Mj0AAAA&ved=0CBEQ4mhqFwoTCKCI5aj-gP0CFQAAAAAdAAAAABBB&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bdos%252BArtistas%2526skpm%253D/g/1219blxw%2526t%253Dd"
                target="_blank">
                Praia dos Artistas
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?hl=pt-BR&gl=br&q=Morro+do+Careca+-+Praia+de+Ponta+Negra+s/n+-+Ponta+Negra,+RN,+59090-210&ludocid=9504729994915527041&lsig=AB86z5Wy6NZD5cNEGnwx0tqLwNkw&ved=0CBcQ9aIFahcKEwigiOWo_oD9AhUAAAAAHQAAAAAQOw&hl=pt-BR&gl=br"
                target="_blank">
                Morro do Careca
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}