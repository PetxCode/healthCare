import React from "react";
import styled from "styled-components";
import CardProps from "./CardProps";
import pix from "./1.jpg";

const PeoplleSays = () => {
	return (
		<Container>
			<Text>
				<Title>What People </Title>
				<Title2>
					Think{" "}
					<span>
						about us
						<div />
					</span>{" "}
				</Title2>
				<Space />
				<Logos>
					<Logo1>Farad</Logo1>
					<Logo1>CodeLab</Logo1>
					<Logo1>sheCodes</Logo1>
					<Logo1>Planet of E-Sport</Logo1>
				</Logos>

				<Props>
					<CardProps
						image={pix}
						paragraph="The Kudi team has an ear to the ground that allows them to understand
                what their users and customers most need, such that their product is
                second to none in delivering what users need and making a real dent in
                financial inclusion."
						title="Founder,Ventures"
						name="Peter Oti"
					/>
					<CardProps
						image={pix}
						paragraph="The Kudi team has an ear to the ground that allows them to understand
                what their users and customers most need, such that their product is
                second to none in delivering what users need and making a real dent in
                financial inclusion."
						title="Founder,Ventures"
						name="Peter Oti"
					/>
					<CardProps
						image={pix}
						paragraph="The Kudi team has an ear to the ground that allows them to understand
                what their users and customers most need, such that their product is
                second to none in delivering what users need and making a real dent in
                financial inclusion."
						title="Founder,Ventures"
						name="Peter Oti"
					/>
				</Props>
			</Text>
		</Container>
	);
};

export default PeoplleSays;

const Props = styled.div`
	width: 100%;
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
	margin-top: 30px;
`;

const Logo1 = styled.div`
	margin: 16px 30px;
	font-size: 30px;
`;

const Logos = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
	flex-wrap: wrap;

	@media screen and (max-width: 768px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
`;

const Space = styled.div`
	margin-top: 50px;
`;

const Title2 = styled.div`
	display: flex;
	font-size: 50px;
	z-index: 100;

	span {
		margin: 0 5px;
		position: relative;
		z-index: 100;
	}

	div {
		width: 200px;
		height: 4px;
		background: #00e59e;
		position: absolute;
		bottom: 10px;
		z-index: 10;
	}

	@media screen and (max-width: 768px) {
		font-size: 25px;
		margin-bottom: 0;

		div {
			width: 100px;
			bottom: 4px;
			z-index: -10;
		}
	}
`;

const Title = styled.div`
	font-weight: 600;
	font-size: 50px;

	@media screen and (max-width: 768px) {
		font-size: 30px;
	}
`;
const Text = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	background: #f0f4f9;
	width: 100%;
	height: 100%;
	min-height: 500px;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 40px 0;
	color: #2443a7;
`;
