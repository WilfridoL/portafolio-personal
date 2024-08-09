import styled from "styled-components"
import ContenidoEstilosGenerales from "../ContenidoEstilos"
import Card from "./Card"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const Titulo = styled.h3`
  margin-left: 32px;
  font-size: 24px;
  font-family: 'Raleway', sans-serif;
  color: #FAFAF9;
  margin-bottom: 20px;
  font-weight: 600;

`

const BtnContainer = styled.div`
  width: 100%;
  height:100px;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 15px;
  span{
    width: 100%;
    height: 2px;
    background: #A1A1A1;
  }
  button{
    position: absolute;
    color: #F4F4F5;
    font-weight: 400;
    padding: 6px 60px;
    border: 2px solid #A1A1A1;
    background: #172554;
    /* filter: drop-shadow(1px 0px 8px rgba(255, 255, 255, 25%)); */
    border-radius: 20px;
    transition: all .3s ease-in;
    cursor: pointer;
    &:hover{
        filter: drop-shadow(1px 0px 8px rgba(255, 255, 255, 40%));
    }
  }
`
const Proyectos = () => {
  const {t} = useTranslation()
  const [active, setActive] = useState(false)
  const StyleCard = styled.div`
    width: 100%;
    height:${active ? "auto" : "235px"};
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px 32px;
  `
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3000/card-project')
      const db = await response.json()
      setData([...db])
    }
    getData()
  }, [])
  return<div>
    <Titulo>{t("project.title")}</Titulo>
    <StyleCard>
      {data.map(event => <Card dataProject={event} key={event.id} />)}
    </StyleCard>
    <BtnContainer>
      <span></span>
      <button onClick={() => setActive(!active)}>{active ? t("project.buttonTextActive") : t("project.buttonText")}</button>
    </BtnContainer>
    </div>
}

export default Proyectos