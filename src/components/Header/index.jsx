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
    cursor: pointer;
    &:hover{
        border-color: #A1A1A1;
        filter: drop-shadow(1px 0px 8px rgba(255, 255, 255, 40%));
    }
`

const Header = () => {
    return <HeaderStyle>
        <nav>
            <ImgStyle src="./logo.png" alt="logo" />
            <UlSyle>
                <li><Links href="#">Inicio</Links></li>
                <li><Links href="#">Sobre mí</Links></li>
                <li><Links href="#">Proyectos</Links></li>
                <Btn>ES</Btn>
            </UlSyle>
        </nav>
    </HeaderStyle>
}

export default Header