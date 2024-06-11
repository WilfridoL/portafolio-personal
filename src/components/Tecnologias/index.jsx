import styled from "styled-components"
import ContenidoEstilosGenerales from "../ContenidoEstilos"
import IconosARecorrer from "./IconosArray"
import Iconos from "./CardIconos"

const IconosSeparacion = styled.div`
display: flex;
justify-content: center;
gap: 32px;
box-sizing: border-box;
flex-wrap: wrap;
flex-grow: 1;
`

const TecnologiaContainer = () => {
  return <ContenidoEstilosGenerales>
    <h3>Tecnologías</h3>
    <IconosSeparacion>
      {
        IconosARecorrer.map((event) => <Iconos 
        LenguajeName={event.name} 
        LenguajeIcono={event.icono} 
        key={event.id}/>) 
      }
    </IconosSeparacion>
  </ContenidoEstilosGenerales>
}

export default TecnologiaContainer