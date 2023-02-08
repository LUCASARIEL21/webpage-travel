import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Ap = ({ closeModal }) => {
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
              Amapá
            </S.tnx>
            <S.txt>AP</S.txt>
            <S.paragrafo>
              Amapá é um estado no norte do Brasil que faz fronteira com o
              Suriname, a Guiana Francesa e o Oceano Atlântico. A floresta
              amazónica abrange uma grande parte da sua área e o rio Oiapoque
              faz parte da sua fronteira a norte. No sul, a capital, Macapá, é
              conhecida pela Fortaleza de São José de Macapá, situada à
              beira-mar, um forte português do século XVIII, e pelo Monumento do
              Marco Zero, um obelisco que marca o equador.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Fortaleza%20de%20S%C3%A3o%20Jos%C3%A9%20de%20Macap%C3%A1&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIybJU4tVP1zc0TDItM6wwS8vWUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgAgkFEtPwAAAA&ved=0CBQQ4mhqFwoTCNCSl_LfqPsCFQAAAAAdAAAAABAR&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DFortaleza%252Bde%252BS%2525C3%2525A3o%252BJos%2525C3%2525A9%252Bde%252BMacap%2525C3%2525A1%2526skpm%253D/g/11b5v1x6fk%2526t%253Dd"
                target="_blank">
                Fortaleza de São José de Macapá
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Villa%20Nova%20Shopping&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIybJU4tVP1zc0TDMwrkwyt8zSUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgAKQJ-FPwAAAA&ved=0CB0Q4mhqFwoTCOCNkNvE__wCFQAAAAAdAAAAABBS&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DVilla%252BNova%252BShopping%2526skpm%253D/g/11f03yb79j%2526t%253Dd"
                target="_blank">
                Villa Nova Shopping
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Parque%20do%20Forte&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIybJU4tZP1zc0MsowN0wx01LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAo1iAgz0AAAA&ved=0CBQQ4mhqFwoTCOCNkNvE__wCFQAAAAAdAAAAABBJ&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252Bdo%252BForte%2526skpm%253D/g/122h71d6%2526t%253Dd"
                target="_blank">
                Parque do Forte de Macapá
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Macapá%20Shopping&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIybJU4tZP1zcsTyvLKyg211LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAroeQ_z0AAAA&ved=0CBkQ4mhqFwoTCOCNkNvE__wCFQAAAAAdAAAAABAZ&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMacap%2525C3%2525A1%252BShopping%2526skpm%253D/g/1wfvnps7%2526t%253Dd"
                target="_blank">
                Macapá Shopping Center
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}