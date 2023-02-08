import { useState } from "react"
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { HashLink } from 'react-router-hash-link'
import FlightIcon from "@mui/icons-material/Flight"
import * as S from "./styles"
import { Sobre } from './sobre'

export const NavBar = () => {

  const [modalSobre, setModalSobre] = useState(false)

  return (
    <Navbar sticky="top" expand="lg"
      collapseOnSelect
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0093E9"
      }}>
      <Navbar.Brand style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "20px"
      }}>
        <FlightIcon style={{ width: "60px", height: "60px", color: "white" }} />
        <h3 style={{ marginLeft: "20px", color: "white" }}>Viagens BR</h3>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse style={{ marginLeft: "10px" }}>
        <Nav style={{alignItems: "center"}}>
          <S.bt1>
            <HashLink to="#todosestados" style={{
              color: "black",
              margin: "10px",
              textDecoration: "none"
            }}>
              Todos Estados
            </HashLink>
          </S.bt1>
          <S.bt2>
            <HashLink to="#maispopulares" style={{
              color: "black",
              margin: "10px",
              textDecoration: "none"
            }}>
              Mais Populares
            </HashLink>
          </S.bt2>
          <S.bt3 onClick={() => { setModalSobre(true) }}>Sobre</S.bt3>
          {modalSobre && (
              <Sobre modal={modalSobre} closeModal={setModalSobre} disable={true} />)}
          <S.bt4>
            <HashLink to="#credits" style={{
              color: "black",
              margin: "10px",
              textDecoration: "none"
            }}>
              Contato
            </HashLink>
          </S.bt4>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}
