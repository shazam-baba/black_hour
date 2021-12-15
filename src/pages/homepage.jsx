import styled from "styled-components";
import { baseColor } from "styles/base";
import { Social } from "components";

function Homepage() {
  return (
    <MainWrapper>
      <Social />
    </MainWrapper>
  );
}

export default Homepage;

// styles

const MainWrapper = styled.div`
  height: 1000px;
`;
