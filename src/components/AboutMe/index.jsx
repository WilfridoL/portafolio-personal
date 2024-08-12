import styled from "styled-components"
import ContenidoEstilosGenerales from "../ContenidoEstilos"
import { useTranslation } from "react-i18next"

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
  const {t} = useTranslation()

  return <ContenidoEstilosGenerales id="about">
    <h3>{t("aboutMe.title")}</h3>
    <Parrafo>
      <p>{t("aboutMe.text")}</p>
      <p>{t("aboutMe.text2")}</p>
    </Parrafo>
  </ContenidoEstilosGenerales>
}

export default AboutMe