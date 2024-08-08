import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si";
import styled from "styled-components";

const PieDePagina = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  box-sizing: border-box;
  background: rgba(0,0,0, 20%);
  color: #F4F4F5;
  h2{
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
  }
`

const Links = styled.a`
  color: #F4F4F5;
  margin-left: 10px;
  transition: all .3s ease-in;
  font-size: 20px;
  &:hover{
    color: #A1A1A1;
  }
  @media (max-width: 350px){
    display: block;
  }
`

const Footer = () => {
  const {t} = useTranslation()

  return <PieDePagina>
    <h2>{t("footer")}</h2>
    <div>
      <Links href="http://" target="_blank" rel="noopener noreferrer"><FaGithub /></Links>
      <Links href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Links>
      <Links href="http://" target="_blank" rel="noopener noreferrer"><SiGmail /></Links>
    </div>
  </PieDePagina>
}

export default Footer