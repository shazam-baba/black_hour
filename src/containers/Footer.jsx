import React from "react";
import styled from "styled-components";
import { GoGlobe } from 'react-icons/go';

export default function Footer() {
  return (
    <Foot>
		<h1>JOIN US</h1>
      <Company>
		<CompanyLogo>
			<img src="./images/Footer.png" alt="" />
			<h2>SHAZAM AND SIWACH</h2>
		</CompanyLogo>
		<Mature>
			<img src="./images/Mature.jpg"  height='120px'/>
		</Mature>
	  </Company>
	  <Hooker>
	  	  <icon><GoGlobe/></icon>
		  <Txt>ENGLISH</Txt>
		  <hr color="#D60808" />
		  <Txt>COOKIES PREFRENCES</Txt>
		  <hr color="#D60808" />
		  <Txt>2021 BLACK HOUR, INC. SHAZAM AND SIWACH. ALL RIGHTS RESERVED.</Txt>
		  
		  
	  </Hooker>
    </Foot>
  );
}

// styles

const Foot = styled.section`	
  height: 380px;
  background-color: black;
  color: #f1d18a;
  width: 100%;
  h1 {
    font-family: "Play", sans-serif;
    text-align: end;
    padding: 25px 70px;
    font-size: 20px;
  }
`;

const Container = styled.div``;

const Mature = styled.div`
vertical-align: center;
text-align: end;
padding: 25px 70px;
`;

const CompanyLogo = styled.div`

display:flex;
img {
	margin-top:50px;
	height:175px;
	margin-left:5px;
}
h2{
	
	margin-top:160px;
	margin-left:20px;
	margin-bottom:0;
	font-size:60px;
	color:white;
	font-family:"Play", sans-serif;
}`;

const Company = styled.div`

border-left: 2px solid #f1d18a;
border-bottom: 1px solid #f1d18a;
margin-left:50px;
display:flex;
justify-content:space-between;
`;

const Hooker = styled.div`
display:flex;
height:50px;
margin-left:50px;
overflow: hidden;
font-size: 15px;
flex-direction: row;
font-family: "Play", sans-serif;
letter-spacing: 0.5px;

margin-bottom:0;
border-left: 2px solid #f1d18a;
border-top: 1px solid #f1d18a;
icon{
	margin: 15px 10px;
	color: #D60808;
	font-size: 20px;
	display: flex;
	text-align: center;
}
hr{
	margin: 10px;
}
`;

const Txt = styled.div`
color:#D60808;
display:flex;
align-items: center;
justify-content: left;
letter-spacing:1px;
`;
