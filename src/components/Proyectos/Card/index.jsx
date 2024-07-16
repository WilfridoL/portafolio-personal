import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import styled from 'styled-components';

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
    }
    a{
      color: inherit;
      font-size: 20px;
      transition: all .3s ease-in;
      &:hover{
        color: #A1A1A1;
      }
    }
  }
`

const Card = ({dataProject}) => {
  const {titulo, img, link, iconos} = dataProject
  return <Container>
    <div className="container-img"><img src={`./public/img/${img}`} alt={titulo} /></div>
    <div className="container-text">
      <div className="text">
        <p>{titulo}</p>
        <div className="">iconos</div>
      </div>
      <div className="link">
        <a href=""><FiExternalLink /></a>
      </div>
    </div>
  </Container>
}

export default Card