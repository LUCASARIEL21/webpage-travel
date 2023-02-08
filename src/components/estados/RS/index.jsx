import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Rs = ({ closeModal }) => {
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
              Rio Grande do sul
            </S.tnx>
            <S.txt>RS</S.txt>
            <S.paragrafo>
              Rio Grande do Sul é o estado mais a sul do Brasil e faz fronteira
              com a Argentina e o Uruguai. A nordeste, a montanhosa Serra Gaúcha
              alberga a região vinícola do Vale dos Vinhedos e inclui cidades
              turísticas de estilo alemão como Gramado e Canela, famosas pelas
              paisagens naturais pitorescas. Porto Alegre, a capital, é um
              grande porto com estruturas clássicas como o Mercado Público e a
              Catedral Metropolitana, no centro histórico.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Bondinhos%20Aéreos%20-%20Parques%20Da%20Serra&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJt0xR4tZP1zcsScnIjU_O1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAXQDJJT0AAAA&ved=0CBcQ4mhqGAoTCLjcwtKDgf0CFQAAAAAdAAAAABCfAg&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DBondinhos%252BA%2525C3%2525A9reos%252B-%252BParques%252BDa%252BSerra%2526skpm%253D/g/1tdhm_ck%2526t%253Dd"
                target="_blank">
                Bondinhos Aéreos - Parques Da Serra
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Mini%20Mundo&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJt0xR4tZP1zc0MqrIji_K1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIA1HOthD0AAAA&ved=0CBEQ4mhqGAoTCLjcwtKDgf0CFQAAAAAdAAAAABCZAg&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMini%252BMundo%2526skpm%253D/g/122xk_rk%2526t%253Dd"
                target="_blank">
                Parque Mini Mundo
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Mercado%20Público%20de%20Porto%20Alegre&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJt0xR4gIx08urjA1ytBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAMcnAjTwAAAA&ved=0CBsQ4mhqGAoTCLjcwtKDgf0CFQAAAAAdAAAAABCTAg&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMercado%252BP%2525C3%2525BAblico%252Bde%252BPorto%252BAlegre%2526skpm%253D/m/0gwz30l%2526t%253Dd"
                target="_blank">
                Mercado Público de Porto Alegre
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Parque%20Farroupilha%20(Redenção)&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJt0xR4gIx03NTzCyNtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAYbUuMTwAAAA&ved=0CBgQ4mhqFwoTCLjcwtKDgf0CFQAAAAAdAAAAABBF&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BFarroupilha%252B(Reden%2525C3%2525A7%2525C3%2525A3o)%2526skpm%253D/m/0gmd692%2526t%253Dd"
                target="_blank">
                Parque Farroupilha (Redenção)
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}
