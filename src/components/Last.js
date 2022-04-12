import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import pix from "./man.png";
import { FaQuoteLeft } from "react-icons/fa";

const Last = () => {
	const data = [
		{
			say: "If you want to clear the setInterval() method and avoid memory leak, then you need to do two things:",
			who: "Petx Global",
		},
		{
			say: "Please note thatvalue passed into the setCount() method to constantly increment the count value.",
			who: "Oti Peter",
		},
		{
			say: "Executed only lifetime of the component, calling the setInterval() method to run the setCount() .",
			who: "Peter Oti",
		},
	];

	const [quote, setQuote] = useState(data);
	const [count, setCount] = useState(0);

	const textColor = useRef();
	const textColor1 = useRef();
	const textColor2 = useRef();

	const myColor = ["#7490E9", "white", "white"];
	const myColor1 = ["white", "#7490E9", "white"];
	const myColor2 = ["white", "white", "#7490E9"];

	useEffect(() => {
		setInterval(() => {
			setCount((count) => count + 1);
		}, 6000);
	}, []);

	useEffect(() => {
		textColor.current.style.backgroundColor = myColor[count % myColor.length];
		textColor.current.style.transition = "all 350ms";

		textColor1.current.style.backgroundColor =
			myColor1[count % myColor1.length];
		textColor1.current.style.transition = "all 350ms";

		textColor2.current.style.backgroundColor =
			myColor2[count % myColor2.length];
		textColor2.current.style.transition = "all 350ms";
	}, [count]);

	console.log(quote[count % quote.length].say);
	console.log(count);
	return (
		<Container>
			<Wrapper>
				<Text>
					<Type>What our patient have to say...</Type>
				</Text>
				<Box>
					<Image src={pix} />

					<Icon />
					<NewText>{quote[count % quote.length].say}</NewText>
					<Push />
					<Says>{quote[count % quote.length].who}</Says>
					<Dot>
						<Dots ref={textColor} />
						<Dots ref={textColor1} />
						<Dots ref={textColor2} />
					</Dot>
				</Box>
			</Wrapper>
		</Container>
	);
};

export default Last;

const Icon = styled(FaQuoteLeft)`
	font-size: 70px;
`;

const Dot = styled.div`
	display: flex;

	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
		width: 100%;
	}
`;

const Says = styled.div`
	margin-bottom: 50px;
	font-size: 40px;
	font-weight: bold;

	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
		width: 100%;
		font-size: 30px;
		text-transform: uppercase;
		margin-top: 40px;
		text-align: center;
	}
`;

const Dots = styled.div`
	/* background: white; */
	border-radius: 50%;
	width: 20px;
	height: 20px;
	margin: 0 4px;
`;

const Push = styled.div`
	flex: 1;
`;
const NewText = styled.div`
	font-size: 30px;
	margin: 10px 0;
	width: 50%;
	text-align: right;
	margin-top: 10px;

	@media screen and (max-width: 768px) {
		text-align: left;
		width: 100%;
		font-size: 20px;
	}
`;

const Image = styled.img`
	width: 615px;
	height: 700px;
	object-fit: cover;
	position: absolute;
	bottom: 0;
	left: -180px;

	@media screen and (max-width: 668px) {
		display: none;
		flex-wrap: wrap;
		justify-content: center;
	}
`;

const Box = styled.div`
	background-color: #2443a7;
	color: white;
	padding: 40px;
	display: flex;
	align-items: flex-end;
	margin: 20px 0;
	position: relative;
	height: 500px;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
		width: 80%;
		flex-direction: column;
		font-size: 30px;
		height: 400px;
	}
`;

const Type = styled.div`
	width: 400px;
	font-size: 60px;
	text-align: right;
	font-style: oblique;
	color: #2443a7;

	@media screen and (max-width: 768px) {
		width: 300px;
		font-size: 40px;
	}
`;

const Text = styled.div`
	display: flex;
	justify-content: flex-end;

	@media screen and (max-width: 768px) {
		width: 115%;
	}
`;
const Wrapper = styled.div`
	width: 70%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: 500px;
	/* padding: 40px 0; */
	display: flex;
	justify-content: center;
`;
