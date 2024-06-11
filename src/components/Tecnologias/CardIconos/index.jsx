import { FaReact } from "react-icons/fa"
import styled from "styled-components"

const IconosStyle = styled.div`
flex-direction: column;
text-align: center;
color: #FAFAF5;
font-size: 32px;

h2{
  color: #F4F4F5;
  font-size: 16px;
}
`

const Iconos =  ({LenguajeIcono, LenguajeName}) => {
  return <IconosStyle>
    {LenguajeIcono}
    <h2>{LenguajeName}</h2>
  </IconosStyle>
}
export default Iconos