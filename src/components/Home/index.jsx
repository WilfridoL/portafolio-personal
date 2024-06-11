import styled from "styled-components"

const HomeStyle = styled.div`
  background: rgba(0,0,0,20%);
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  return <HomeStyle>
    <p>Hola, soy</p>
    <h2>Wilfrido Adarraga</h2>
    <h4>Desarrollador front end & Diseñador UI</h4>
  </HomeStyle>
}

export default Home 