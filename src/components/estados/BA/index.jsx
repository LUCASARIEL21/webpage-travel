import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Ba = ({ closeModal }) => {
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
              Bahia
            </S.tnx>
            <S.txt>BA</S.txt>
            <S.paragrafo>
              A Bahia é um estado do nordeste brasileiro com paisagens que
              variam da costa tropical até a aridez do Sertão. A capital,
              Salvador, é conhecida por seu centro histórico, o Pelourinho, com
              uma rica arquitetura colonial do século XVII e assentado sobre a
              Baía de Todos-os-Santos. O Carnaval da cidade reúne foliões
              fantasiados que dançam ao som do samba e do axé em uma enorme
              festa de rua.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Bas%C3%ADlica%20do%20Senhor%20do%20Bonfim&stick=H4sIAAAAAAAAAONgFuLUz9U3MEy2SDZT4gIxjSosM6qytBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgA--Ur1zwAAAA&ved=0CB4Q4mhqFwoTCJj8wvnhqPsCFQAAAAAdAAAAABAP&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DBas%2525C3%2525ADlica%252Bdo%252BSenhor%252Bdo%252BBonfim%2526skpm%253D/m/02x9hzj%2526t%253Dd"
                target="_blank">
                Basílica do Senhor do Bonfim
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Farol%20da%20Barra%20-%20Forte%20de%20Santo%20Antônio%20da%20Barra%20Salvador&stick=H4sIAAAAAAAAAONgFuLUz9U3MEy2SDZT4tFP1zc0NKpMTyozzNVSzE620s_JT04syczPgzOsEktKihKTQcxiAA8_mmk-AAAA&ved=0CBsQ4mhqFwoTCMjTyp_G__wCFQAAAAAdAAAAABAk&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DFarol%252Bda%252BBarra%252B-%252BForte%252Bde%252BSanto%252BAnt%2525C3%2525B4nio%252Bda%252BBarra%252BSalvador%2526skpm%253D/g/112ygbv1m%2526t%253Dd"
                target="_blank">
                Farol da Barra - Salvador
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Mercado%20Modelo&stick=H4sIAAAAAAAAAONgFuLUz9U3MEy2SDZT4tZP1zc0MigqNjQq01LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAClgZpj0AAAA&ved=0CB4Q4mhqFwoTCMjTyp_G__wCFQAAAAAdAAAAABAb&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMercado%252BModelo%2526skpm%253D/g/120rs12v%2526t%253Dd"
                target="_blank">
                Mercado Modelo - Salvador
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Elevador%20Lacerda&stick=H4sIAAAAAAAAAONgFuLUz9U3MEy2SDZT4tZP1zc0MopPzy1I1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAcyjmbz0AAAA&ved=0CB0Q4mhqFwoTCMjTyp_G__wCFQAAAAAdAAAAABAR&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DElevador%252BLacerda%2526skpm%253D/g/122_gmpc%2526t%253Dd"
                target="_blank">
                Elevador Lacerda - Salvador
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}
