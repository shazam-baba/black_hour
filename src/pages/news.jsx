import styled from "styled-components";
import { baseColor } from "styles/base";
import { Social } from "components";

function News() {
  return (
    <MainWrapper>
      <h1>News</h1>
      <Social />;
    </MainWrapper>
  );
}

export default News;

// styles

const MainWrapper = styled.div``;