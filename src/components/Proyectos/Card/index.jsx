import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import styled from 'styled-components';
import { FaReact, FaGithub, FaHtml5, FaCss3, FaSass, FaGitAlt, FaBootstrap, FaPhp  } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"

const Container = styled.div`
  width: 430px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #FAFAF9;
  .container-img{
    width: 100%;
    height: 180px;
    overflow: hidden;
    background: #000;
    border-radius: 5px;
    img{
      width: 100%;
      height: 100%;
      opacity: 90%;
    }
  }
  .container-text{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
      display: inherit;
      flex-direction: column;
      font-size: 16px;
      gap: 10px;
      .container-icon{
        display: flex;
        font-size: 18px;
        gap: 7px;
      }
    }
    .link{
      a{
      color: inherit;
      font-size: 20px;
      transition: all .3s ease-in;
      &:hover{
        color: #A1A1A1;
      }
    }
    }

  }
`

const Card = ({dataProject}) => {
  const {titulo, img, link, iconos} = dataProject
  return <Container>
    <div className="container-img"><img src={`../../../../public/img/${img}`} alt={titulo} /></div>
    <div className="container-text">
      <div className="text">
        <p>{titulo}</p>
        <div className="container-icon">
          {iconos.map(e => <i className={`fa-brands ${e}`} key={e.index}/>)}
        </div>
      </div>
      <div className="link">
        <a href={link} target='_blank'><FiExternalLink /></a>
      </div>
    </div>
  </Container>
}

export default Card