import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Mt = ({ closeModal }) => {
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
              Mato Grosso
            </S.tnx>
            <S.txt>MT</S.txt>
            <S.paragrafo>
              Mato Grosso, um grande estado no centro-oeste brasileiro, é
              coberto na maioria pela floresta tropical amazónica, as zonas
              húmidas e as planícies da savana. A capital, Cuiabá, é um centro
              de viagens que remonta à corrida ao ouro do século XVIII. Nas
              proximidades, o Parque Nacional da Chapada dos Guimarães possui
              áreas de caminhada com penhascos em arenito, quedas de água e
              cavernas. As extensas zonas húmidas do Pantanal albergam diversas
              espécies selvagens, incluindo araras, caimões e jaguares.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Parque%20Tia%20Nair&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyalU4tVP1zc0TDYrKU6pKLbUUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgASWtKyPwAAAA&ved=0CBgQ4mhqFwoTCLCXo7rb__wCFQAAAAAdAAAAABBD&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BTia%252BNair%2526skpm%253D/g/11c6tsdxs9%2526t%253Dd"
                target="_blank">
                Parque Tia Nair - Cuiabá
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Parque%20Mãe%20Bonifácia&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyalU4tZP1zc0MsowyEvO1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIA08-hhD0AAAA&ved=0CBQQ4mhqFwoTCLCXo7rb__wCFQAAAAAdAAAAABA6&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BM%2525C3%2525A3e%252BBonif%2525C3%2525A1cia%2526skpm%253D/g/122h0nck%2526t%253Dd"
                target="_blank">
                Parque Mãe Bonifácia
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Parque%20das%20Águas&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyalU4tVP1zc0TM4zLSwuM03RUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgCbR1H8PwAAAA&ved=0CBMQ4mhqFwoTCLCXo7rb__wCFQAAAAAdAAAAABAu&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252Bdas%252B%2525C3%252581guas%2526skpm%253D/g/11cn5qsv5d%2526t%253Dd"
                target="_blank">
                Parque das Águas - Cuiabá
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Praça%20Ipiranga&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyalU4tFP1zesTLc0LjQqL9NSzE620s_JT04syczPgzOsEktKihKTQcxiAMFb8F0-AAAA&ved=0CBsQ4mhqFwoTCLCXo7rb__wCFQAAAAAdAAAAABAd&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPra%2525C3%2525A7a%252BIpiranga%2526skpm%253D/g/1yg93q2wv%2526t%253Dd"
                target="_blank">
                Praça Ipiranga - Cuiabá
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}