import React from "react"
import { Dialog } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import * as S from "./styles"

export const Pb = ({ closeModal }) => {
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
              Paraíba
            </S.tnx>
            <S.txt>PB</S.txt>
            <S.paragrafo>
              Paraíba, um estado no nordeste do Brasil, é conhecido pela linha
              da costa tropical e pela arquitetura colonial portuguesa. A
              capital, João Pessoa, possui praias como a Manaíra e Tambaú, além
              de locais de mergulho repletos de corais ao largo da costa. Junto
              ao rio Paraíba, o centro histórico da cidade possui casas
              coloridas e a igreja de São Francisco, com uma arquitetura
              barroca. A Ponta do Seixas, com o farol Cabo Branco nas
              proximidades, marca o ponto mais a leste das Américas.
            </S.paragrafo>
          </S.ct>
          <S.card>
            <S.box1>
              <S.local1
                href="https://www.google.com/search?q=Feirinha%20de%20Artesanato%20de%20Tambaú&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTBV4tVP1zc0TDKNN60oryzUUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgCE-2kpPwAAAA&ved=0CBMQ4mhqGAoTCIi1zYHh__wCFQAAAAAdAAAAABCnAg&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DFeirinha%252Bde%252BArtesanato%252Bde%252BTamba%2525C3%2525BA%2526skpm%253D/g/11b5_5xwyq%2526t%253Dd"
                target="_blank">
                Feirinha de Artesanato de Tambaú
              </S.local1>
            </S.box1>
            <S.box2>
              <S.local2
                href="https://www.google.com/search?q=Busto%20Tamandaré&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTBV4tVP1zc0TDIrM8nKSqnUUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgB2Lk2UPwAAAA&ved=0CBMQ4mhqGAoTCIi1zYHh__wCFQAAAAAdAAAAABChAg&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DBusto%252BTamandar%2525C3%2525A9%2526skpm%253D/g/11b6v4jjdy%2526t%253Dd"
                target="_blank">
                Busto Tamandaré - João Pessoa
              </S.local2>
            </S.box2>
            <S.box3>
              <S.local3
                href="https://www.google.com/search?q=Parque%20da%20Lagoa%20-%20Solon%20de%20Lucena&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTBV4tZP1zc0MqoqTDYz0FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIACELgWj0AAAA&ved=0CBQQ4mhqFwoTCKiW9aX7qfsCFQAAAAAdAAAAABA4&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252Bda%252BLagoa%252B-%252BSolon%252Bde%252BLucena%2526skpm%253D/g/122zqc60%2526t%253Dd"
                target="_blank">
                Parque da Lagoa - Solon de Lucena
              </S.local3>
            </S.box3>
            <S.box4>
              <S.local4
                href="https://www.google.com/search?q=Praia%20do%20Jacaré&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTBV4tFP1zesMi4xMihKM9NSzE620s_JT04syczPgzOsEktKihKTQcxiAO8juFc-AAAA&ved=0CBsQ4mhqGAoTCIi1zYHh__wCFQAAAAAdAAAAABCVAg&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bdo%252BJacar%2525C3%2525A9%2526skpm%253D/g/1z3t20rf6%2526t%253Dd"
                target="_blank">
                Praia do Jacaré - João Pessoa
              </S.local4>
            </S.box4>
          </S.card>
        </S.container>
      </S.div >
    </Dialog>
  )
}