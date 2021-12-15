import styled from "styled-components";
import { baseColor } from "styles/base";
import { Social } from "components";

function Media() {
  return (
    <MainWrapper>
      <Social />;
      <video src="./videos/canal.mp4" autoPlay muted loop />
      <button href="">Download</button>
    </MainWrapper>
  );
}

export default Media;

// styles

const MainWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  video {
    width: 2183px;
    height: 910px;
    position: relative;
    z-index: -1;
  }
  button {
    position: absolute;
    display: block;
    top: 75%;
    left: 10%;
    font-family: "Nunito", sans-serif;
    translate: transform(-50%,-50%);
    background-color: #f73859;
    border-radius: 0;
    border: none;
    color: white;
    padding: 30px 100px;
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 1px;
    margin:0 50px;
    border-right: 2px solid white;
    border-left:2px solid white;
  }
`;
const Sqr1 = styled.div`
    position: absolute;
    z-index:6;
    top: 73%;
    left: 9%;
    background-color: transparent;
    border-radius: 0;
    color: white;
    padding: rem 100rem;
    font-size: 18px;
    letter-spacing: 1px;
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid white ;
`;

const Sqr2 = styled.div`
    position: absolute;
    z-index:6;
    top: 80%;
    left: 17%;
    background-color: transparent;
    border-radius: 0;
    color: white;
    padding: 30px 100px;
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 1px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
  `;