import { useState } from "react"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import imgAC from "../../../assets/imgs/todos estados/estadosAC.jpg"
import imgAL from "../../../assets/imgs/todos estados/estadosAL.jpg"
import imgAM from "../../../assets/imgs/todos estados/estadosAM.jpg"
import imgAP from "../../../assets/imgs/todos estados/estadosAP.jpg"
import imgBA from "../../../assets/imgs/todos estados/estadosBA.jpg"
import imgCE from "../../../assets/imgs/todos estados/estadosCE.jpg"
import imgDF from "../../../assets/imgs/todos estados/estadosDF.jpg"
import imgES from "../../../assets/imgs/todos estados/estadosES.jpg"
import imgGO from "../../../assets/imgs/todos estados/estadosGO.jpg"
import imgMA from "../../../assets/imgs/todos estados/estadosMA.jpg"
import imgMG from "../../../assets/imgs/todos estados/estadosMG.jpg"
import imgMS from "../../../assets/imgs/todos estados/estadosMS.jpg"
import imgMT from "../../../assets/imgs/todos estados/estadosMT.jpg"
import imgPA from "../../../assets/imgs/todos estados/estadosPA.jpg"
import imgPB from "../../../assets/imgs/todos estados/estadosPB.jpg"
import imgPE from "../../../assets/imgs/todos estados/estadosPE.jpg"
import imgPI from "../../../assets/imgs/todos estados/estadosPI.jpg"
import imgPR from "../../../assets/imgs/todos estados/estadosPR.jpg"
import imgRJ from "../../../assets/imgs/todos estados/estadosRJ.jpg"
import imgRN from "../../../assets/imgs/todos estados/estadosRN.jpg"
import imgRO from "../../../assets/imgs/todos estados/estadosRO.jpg"
import imgRR from "../../../assets/imgs/todos estados/estadosRR.jpg"
import imgRS from "../../../assets/imgs/todos estados/estadosRS.jpg"
import imgSC from "../../../assets/imgs/todos estados/estadosSC.jpg"
import imgSE from "../../../assets/imgs/todos estados/estadosSE.jpg"
import imgSP from "../../../assets/imgs/todos estados/estadosSP.jpg"
import imgTO from "../../../assets/imgs/todos estados/estadosTO.jpg"
import { Ac } from "../../estados/AC"
import { Al } from "../../estados/AL"
import { Am } from "../../estados/AM"
import { Ap } from "../../estados/AP"
import { Ba } from "../../estados/BA"
import { Ce } from "../../estados/CE"
import { Df } from "../../estados/DF"
import { Es } from "../../estados/ES"
import { Go } from "../../estados/GO"
import { Ma } from "../../estados/MA"
import { Mg } from "../../estados/MG"
import { Ms } from "../../estados/MS"
import { Mt } from "../../estados/MT"
import { Pa } from "../../estados/PA"
import { Pb } from "../../estados/PB"
import { Pe } from "../../estados/PE"
import { Pi } from "../../estados/PI"
import { Pr } from "../../estados/PR"
import { Rj } from "../../estados/RJ"
import { Rn } from "../../estados/RN"
import { Ro } from "../../estados/RO"
import { Rr } from "../../estados/RR"
import { Rs } from "../../estados/RS"
import { Sc } from "../../estados/SC"
import { Se } from "../../estados/SE"
import { Sp } from "../../estados/SP"
import { To } from "../../estados/TO"

