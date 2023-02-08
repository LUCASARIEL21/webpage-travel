import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Ro = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "blue" }} />
              Rondônia
            </S.tnx>
            <S.txt>RO</S.txt>
            <S.paragrafo>
              Rondônia é uma das 27 unidades federativas do Brasil. Está
              localizado na região Norte e tem como limites os estados de Mato
              Grosso a leste, Amazonas a norte, Acre a oeste e o Estado
              Plurinacional da Bolívia a oeste e sul.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Mercado%20Cultural%20de%20Porto%20Velho&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTZX4tVP1zc0TDI3LSg3NcvTUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgD995BaPwAAAA&ved=0CBwQ4mhqFwoTCLjPqPOAgf0CFQAAAAAdAAAAABBP&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMercado%252BCultural%252Bde%252BPorto%252BVelho%2526skpm%253D/g/11b75pw56n%2526t%253Dd"
                target="_blank">
                Mercado Cultural de Porto Velho
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Park%20Shopping%20Vilhena&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTZX4tVP1zc0TKsoyzYxjK_SUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgDQWjiqPwAAAA&ved=0CBwQ4mhqFwoTCLjPqPOAgf0CFQAAAAAdAAAAABBF&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPark%252BShopping%252BVilhena%2526skpm%253D/g/11fxvk41_z%2526t%253Dd"
                target="_blank">
                Park Shopping Vilhena
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=IG%20Shopping%20Ariquemes&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTZX4tVP1zc0TDIzz7FMz0rXUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgBHPretPwAAAA&ved=0CB0Q4mhqFwoTCLjPqPOAgf0CFQAAAAAdAAAAABA-&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DIG%252BShopping%252BAriquemes%2526skpm%253D/g/11b67l9gjg%2526t%253Dd"
                target="_blank">
                IG Shopping Ariquemes
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Porto%20Velho%20Shopping&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTZX4tZP1zc0MjTOSks31FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAEJ7xkD0AAAA&ved=0CB0Q4mhqFwoTCLjPqPOAgf0CFQAAAAAdAAAAABA1&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPorto%252BVelho%252BShopping%2526skpm%253D/g/1213jfg1%2526t%253Dd"
                target="_blank">
                Porto Velho Shopping
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}