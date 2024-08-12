import { useTranslation } from 'react-i18next'
import styled from "styled-components"

const HomeStyle = styled.div`
  background: rgba(0,0,0,20%);
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 85px;
  p, h4{
    color: #F4F4F5;
    font-weight: 300;
    padding: 2px 0px;
  }
  h2{
    font-family: 'Raleway', sans-serif;
    color: #FFFFFF;
    font-size: 40px;
    font-weight: bold;
  }
`

const Home = () => {
  const {t} = useTranslation()
  return <HomeStyle id='home'>
    <p>{t("home.p")}</p>
    <h2>Wilfrido Adarraga</h2>
    <h4>{t("home.h4")}</h4>
  </HomeStyle>
}

export default Home 