import { Dialog } from "@mui/material"
import * as S from "./styles"

export const Sobre = ({ closeModal, modal }) => {
    return (
        <Dialog
            open={modal}
            onClose={() => closeModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <S.div>
                <S.sair onClick={() => closeModal(false)}>X</S.sair>
                <h1>Observações</h1>
                <p>
                    Este site foi desenvolvido com o intuito de mostrar locais interessantes no Brasil para viajar. 
                    Para isso foi utilizado as avaliações de pontos turísticos do Google, os 4 locais mais avaliados de cada estado do Brasil no google foram apresentados no site.  
                    Caso você deseje mandar sugestões de lugares para se colocar no site, ou algum erro que você tenha visto neste site, por favor entre em contato através do Instagram, ou via E-mail, ambos estão no rodapé do site. 
                    Caso tenha curiosidade sobre o código que foi feito este site, está em um projeto no GitHub, o link para acessar o projeto está no rodapé do site.
                    Desde já, agradeço a sua visita ao site.
                </p>
            </S.div>
        </Dialog>
    )
}