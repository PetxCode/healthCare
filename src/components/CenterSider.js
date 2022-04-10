import React from "react";
import styled from "styled-components";

const CenterSider = () => {
	return (
		<div>
			<Container>
				<Wrapper>
					<Text>
						We are trusted by millions of people every day to secure their
						Health and well being, get good health care at a very affordable
						prize across Ajegunle.
					</Text>
					<Button>Get Started</Button>
				</Wrapper>
			</Container>
		</div>
	);
};

export default CenterSider;

const Button = styled.div`
	padding: 20px 50px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	background-color: #00e59e;
	border-radius: 30px;
	transform: scale(1);
	transition: all 350ms;
	color: #2443a7;
	font-weight: bold;
	font-size: 20px;

	:hover {
		cursor: pointer;
		transform: scale(1.03);
	}
`;

const Text = styled.div`
	width: 500px;
	font-size: 30px;
	margin-right: 30px;

	@media screen and (max-width: 850px) {
		width: 100%;
		text-align: center;
		margin-bottom: 40px;
		display: flex;
		justify-content: center;
		margin: 30px 0;
		font-size: 20px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	color: white;
	align-items: center;

	@media screen and (max-width: 850px) {
		display: flex;
		flex-direction: column;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 400px;
	background-color: #2443a7;
	background-image: url("/assets/earth.png");
	background-position: center;
	background-size: cover;

	/* @media screen and (max-width: 850px) {
		width: 100%;
	} */
`;
