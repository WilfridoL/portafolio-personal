import styled from 'styled-components'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Home from './components/Home'
import './global_style.css'
import TecnologiaContainer from './components/Tecnologias'
import Footer from './components/Footer'
import Proyectos from './components/Proyectos'
import { useTranslation } from 'react-i18next'

const Espaciado = styled.main`
  padding: 50px 10%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

function App() {
  return <>
      <Header />
      <Home />
      <Espaciado>
        <AboutMe />
        <TecnologiaContainer />
        <Proyectos />
      </Espaciado>
      <Footer />
  </>
}

export default App
