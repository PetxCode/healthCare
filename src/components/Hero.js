import React from "react";
import styled from "styled-components";
import pix from "./hero.gif";

const Hero = () => {
	return (
		<div>
			<Container>
				<Wrapper>
					<Text>
						<Top>
							Providing{" "}
							<span>
								affordable <p />
							</span>{" "}
							HealthCare services
						</Top>
						<Mid>
							As an AjCare Client you are sure of a professional Health services
							in your local community at Low COST.
						</Mid>
						<Button>Get Started</Button>
					</Text>
					<Image src={pix} />
				</Wrapper>
			</Container>

			<Div>
				<Hold>Why you should be part of AjCare HMO</Hold>
			</Div>
		</div>
	);
};

export default Hero;

const Hold = styled.div`
	color: #2443a7;
	width: 500px;
	text-align: center;
	margin: 60px 0;
	font-size: 40px;
	font-weight: bold;

	@media screen and (max-width: 850px) {
		font-size: 25px;
		margin: 40px 20px;
	}
`;

const Div = styled.div`
	display: flex;
	justify-content: center;
`;

const Button = styled.div`
	margin-top: 30px;
	background-color: #00e59e;
	width: 250px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60px;
	font-size: 20px;
	font-weight: bold;
	transform: scale(1.03);
	transition: all 350ms;

	:hover {
		transform: scale(1);
		cursor: pointer;

		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}

	@media screen and (max-width: 850px) {
		margin-bottom: 20px;
	}
`;

const Text = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	margin-left: 30px;

	@media screen and (max-width: 850px) {
		/* margin-top: 50px;
		margin: 0px 20px;
        text-align: center; */
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-top: 100px;
		margin-left: 0px;
		margin-right: 0px;
	}
`;

const Top = styled.div`
	font-weight: bold;
	font-size: 45px;
	margin-bottom: 30px;
	color: #2443a7;

	span {
		position: relative;
		z-index: 10;

		p {
			background-color: #00e59e;
			width: 210px;
			height: 8px;
			margin: 0;
			position: absolute;
			right: 0;
			top: 40px;
			left: 2px;
			z-index: -1;

			@media screen and (max-width: 850px) {
				width: 165px;
				position: absolute;
				right: 7px;
				left: 2px;
				top: 30px;
			}
		}
	}

	@media screen and (max-width: 850px) {
		margin: 0 20px;
		font-size: 35px;
	}
`;
const Mid = styled.div`
	font-size: 28px;
	color: #748cad;

	@media screen and (max-width: 850px) {
		margin: 0 20px;
		font-size: 20px;
		margin-top: 20px;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Wrapper = styled.section`
	font-size: 1rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	max-width: 75.1em;
	margin: auto;
	min-height: 35.78em;
	height: 100%;
	background-color: #f0f4f9;

	@media screen and (max-width: 850px) {
		display: flex;
		flex-direction: column;
	}
`;

const Container = styled.div`
	margin-top: 80px;
	width: 100%;
	min-height: 500px;
	height: 100%;
	background-color: #f0f4f9;

	@media screen and (max-width: 850px) {
		margin-top: 30px;
	}
`;
