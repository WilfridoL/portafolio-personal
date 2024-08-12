import { useState } from "react"
import { useTranslation } from "react-i18next"
import { FaBars } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { RiCloseLargeLine } from "react-icons/ri"
import styled from "styled-components"

const HeaderStyle = styled.header`
width: 100%;
border-bottom: 0.5px solid #F4F4F5;
background: rgba(217, 217, 217, 0.1);
backdrop-filter: blur(50px);
padding: 25px  10%;
box-sizing: border-box;
position: fixed;
top: 0;
z-index: 10;
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
`

const ImgStyle = styled.img`
    width: 61px;
    `

const UlSyle = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 600px){
    position: absolute;
    width: 100%;
    top: 100%;
    left: 100%;
    padding: 0px 16px 30px 16px;
    background: #172554;
    font-size: 24px;
    flex-direction: column;
    border-top: 0.5px solid #F4F4F5;
    border-bottom: 1px solid #F4F4F5;
    gap: 0px;
		transition: all .2s ease-in-out;
    li{
      width: 100%;
      border-bottom: 0.5px solid #F4F4F5;
      text-align: center;
      padding: 30px 0px;
    }
  }
  &.active{
		left : 0;
  }
`

const Links = styled.a`
color: #F4F4F5;
transition: all .3s ease-in;
&:hover{
    color: #A1A1A1;
}
`

const Btn = styled.button`
  color: #F4F4F5;
  padding: 6px 15px;
  border: 2px solid #F4F4F5;
  background: none;
  filter: drop-shadow(1px 0px 8px rgba(255, 255, 255, 25%));
  border-radius: 20px;
  transition: all .3s ease-in;
	font-size: 16px;
  cursor: pointer;
  &:hover{
    border-color: #A1A1A1;
    filter: drop-shadow(1px 0px 8px rgba(255, 255, 255, 40%));
  }
	@media (max-width: 600px){
		margin-top: 30px;
		padding: 8px 20px;
		font-size: 24px;
	}
`

const Toggle = styled.button`
    display: none;
    background: none;
    border: none;
    outline: none;
    font-size: 2rem;
    color: #F4F4F5;
    transition: all .2s ease-in;
    &:hover{
        color: rgba(244, 244, 245, 80%);
    }
    @media (max-width: 600px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Header = () => {
    const [activeToggle, setActiveToggle] = useState(false)
    const [change, setChange] = useState(true)
    const {t, i18n} = useTranslation()
    const language = () => {
      if(change === true){
        i18n.changeLanguage("en")
      }else{
        i18n.changeLanguage("es")
      }
    }
    console.log(change);
    
    return <>
    <HeaderStyle>
        <nav>
            <ImgStyle src="./logo.png" alt="logo" />
            <UlSyle className={activeToggle ? "active" : ""}>
                <li><Links href="#home">{t("header.linkHome")}</Links></li>
                <li><Links href="#about">{t("header.linkAboutMe")}</Links></li>
                <li><Links href="#prj">{t("header.linkProject")}</Links></li>
                <Btn onClick={() => {setChange(!change); language()}}>{change ? "ES" : "EN"}</Btn>
            </UlSyle>
            <Toggle onClick={() => setActiveToggle(!activeToggle)}>
                {activeToggle ? <RiCloseLargeLine /> : <FaBars />}
            </Toggle>
        </nav>
    </HeaderStyle>
    </>
}

export default Header