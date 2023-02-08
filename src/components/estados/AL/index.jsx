import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Al = ({ closeModal, modal }) => {
  return (
    <Dialog
      open={modal}
      onClose={() => closeModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.div>
        <S.buttonS onClick={() => closeModal(false)}>X</S.buttonS>
        <S.container>
          <S.ct>
            <S.tnx>
              <LocationOnIcon style={{ color: "#4891ed" }} />
              Alagoas
            </S.tnx>
            <S.txt>AC</S.txt>
            <S.paragrafo>
              O Acre é um dos sete estados situados na região Norte do Brasil.
              Sua capital é Rio Branco e a sigla AC. A população acreana é de
              803,5 mil habitantes, conforme a estimativa do IBGE (Instituto
              Brasileiro de Geografia e Estatística) para 2015. A área do Acre
              chega a 16.123,739 km2, de acordo com o IBGE. Hoje, há 4,47
              habitantes para cada quilômetro quadrado do estado. As cidades
              mais populosas, além da capital Rio Branco, são Cruzeiro do Sul,
              Feijó, Tarauacá e Sena Madureira. No total, o território abriga 22
              municípios.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Praia%20de%20Antunes&stick=H4sIAAAAAAAAAONgFuLUz9U3MDStqqhQ4tVP1zc0TDfMKq80NjbWUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgDKTXrwPwAAAA&ved=0CBEQ4mhqGAoTCMifzurB__wCFQAAAAAdAAAAABCRAQ&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bde%252BAntunes%2526skpm%253D/g/11g1jwy333%2526t%253Dd"
                target="_blank">
                Praia de Antunes - Maragogi
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Hibiscus%20Beach%20Club%20%7C%20Maceió&stick=H4sIAAAAAAAAAONgFuLUz9U3MDStqqhQ4tVP1zc0TDJLKo6vMivRUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgDkbY9HPwAAAA&ved=0CBcQ4mhqGAoTCMifzurB__wCFQAAAAAdAAAAABCEAQ&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DHibiscus%252BBeach%252BClub%252B%25257C%252BMacei%2525C3%2525B3%2526skpm%253D/g/11b6bs_z6t%2526t%253Dd"
                target="_blank">
                Hibiscus Beach Club
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Pavilhão%20do%20Artesanato&stick=H4sIAAAAAAAAAONgFuLUz9U3MDStqqhQ4tZP1zcsNzMzzSnO01LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAcEGhGT0AAAA&ved=0CBMQ4mhqFwoTCMifzurB__wCFQAAAAAdAAAAABB7&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPavilh%2525C3%2525A3o%252Bdo%252BArtesanato%2526skpm%253D/g/1w665lsn%2526t%253Dd"
                target="_blank">
                Pavilhão do Artesanato
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Praia%20do%20Gunga&stick=H4sIAAAAAAAAAONgFuLUz9U3MDStqqhQ4gIxTQuMkooMtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgACJNVNjwAAAA&ved=0CBEQ4mhqFwoTCMifzurB__wCFQAAAAAdAAAAABBw&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bdo%252BGunga%2526skpm%253D/m/05p2br0%2526t%253Dd"
                target="_blank">
                Praia do Gunga - Maceió
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}