export const Estados = () => {
  const [modalAc, setModalAc] = useState(false)
  const [modalAl, setModalAl] = useState(false)
  const [modalAm, setModalAm] = useState(false)
  const [modalAp, setModalAp] = useState(false)
  const [modalBa, setModalBa] = useState(false)
  const [modalCe, setModalCe] = useState(false)
  const [modalDf, setModalDf] = useState(false)
  const [modalEs, setModalEs] = useState(false)
  const [modalGo, setModalGo] = useState(false)
  const [modalMa, setModalMa] = useState(false)
  const [modalMg, setModalMg] = useState(false)
  const [modalMs, setModalMs] = useState(false)
  const [modalMt, setModalMt] = useState(false)
  const [modalPa, setModalPa] = useState(false)
  const [modalPb, setModalPb] = useState(false)
  const [modalPe, setModalPe] = useState(false)
  const [modalPi, setModalPi] = useState(false)
  const [modalPr, setModalPr] = useState(false)
  const [modalRj, setModalRj] = useState(false)
  const [modalRn, setModalRn] = useState(false)
  const [modalRo, setModalRo] = useState(false)
  const [modalRr, setModalRr] = useState(false)
  const [modalRs, setModalRs] = useState(false)
  const [modalSc, setModalSc] = useState(false)
  const [modalSe, setModalSe] = useState(false)
  const [modalSp, setModalSp] = useState(false)
  const [modalTo, setModalTo] = useState(false)

  return (
    <Row id="todosestados" style={{
      display: "flex",
      background: "transparent",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px",
      padding: "10px",
      border: "1px solid antiquewhite",
      boxShadow: "10px 10px 5px 0px #0093E9"
    }}>
      <Row style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10px" }}>
        <h1 style={{ textAlign: "center", color: "green" }}>NORTE<hr style={{marginBottom: "-10px"}}/></h1>
        <Row xs={2} md={4} className="g-4" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalAc(true) }}
              src={imgAC}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalAc && (
              <Ac modal={modalAc} closeModal={setModalAc} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalAm(true) }}
              src={imgAM}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalAm && (
              <Am modal={modalAm} closeModal={setModalAm} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalAp(true) }}
              src={imgAP}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalAp && (
              <Ap modal={modalAp} closeModal={setModalAp} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalPa(true) }}
              src={imgPA}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalPa && (
              <Pa modal={modalPa} closeModal={setModalPa} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalRo(true) }}
              src={imgRO}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalRo && (
              <Ro modal={modalRo} closeModal={setModalRo} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalRr(true) }}
              src={imgRR}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalRr && (
              <Rr modal={modalRr} closeModal={setModalRr} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalTo(true) }}
              src={imgTO}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalTo && (
              <To modal={modalTo} closeModal={setModalTo} disable={true} />
            )}
          </Col>
        </Row>
      </Row>
      <Row style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10px" }}>
        <h1 style={{ textAlign: "center", color: "orange" }}>NORDESTE<hr style={{marginBottom: "-10px"}}/></h1>
        <Row xs={3} md={4} className="g-4" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalAl(true) }}
              src={imgAL}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalAl && (
              <Al modal={modalAl} closeModal={setModalAl} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalBa(true) }}
              src={imgBA}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalBa && (
              <Ba modal={modalBa} closeModal={setModalBa} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalCe(true) }}
              src={imgCE}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalCe && (
              <Ce modal={modalCe} closeModal={setModalCe} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalMa(true) }}
              src={imgMA}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalMa && (
              <Ma modal={modalMa} closeModal={setModalMa} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalPb(true) }}
              src={imgPB}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalPb && (
              <Pb modal={modalPb} closeModal={setModalPb} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalPe(true) }}
              src={imgPE}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalPe && (
              <Pe modal={modalPe} closeModal={setModalPe} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalPi(true) }}
              src={imgPI}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalPi && (
              <Pi modal={modalPi} closeModal={setModalPi} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalRn(true) }}
              src={imgRN}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalRn && (
              <Rn modal={modalRn} closeModal={setModalRn} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalSe(true) }}
              src={imgSE}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalSe && (
              <Se modal={modalSe} closeModal={setModalSe} disable={true} />
            )}
          </Col>
        </Row>
      </Row>
      <Row style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10px" }}>
        <h1 style={{ textAlign: "center", color: "yellowgreen" }}>CENTRO-OESTE<hr style={{marginBottom: "-10px"}}/></h1>
        <Row xs={3} md={4} className="g-4" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalDf(true) }}
              src={imgDF}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalDf && (
              <Df modal={modalDf} closeModal={setModalDf} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalGo(true) }}
              src={imgGO}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalGo && (
              <Go modal={modalGo} closeModal={setModalGo} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalMs(true) }}
              src={imgMS}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalMs && (
              <Ms modal={modalMs} closeModal={setModalMs} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalMt(true) }}
              src={imgMT}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalMt && (
              <Mt modal={modalMt} closeModal={setModalMt} disable={true} />
            )}
          </Col>
        </Row>
      </Row>
      <Row style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10px" }}>
        <h1 style={{ textAlign: "center", color: "deeppink" }}>SUDESTE<hr style={{marginBottom: "-10px"}}/></h1>
        <Row xs={2} md={4} className="g-4" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalEs(true) }}
              src={imgES}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalEs && (
              <Es modal={modalEs} closeModal={setModalEs} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalMg(true) }}
              src={imgMG}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalMg && (
              <Mg modal={modalMg} closeModal={setModalMg} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalRj(true) }}
              src={imgRJ}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalRj && (
              <Rj modal={modalRj} closeModal={setModalRj} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalSp(true) }}
              src={imgSP}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalSp && (
              <Sp modal={modalSp} closeModal={setModalSp} disable={true} />
            )}
          </Col>
        </Row>
      </Row>
      <Row style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10px"}}>
        <h1 style={{ textAlign: "center", color: "blueviolet" }}>SUL<hr style={{marginBottom: "-10px"}}/></h1>
        <Row xs={2} md={3} className="g-4" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalPr(true) }}
              src={imgPR}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalPr && (
              <Pr modal={modalPr} closeModal={setModalPr} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalRs(true) }}
              src={imgRS}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalRs && (
              <Rs modal={modalRs} closeModal={setModalRs} disable={true} />
            )}
          </Col>
          <Col>
            <Card.Img variant="top" onClick={() => { setModalSc(true) }}
              src={imgSC}
              style={{ height: "120px", width: "180px", borderRadius: "15px" }} />
            {modalSc && (
              <Sc modal={modalSc} closeModal={setModalSc} disable={true} />
            )}
          </Col>
        </Row>
      </Row>
    </Row>
  )
}