import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Mg = ({ closeModal }) => {
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
              Minas Gerais
            </S.tnx>
            <S.txt>MG</S.txt>
            <S.paragrafo>
              Minas Gerais, um grande estado continental no sudeste do Brasil, é
              conhecido por cidades da era colonial que remetem à corrida do
              ouro no país no século 18. Entre elas estão São João del Rei,
              Tiradentes e Ouro Preto, a antiga capital, todas com ruas de
              paralelepípedo, mansões ornamentadas e igrejas barrocas decoradas
              pelo escultor Aleijadinho.O famoso trem a vapor Maria Fumaça liga
              Tiradentes a São João del Rei.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Praça%20Sete%20de%20Setembro%20Belo%20Horizonte&stick=H4sIAAAAAAAAAONgFuLUz9U3MEzPMKtS4gIx48uMLErMtRSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAUfAJYTwAAAA&ved=0CBQQ4mhqFwoTCMjnmLvU__wCFQAAAAAdAAAAABB6&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPra%2525C3%2525A7a%252BSete%252Bde%252BSetembro%252BBelo%252BHorizonte%2526skpm%253D/m/0_v28t7%2526t%253Dd"
                target="_blank">
                Praça Sete de Setembro Belo Horizonte
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Mineirão&stick=H4sIAAAAAAAAAONgFuLUz9U3MEzPMKtSAjPNjAzjq7QUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYACV1oN07AAAA&ved=0CBYQ4mhqFwoTCMjnmLvU__wCFQAAAAAdAAAAABA4&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMineir%2525C3%2525A3o%2526skpm%253D/m/0621_z%2526t%253Dd"
                target="_blank">
                Estádio Mineirão - Belo Horizonte
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Mercado%20Central%20de%20Belo%20Horizonte&stick=H4sIAAAAAAAAAONgFuLUz9U3MEzPMKtS4tZP1zcsSUkrS85N0VLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAHK9gRT0AAAA&ved=0CB0Q4mhqFwoTCMjnmLvU__wCFQAAAAAdAAAAABAq&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMercado%252BCentral%252Bde%252BBelo%252BHorizonte%2526skpm%253D/g/1tdfvcmd%2526t%253Dd"
                target="_blank">
                Mercado Central de Belo Horizonte
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Praça%20da%20Liberdade%20Belo%20Horizonte&stick=H4sIAAAAAAAAAONgFuLUz9U3MEzPMKtS4gIxTQstClJStBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAzZPP5DwAAAA&ved=0CB4Q4mhqFwoTCMjnmLvU__wCFQAAAAAdAAAAABAZ&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPra%2525C3%2525A7a%252Bda%252BLiberdade%252BBelo%252BHorizonte%2526skpm%253D/m/05q8pdd%2526t%253Dd"
                target="_blank">
                Praça da Liberdade Belo Horizonte
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}
