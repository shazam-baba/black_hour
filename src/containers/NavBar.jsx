import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { baseColor, baseStyle } from "styles/base";
// import { getDeviceType } from "helpers";

export default function NavBar() {
  return (
    <MainWrapper>
      <img src="/images/Header.png" alt="Image" height="20px" />
      <NavButtonsWrapper>
        <NavBtnComponent url="/home" label="Home" />
        <NavBtnComponent url="/news" label="News" />
        <NavBtnComponent url="/updates" label="Updates" />
        <NavBtnComponent url="/about" label="About" />
        <Button>Download</Button>
      </NavButtonsWrapper>
    </MainWrapper>
  );
}

//functions
function NavBtnComponent(props) {
  const location = useLocation();
  return (
    <Link to={props.url}>
      <NavBtn onClick={props.onClick} active={location.pathname === props.url}>
        {props.label}
      </NavBtn>
    </Link>
  );
}

//Styles
const MainWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: black;
  font-size: 18px;
  height: 100px;
  display: flex;
  flex-direction: row;
  font-family: "Nunito", sans-serif;
  letter-spacing: 0.5px;
  img {
    margin: 50px 25px;
  }
`;

const NavButtonsWrapper = styled.div``;

const NavBtn = styled.button`
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  text-decoration: none;
  color: red;
  list-style: none;
  margin: 0px 25px;
  cursor: pointer;
  border: none;
  background-color: black;
  letter-spacing: 1.2px;
  ${(props) => props.active && ` border-bottom: 3px solid #d60808;`}
`;

const Button = styled.button`
  font-family: "Nunito", sans-serif;
  background-color: #d60808;
  border-radius: 10px;
  border: none;
  color: white;
  padding: 12px 25px;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1px;
  margin: 0px 25px;
`;
