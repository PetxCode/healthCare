import React from "react";
import styled from "styled-components";
import { RiServiceFill } from "react-icons/ri";

const Card = ({ title, text, images }) => {
	return (
		<DIv2>
			<Div>
				<Container>
					<Wrapper>
						<Title>{title}</Title>
						<p>Read More</p>
						<Space />
						<Icon>
							<Image src={images} />
							<span>{text}</span>
						</Icon>
						<Space2 />
					</Wrapper>
				</Container>
			</Div>
		</DIv2>
	);
};

export default Card;

const DIv2 = styled.div`
	/* width: 100%; */
	display: flex;
	justify-content: center;
`;
const Space2 = styled.div`
	margin-top: 20px;
`;

const Text = styled.div`
	color: white;
	opacity: 0;

	:hover {
		opacity: 1;
	}
`;

const Image = styled.img`
	height: 70px;
	color: white;
	font-size: 60px;
	width: 120px;
	object-fit: contain;
	margin-right: 10px;
	/* background-color: red; */
	margin-top: 10px;
`;

const Icon = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	margin-bottom: 30px;

	:hover {
		/* margin-bottom: 50px; */
	}
`;

const Sub = styled.div`
	color: #00e59e;
	text-decoration: underline;
`;

const Title = styled.div`
	color: white;
	font-weight: 500;
	font-size: large;
	margin-bottom: 15px;
	width: 100px;
`;

const Space = styled.div`
	flex: 1;
`;

const Wrapper = styled.div`
	padding-top: 20px;
	display: flex;
	flex-direction: column;
	height: 100%;
	padding-left: 20px;
`;
const Container = styled.div`
	width: 230px;
	background-color: #2443a7;
	height: 300px;
	margin-bottom: 60px;
	transition: all 350ms;
	border-radius: 8px;
	transition: all 350ms;
	margin-left: 10px;
	margin-right: 10px;

	span {
		opacity: 0;
		color: white;
		transition: all 350ms;
	}

	p {
		color: #00e59e;
		text-decoration: underline;
		margin: 0;
		opacity: 1;
		transition: all 1050ms;
	}

	:hover {
		width: 330px;
		cursor: pointer;
		height: 300px;

		span {
			opacity: 1;
			margin-right: 20px;
		}

		p {
			opacity: 0;
		}
	}

	@media screen and (max-width: 850px) {
		width: 90%;

		:hover {
			width: 90%;
		}
	}
`;

const Div = styled.div`
	display: flex;
	justify-content: center;
`;
