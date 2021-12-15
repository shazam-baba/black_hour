import React from "react";
import styled from "styled-components";
import { GoGlobe } from "react-icons/go";

export default function Footer() {
  return (
    <Foot>
      <Join>
        <h1>JOIN US</h1>
      </Join>
      <Company>
        <CompanyLogo>
          <img src="./images/Footer.png" alt="" />
          <h2><a href='https://github.com/shazam-baba'>SHAZAM</a> AND <a href='https://github.com/vinaysiwachvs'>SIWACH</a></h2>
        </CompanyLogo>
        <Mature>
          <img src="./images/Mature.jpg" height="120px" />
        </Mature>
      </Company>
      <Hooker>
        <icon>
          <GoGlobe />
        </icon>
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
  height: 359px;
  background-color: black;
  color: #f1d18a;
  width: 100%;
`;

const Container = styled.div``;

const Mature = styled.div`
  vertical-align: center;
  text-align: end;
  padding: 25px 70px;
  right: 0;
  position: absolute;
`;

const CompanyLogo = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  img {
    margin-top: 50px;
    height: 175px;
    margin-left: 5px;
  }
  h2 {
    // position: absolute;
    // bottom: 0%;
    // right: 20%;
    margin-top: 180px;
    margin-left: 20px;
    margin-bottom: 0;
    padding-bottom: 0;
    font-size: 30px;
    color: white;
    font-family: 'CGF Locust Resistance', sans-serif;
    letter-spacing: 3px;
    a{
      text-decoration: none;
      color: white;
    }
  }
`;

const Company = styled.div`
  border-left: 2px solid #f1d18a;
  border-bottom: 1px solid #f1d18a;
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
`;

const Hooker = styled.div`
  display: flex;
  height: 60px;
  margin-left: 50px;
  overflow: hidden;
  font-size: 15px;
  flex-direction: row;
  font-family: "Play", sans-serif;
  letter-spacing: 0.5px;

  margin-bottom: 0;
  border-left: 2px solid #f1d18a;
  border-top: 1px solid #f1d18a;
  icon {
    margin: 15px 10px;
    color: #d60808;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  hr {
    margin: 10px;
  }
`;

const Txt = styled.div`
  color: #d60808;
  display: flex;
  align-items: center;
  justify-content: left;
  letter-spacing: 1px;
`;

const Join = styled.div`
  background-color: black;
  margin: 0 0 0 50px;
  border-left: 2px solid #f1d18a;
  h1 {
    font-family: "Play", sans-serif;
    text-align: end;
    padding: 25px 70px;
    font-size: 20px;
    margin: 0;
  }
`;