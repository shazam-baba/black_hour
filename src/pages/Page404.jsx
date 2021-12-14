import React from "react";
import styled from "styled-components";

export default function Page404() {
	return (
		<MainWrapper>
			<h1>404</h1>
		</MainWrapper>
	);
}

const ImageStyled = styled.img`
	margin: 10px auto;
	height: 100%;
	width: 100%;
`;
const MainWrapper = styled.div`
	height: 80vh;
	text-align: center;
`;
