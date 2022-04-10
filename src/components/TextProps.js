import React from "react";
import styled from "styled-components";

const TextProps = ({ text }) => {
	return (
		<div>
			<Div>
				<Hold>{text}</Hold>
			</Div>
		</div>
	);
};

export default TextProps;

const Hold = styled.div`
	color: #2443a7;
	width: 500px;
	text-align: center;
	margin: 60px 0;
	font-size: 40px;
	font-weight: bold;

	@media screen and (max-width: 850px) {
		font-size: 20px;
		margin: 30px 0;
	}
`;

const Div = styled.div`
	display: flex;
	justify-content: center;
`;
