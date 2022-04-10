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
`;

const Container = styled.div`
	width: 100%;
	height: 200px;
`;
