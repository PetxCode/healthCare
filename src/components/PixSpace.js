import React from "react";
import styled from "styled-components";

const PixSpace = () => {
	return (
		<div>
			<Container>
				<Pix />
			</Container>
		</div>
	);
};

export default PixSpace;

const Pix = styled.div`
	height: 100%;
	width: 100%;
	background-image: url("/assets/part.png");

	@media screen and (max-width: 550px) {
		height: 100px;
	}
`;

const Container = styled.div`
	width: 100%;
	min-height: 100px;
	height: 100%;
`;
