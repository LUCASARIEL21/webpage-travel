import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Ac = ({ closeModal, modal }) => {
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
              <LocationOnIcon style={{ color: "yellowgreen" }} />
              Acre
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
                href="https://www.google.com/search?q=Catedral+Nossa+Senhora+de+Nazaré&sxsrf=AJOqlzXgLdJUztTSxzHlMCjAODu5gW_9Tg%3A1675638360759&ei=WDbgY-z9LcOQ1sQPsf-O6A8&ved=0ahUKEwjsiY-qv__8AhVDiJUCHbG_A_0Q4dUDCA8&oq=Catedral+Nossa+Senhora+de+Nazaré&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQDEoECEEYAEoECEYYAFAAWABgAGgAcAF4AIABAIgBAJIBAJgBAA&sclient=gws-wiz-serp"
                target="_blank">
                Catedral Nossa Senhora de Nazaré
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Horto+Florestal+de+Rio+Branco&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxISa9S4tFP1zcsKKlINkupMNVSzE620s_JT04syczPgzOsEktKihKTQcxiAHy_Nk4-AAAA#fpstate=trskp&trifp=kpq%253DHorto%252BFlorestal%252Bde%252BRio%252BBranco%2526skpm%253D/g/1ptxc6dx5%2526t%253Dd"
                target="_blank">
                Horto Florestal de Rio Branco
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Parque+do+Tucumã&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxISa9S4tVP1zc0TDezKK9ILs_WUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgDczZggPwAAAA#fpstate=trskp&trifp=kpq%253DParque%252Bdo%252BTucum%2525C3%2525A3%2526skpm%253D/g/11g68wxcwk%2526t%253Dd"
                target="_blank">
                Parque do Tucumã - Rio Branco
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Mercado+do+Bosque&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxISa9S4tVP1zc0TC5OTrYotMzVUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgCtfwyqPwAAAA#fpstate=trskp&trifp=kpq%253DMercado%252Bdo%252BBosque%2526skpm%253D/g/11cscc8q9m%2526t%253Dd"
                target="_blank">
                Mercado do Bosque - Rio Branco
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}