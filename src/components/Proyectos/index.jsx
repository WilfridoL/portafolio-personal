import styled from "styled-components"
import ContenidoEstilosGenerales from "../ContenidoEstilos"
import Card from "./Card"
import { useEffect, useState } from "react"
import { Btn } from "../Header"

const Proyectos = () => {
  const [active, setActive] = useState(false)
  const StyleCard = styled.div`
    width: 100%;
    height:${active ? "auto": "250px"};
    /* background: ${active ? "none": "hidden"}; */
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
  console.log(active);
  return <ContenidoEstilosGenerales>
    <h3>Proyectos</h3>
    <StyleCard>
      {data.map(event => <Card dataProject={event} key={event.id}/>)}
    </StyleCard>
    <button onClick={() => setActive(!active)}>{active ? "Mostrar menos":"Mostrar más"}</button>
  </ContenidoEstilosGenerales>
}

export default Proyectos