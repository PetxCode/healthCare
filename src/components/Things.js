import React from "react";
import styled from "styled-components";

const Things = ({ img, title, subText }) => {
	return (
		<div>
			<Container>
				<Wrapper>
					<Image src={img} />
					<Space />
					<Text>
						<Title>{title}</Title>
						<SubText>{subText}</SubText>
					</Text>
				</Wrapper>
			</Container>
		</div>
	);
};

export default Things;

const Title = styled.div`
	font-size: 30px;
	font-weight: bold;
	color: #2443a7;
`;
const SubText = styled.div`
	font-size: 20px;
	margin-top: 10px;
	margin-right: 10px;
	color: gray;

	@media screen and (max-width: 850px) {
		width: 99%;
		font-size: 18px;
	}
`;

const Text = styled.div`
	padding-bottom: 20px;
	padding-left: 30px;
`;

const Space = styled.div`
	flex: 1;
`;
const Image = styled.img`
	padding-top: 40px;
	width: 100px;
	height: 100px;
	margin-left: 30px;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;
const Container = styled.div`
	width: 450px;
	height: 350px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	border-radius: 10px;
	margin: 5px 15px;
	transition: all 350ms;
	transform: scale(1);

	:hover {
		transform: scale(1.03);
		cursor: pointer;
	}

	@media screen and (max-width: 850px) {
		width: 290px;
		/* margin-bottom: 40px; */
		font-size: 18px;
	}
`;
