import styled from "styled-components";
import { baseColor } from "styles/base";
import { Social } from "components";
import { BsFillSquareFill } from "react-icons/bs";

function News() {
  return (
    <MainWrapper>
       <Container>
         <Sqr/>
         <Txt1>BLACK</Txt1>
         <Txt2>HOUR</Txt2>
         <img src="/images/nuclear.png" alt="Image"/>
       </Container>
       <List>
         <ul>
           <li><BsFillSquareFill font-size='10px' color="#D60808"/> XX/XX : Website Hosted</li>
           <li><BsFillSquareFill font-size='10px' color="#D60808"/> XX/XX : React app Created</li>
           <li><BsFillSquareFill font-size='10px' color="#D60808"/> XX/XX : 2.02 patch live</li>
           <li><BsFillSquareFill font-size='10px' color="#D60808"/> XX/XX : Agents Added</li>
           <li><BsFillSquareFill font-size='10px' color="#D60808"/> 12/12 : Designing Begin</li>
           <li><BsFillSquareFill font-size='10px' color="#D60808"/> 01/12 : IDEA CAME</li>
         </ul>
       </List>
       <Social/>
    </MainWrapper>
  );
}

export default News;

// styles

const MainWrapper = styled.div`
position: relative;
margin-left: 50px;
border-left: 2px solid #f1d18a;
z-index: 4;
`;

const Container = styled.div`
margin: 0;
padding: 0;
img{
  position: absolute;
  top: 25%;
  right: 10%;
  height: 350px;
}
`;

const Sqr = styled.div`
  backdrop-filter: blur(8px);
  box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%);
  background-color: rgb(0 0 0 / 15%);
  height:100vh;
  position: relative;
  z-index: 3;
`;

const Txt1 = styled.div`
  color: white;
  font-family: 'CGF Locust Resistance', sans-serif;
  letter-spacing: 2px;
  top: 0;
  right: 2%;
  position: absolute;
  font-size: 70px;
`;

const Txt2 = styled.div`
color: red;
font-family: 'CGF Locust Resistance', sans-serif;
position: absolute;
left: 0;
top: 60%;
letter-spacing: 2px;
transform: rotate(270deg);
font-size: 70px;
`;

const List = styled.div`
  color: #f1d18a;
  position: absolute;
  font-family: 'Play', sans-serif;
  top: 50%;
  left: 35%;
  z-index: 4;
  transform: translate(-50%,-50%);
  ul{
    text-decoration: none;
    list-style: none;
    line-height: 60px;
  }
  li{
    text-decoration: none;
    list-style: none;
    letter-spacing: 2px;
    font-size: 18px;
    align-items: center;
  }
`;