import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import SP from "../../../assets/imgs/carousel/carouselSP.jpg"
import RJ from "../../../assets/imgs/carousel/carouselRJ.jpg"
import MG from "../../../assets/imgs/carousel/carouselMG.jpg"
import BA from "../../../assets/imgs/carousel/carouselBA.jpg"
import RS from "../../../assets/imgs/carousel/carouselRS.jpg"
import { Ba } from "../../estados/BA"
import { Rj } from "../../estados/RJ"
import { Rs } from "../../estados/RS"
import { Mg } from "../../estados/MG"
import { Sp } from "../../estados/SP"

export const Carrosel = () => {
    const [modalBa, setModalBa] = useState(false)
    const [modalMg, setModalMg] = useState(false)
    const [modalRj, setModalRj] = useState(false)
    const [modalRs, setModalRs] = useState(false)
    const [modalSp, setModalSp] = useState(false)

    return (
        <div id="maispopulares">
            <Carousel fade>
                <Carousel.Item interval={2500}
                    style={{ alignItems: "center", justifyContent: "center" }}>
                    <img
                        src={SP}
                        alt="Image SP"
                        style={{ height: "600px", width: "100%", cursor: "pointer" }}
                        onClick={() => { setModalSp(true) }} />
                    {modalSp && (
                        <Sp modal={modalSp} closeModal={setModalSp} disable={true} />
                    )}
                    <Carousel.Caption>
                        <h3>São Paulo</h3>
                        <p>Sua capital é são paulo onde está localizada a ponte Octávio Frias de Oliveira</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img src={MG}
                        alt="Image MG"
                        style={{ height: "600px", width: "100%", cursor: "pointer" }}
                        onClick={() => { setModalMg(true) }} />
                    {modalMg && (
                        <Mg modal={modalMg} closeModal={setModalMg} disable={true} />
                    )}
                    <Carousel.Caption>
                        <h3>Minas gerais</h3>
                        <p>Sua capital é Belo Horizonte onde está localizada a Lagoa da Pampulha</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img src={BA}
                        alt="Image BA"
                        style={{ height: "600px", width: "100%", cursor: "pointer" }}
                        onClick={() => { setModalBa(true) }} />
                    {modalBa && (
                        <Ba modal={modalBa} closeModal={setModalBa} disable={true} />)}
                    <Carousel.Caption>
                        <h3>Bahia</h3>
                        <p>Sua capital é Salvador onde está localizada a praia do porto da barra</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img src={RJ}
                        alt="Image RJ"
                        style={{ height: "600px", width: "100%", cursor: "pointer" }}
                        onClick={() => { setModalRj(true) }} />
                    {modalRj && (
                        <Rj modal={modalRj} closeModal={setModalRj} disable={true} />
                    )}
                    <Carousel.Caption>
                        <h3>Rio de Janeiro</h3>
                        <p>Sua capital é Rio de Janeiro onde está localizada o cristo redentor</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img src={RS}
                        alt="Image RS"
                        style={{ height: "600px", width: "100%", cursor: "pointer" }}
                        onClick={() => { setModalRs(true) }} />
                    {modalRs && (
                        <Rs modal={modalRs} closeModal={setModalRs} disable={true} />)}
                    <Carousel.Caption>
                        <h3>Rio Grande do Sul</h3>
                        <p>Sua capital é Porto Alegre onde está localizada o Theatro São Pedro</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}/*  */