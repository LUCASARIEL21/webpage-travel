import styled from "styled-components"
import bg from "../../../assets/imgs/estados/SC/background.jpg"
import lc1 from "../../../assets/imgs/estados/SC/local1.jpg"
import lc2 from "../../../assets/imgs/estados/SC/local2.jpg"
import lc3 from "../../../assets/imgs/estados/SC/local3.jpg"
import lc4 from "../../../assets/imgs/estados/SC/local4.jpg"

export const div = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
`;

export const buttonS = styled.button`
  display: flex;
  justify-content: end;
  cursor: pointer;
  margin: 10px;
  background: transparent;
  border: none;
  height: 10px;
  width: 10px;
`;

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 15px;
`;

export const tnx = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: black;
`;

export const txt = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: black;
`;

export const paragrafo = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const card = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: 0.5s;
  max-width: 400px;
  margin: 20px;

  &:hover {
    transition: 0.3s;
    transform: translateY(-10px);
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`;

export const box1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  height: 150px;
  background-image: url(${lc1});
  background-position: center;
  background-size: cover;
  border-radius: 25px;
  cursor: pointer;
`;

export const box2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  height: 150px;
  background-image: url(${lc2});
  background-position: center;
  background-size: cover;
  border-radius: 25px;
  cursor: pointer;
`;

export const box3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  height: 150px;
  background-image: url(${lc3});
  background-position: center;
  background-size: cover;
  border-radius: 25px;
  cursor: pointer;
`;

export const box4 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 280px;
  height: 150px;
  background-image: url(${lc4});
  background-position: center;
  background-size: cover;
  border-radius: 25px;
  cursor: pointer;
`;

export const local1 = styled.a`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  color: #fff;
  -webkit-text-stroke: 0.4px black;
  font-size: 1.2rem;
  letter-spacing: 1px;
  :hover{
    color: #fff;
  }
`;

export const local2 = styled.a`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  color: #fff;
  -webkit-text-stroke: 0.4px black;
  font-size: 1.2rem;
  letter-spacing: 1px;
  :hover{
    color: #fff;
  }
`;

export const local3 = styled.a`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  color: #fff;
  -webkit-text-stroke: 0.4px black;
  font-size: 1.2rem;
  letter-spacing: 1px;
  :hover{
    color: #fff;
  }
`;

export const local4 = styled.a`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  color: #fff;
  -webkit-text-stroke: 0.4px black;
  font-size: 1.2rem;
  letter-spacing: 1px;
  :hover{
    color: #fff;
  }
`;