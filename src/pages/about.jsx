import styled from "styled-components";
import { baseColor } from "styles/base";
import { Social } from "components";

function About() {
  return (
    <MainWrapper>
      <h1>About</h1>
      <Social />;
    </MainWrapper>
  );
}

export default About;

// styles

const MainWrapper = styled.div``;