import React from "react";
import styled from "styled-components";

const PhoneBuild = () => {
	return (
		<Div>
			<Container>
				<Wrapper>
					<Image src="/assets/phone.png" />
					<Text>
						<Title>
							<Title1>Get on Board </Title1>
							<Title1>
								<p />
								in
								<span> 3 simple steps</span>
							</Title1>
						</Title>
						<SubText>
							Download the AJCare App Create an Account in a few minutes Fund
							your wallet and start transacting
						</SubText>
						<Get>Download the AJCare App</Get>
						<GetImage src="/assets/save.png" />
					</Text>
				</Wrapper>
			</Container>
		</Div>
	);
};

export default PhoneBuild;

const GetImage = styled.img`
	width: 300px;
	height: 90px;
	object-fit: contain;
	margin-top: 30px;

	transform: scale(1);
	transition: all 350ms;

	:hover {
		cursor: pointer;
		transform: scale(1.03);
	}

	margin: 0;
	width: 280px;
	margin-left: 20px;
	margin-top: 20px;
`;

const Get = styled.div`
	font-size: 40px;
	margin-top: 30px;
	font-weight: bold;
	color: #2443a7;

	@media screen and (max-width: 850px) {
		font-size: 28px;
		text-align: center;
	}
`;

const SubText = styled.div`
	font-size: 30px;
	width: 500px;
	text-align: left;
	margin-top: 30px;
	color: gray;

	@media screen and (max-width: 850px) {
		font-size: 20px;
		width: 300px;
		margin-left: 10px;
	}
`;

const Title = styled.div`
	color: #2443a7;
`;

const Title1 = styled.div`
	font-size: 60px;
	font-weight: bold;
	position: relative;

	p {
		margin: 0;
		position: absolute;
		width: 375px;
		background-color: #00e59e;
		top: 55px;
		left: 65px;
		height: 7px;
		z-index: -10;
	}

	@media screen and (max-width: 850px) {
		font-size: 40px;
		text-align: center;

		p {
			margin: 0;
			position: absolute;
			width: 240px;
			background-color: #00e59e;
			top: 35px;
			left: 65px;
			height: 7px;
			z-index: -10;
		}
	}
`;

const Text = styled.div`
	@media screen and (max-width: 850px) {
	}
`;

const Image = styled.img`
	width: 600px;
	height: 100%;
	object-fit: contain;
	margin-right: 60px;
	transform: scale(1);
	transition: all 350ms;

	:hover {
		cursor: pointer;
		transform: scale(1.03);
	}

	@media screen and (max-width: 850px) {
		width: 240px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 850px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
	}
`;

const Container = styled.div`
	/* width: 60%; */
	height: 700px;
`;

const Div = styled.div`
	width: 100%;
	height: 700px;
	display: flex;
	justify-content: center;
`;
