import styled from "styled-components"
import ContenidoEstilosGenerales from "../ContenidoEstilos"

const Parrafo = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #FAFAF5;
  font-weight: 300;
  margin-left: 32px;
  font-size: 1rem;
  box-sizing: border-box;
`

const AboutMe = () => {
  return <ContenidoEstilosGenerales>
    <h3>Sobre mi</h3>
    <Parrafo>
      <p>
        Soy un desarrollador web que le fascina el mundo del arte y el manga. Más allá de las líneas de código, me encanta explorar el mundo de la pintura y el dibujo,
      </p>
      <p>
        sumergiéndome en el arte y embarcarme en nuevas experiencias y desafíos.
        Para mí, la programación no es solo una profesión, es una forma de expresión. Al igual que un artista trabaja con colores y formas para crear una obra maestra, yo utilizo lenguajes de programación y algoritmos para dar vida a ideas innovadoras y soluciones creativas.
      </p>
    </Parrafo>
  </ContenidoEstilosGenerales>
}

export default AboutMe