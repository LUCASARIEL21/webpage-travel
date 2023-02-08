import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Rr = ({ closeModal }) => {
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
              Roraima
            </S.tnx>
            <S.txt>RR</S.txt>
            <S.paragrafo>
              Roraima, o estado mais a norte do Brasil, é conhecido pela
              Floresta Amazónica. A capital, Boa Vista, na margem oeste de Rio
              Branco, fica próxima dos parques nacionais da Serra da Mocidade, a
              sudoeste, e do Monte Roraima, a norte. Com penhascos íngremes e um
              misterioso cume plano, o Monte Roraima, partilhado com a Venezuela
              e a Guiana, foi, presumivelmente, a inspiração de Sir Arthur Conan
              Doyle para "O Mundo Perdido".
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Teatro%20Municipal%20de%20Boa%20Vista&stick=H4sIAAAAAAAAAONgFuLUz9U3MCwpjM9S4tVP1zc0TKoqSitOiy_XUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgDn4T4wPwAAAA&ved=0CBkQ4mhqFwoTCMD-_oqCgf0CFQAAAAAdAAAAABBa&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DTeatro%252BMunicipal%252Bde%252BBoa%252BVista%2526skpm%253D/g/11bzrfsf_w%2526t%253Dd"
                target="_blank">
                Teatro Municipal de Boa Vista
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?hl=pt-BR&gl=br&q=Parque+do+Rio+Branco+-+R.+Castelo+Branco,+236+-+São+Vicente,+Boa+Vista+-+RR,+69303-057&ludocid=8172797077291053037&lsig=AB86z5W-MOju9ZMVwRsvMAc0doO4&ved=0CBcQ9aIFahcKEwjA_v6KgoH9AhUAAAAAHQAAAAAQUA&hl=pt-BR&gl=br"
                target="_blank">
                Parque do Rio Branco
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Orla%20Taumanan&stick=H4sIAAAAAAAAAONgFuLUz9U3MCwpjM9S4tZP1zc0MjQyTSnO1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIANwcEqz0AAAA&ved=0CB4Q4mhqFwoTCNigkqGLqvsCFQAAAAAdAAAAABAY&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DOrla%252BTaumanan%2526skpm%253D/g/12125dsk%2526t%253Dd"
                target="_blank">
                Orla Taumanan - Boa Vista
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Cine%20Araujo&stick=H4sIAAAAAAAAAONgFuLUz9U3MCwpjM9S4tVP1zc0TCovqMrOM8rQUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgAZfQLRPwAAAA&ved=0CBsQ4mhqFwoTCMD-_oqCgf0CFQAAAAAdAAAAABBA&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCine%252BAraujo%2526skpm%253D/g/11bwpzkn2h%2526t%253Dd"
                target="_blank">
                Cinematográfica Araujo
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}