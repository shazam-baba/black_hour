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
    top: 75%;
    left: 5%;
    // transform: translate(-50%, -50%);
    font-family: "Nunito", sans-serif;
    background-color: #f73859;
    border-radius: 0;
    border: none;
    color: white;
    padding: 30px 100px;
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 1px;
  }
`;
const DownloadBtn = styled.div`
  width: 100px;
  color: red;
  background-color: red;
`;
const Button = styled.button`
  z-index: 5;
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
