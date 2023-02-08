import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Rj = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "skyblue" }} />
              Rio de Janeiro
            </S.tnx>
            <S.txt>RJ</S.txt>
            <S.paragrafo>
              O Rio de Janeiro é uma grande cidade brasileira à beira-mar,
              famosa pelas praias de Copacabana e Ipanema, pela estátua de 38
              metros de altura do Cristo Redentor, no topo do Corcovado, e pelo
              Pão de Açúcar, um pico de granito com teleféricos até seu cume. A
              cidade também é conhecida pelas grandes favelas. O empolgante
              Carnaval, com carros alegóricos, fantasias extravagantes e
              sambistas, é considerado o maior do mundo.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Cristo%20Redentor&stick=H4sIAAAAAAAAAONgFuLQz9U3MEvPLVLiBLGM0ytLyrUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAAfkAI86AAAA&ved=0CB4Q4mhqFwoTCMC8nOWFqvsCFQAAAAAdAAAAABAK&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCristo%252BRedentor%2526skpm%253D/m/03gytw%2526t%253Dd"
                target="_blank">
                Cristo Redentor
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=P%C3%A3o%20de%20A%C3%A7ucar&stick=H4sIAAAAAAAAAONgFuLQz9U3MEvPLVLiBLOMTbKNtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAkKKSIjoAAAA&ved=0CBwQ4mhqFwoTCMC8nOWFqvsCFQAAAAAdAAAAABAS&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DP%2525C3%2525A3o%252Bde%252BA%2525C3%2525A7ucar%2526skpm%253D/m/0634k2%2526t%253Dd"
                target="_blank">
                Aquário Marinho
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Maracan%C3%A3&stick=H4sIAAAAAAAAAONgFuLQz9U3MEvPLVLiBLEMC8tMKrUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYALRj0A46AAAA&ved=0CBwQ4mhqFwoTCMC8nOWFqvsCFQAAAAAdAAAAABAb&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMaracan%2525C3%2525A3%2526skpm%253D/m/01qv4y%2526t%253Dd"
                target="_blank">
                Estádio Maracanã
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Museu%20do%20Amanh%C3%A3&stick=H4sIAAAAAAAAAONgFuLQz9U3MEvPLVLi1k_XNzQyqCgzMzTUUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgAFpKbVPAAAAA&ved=0CBsQ4mhqFwoTCMC8nOWFqvsCFQAAAAAdAAAAABAk&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMuseu%252Bdo%252BAmanh%2525C3%2525A3%2526skpm%253D/g/120xv611%2526t%253Dd"
                target="_blank">
                Museu do Amanhã
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}
