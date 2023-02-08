import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Pa = ({ closeModal }) => {
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
              Pará
            </S.tnx>
            <S.txt>PA</S.txt>
            <S.paragrafo>
              Pará, um estado no norte do Brasil, é onde se encontra o Parque
              Nacional da Amazônia. Protegendo uma extensa faixa da exuberante e
              densa Floresta Amazônica, o parque é lar de milhares de espécies
              da vida selvagem. Boa parte dela é alagada todos os anos, tornando
              o acesso a áreas distantes somente por barco. Próxima da
              desembocadura do Rio Amazonas está Belém, a capital do Pará. Ela é
              conhecida pela arquitetura colonial e pelo mercado Ver-o-Peso às
              margens do rio.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Parque%20Estadual%20do%20Utinga%20Camillo%20Vianna&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyStQ4tVP1zc0TDYtzylIN8vQUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgDL6nHfPwAAAA&ved=0CBQQ4mhqFwoTCOjTkvje__wCFQAAAAAdAAAAABBf&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BEstadual%252Bdo%252BUtinga%252BCamillo%252BVianna%2526skpm%253D/g/11c5wlpg6h%2526t%253Dd"
                target="_blank">
                Parque Estadual do Utinga
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Mercado%20Ver-o-Peso&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyStQ4gIxjctTzPJKtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAv0BxbjwAAAA&ved=0CBgQ4mhqFwoTCOjTkvje__wCFQAAAAAdAAAAABBT&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMercado%252BVer-o-Peso%2526skpm%253D/m/03wd6nt%2526t%253Dd"
                target="_blank">
                Mercado Ver-o-Peso
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Estação%20das%20Docas&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyStQ4tZP1zc0MsgrzMg21lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAr7IJQj0AAAA&ved=0CBgQ4mhqFwoTCOjTkvje__wCFQAAAAAdAAAAABBC&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DEsta%2525C3%2525A7%2525C3%2525A3o%252Bdas%252BDocas%2526skpm%253D/g/120nqhk3%2526t%253Dd"
                target="_blank">
                Estação das Docas - Belém
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Parque%20Zoobot%C3%A2nico%20Mangal%20das%20Gar%C3%A7as&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyStQ4tZP1zc0MqqKLykq01LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAAfgOlj0AAAA&ved=0CBgQ4mhqFwoTCMjnofz4qfsCFQAAAAAdAAAAABAh&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BZoobot%2525C3%2525A2nico%252BMangal%252Bdas%252BGar%2525C3%2525A7as%2526skpm%253D/g/122z_trv%2526t%253Dd"
                target="_blank">
                Parque Zoobotânico Mangal das Garças
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}