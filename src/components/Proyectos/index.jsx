import styled from "styled-components"
import ContenidoEstilosGenerales from "../ContenidoEstilos"
import Card from "./Card"
import { useEffect, useState } from "react"

const StyleCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 32px;
`
const Proyectos = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3000/card-project')
      const db = await response.json()
      setData([...db])
    }
    getData()
  }, [])
  console.log(data);
  return <ContenidoEstilosGenerales>
    <h3>Proyectos</h3>
    <StyleCard>
      {data.map(event => <Card dataProject={event} key={event.id}/>)}
    </StyleCard>
  </ContenidoEstilosGenerales>
}

export default Proyectos