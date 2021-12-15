import React from "react";
import styled from "styled-components";
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";

function Social() {
    return (
        <MainWrapper>
            <Card>
                <ul>
                    <li><a href="https://discord.com"><BsDiscord color="white" font-size='30px'/></a></li>
                     <li><a href="https://instagram.com"><BsInstagram color="white" font-size='30px'/></a></li>
                     <li><a href="https://twitter.com"><BsTwitter color="white" font-size='30px'/></a></li>
                </ul>
            </Card>
        </MainWrapper>
    )
}

export default Social
//styled components

const MainWrapper = styled.section`
width: 100%;
height: 100%;
`;
const Card = styled.div`
  position: fixed;
  top: 80%;
  left: 0%;
  transform: translate(-50%, -50%);
  h1 {
    color: #fff;
  }
  ul {
    display: block;
    margin: 0;
    margin-left: 10px;
    text-decoration: none;
    list-style: none;
  }
  li {
    margin-bottom: 50px;
    cursor: pointer;
    text-decoration: none;
    list-style: none;
  }
`;
