import styled from "styled-components"
import ContenidoEstilosGenerales from "../ContenidoEstilos"
import IconosARecorrer from "./IconosArray"
import Iconos from "./CardIconos"
import { t } from "i18next"
import { useTranslation } from "react-i18next"

const IconosSeparacion = styled.div`
display: flex;
justify-content: center;
gap: 32px;
box-sizing: border-box;
flex-wrap: wrap;
flex-grow: 1;
`

const TecnologiaContainer = () => {
  const {t} = useTranslation()

  return <ContenidoEstilosGenerales>
    <h3>{t("technology")}</h3>
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