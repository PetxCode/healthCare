import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import pix from "./man.png";
import { FaQuoteLeft } from "react-icons/fa";

const Last = () => {
	const data = [
		{
			say: "If you want to clear the setInterval() method and avoid memory leak, then you need to do two things:",
			who: "Petx",
		},
		{
			say: "Please note that you need to use the previous state value passed into the setCount() method to constantly increment the count value.",
			who: "Oti",
		},
		{
			say: "Executed only once during the lifetime of the component, calling the setInterval() method to run the setCount() method once every 1000 milliseconds.",
			who: "Peter",
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
					<NewText></NewText>
					<NewText>{quote[count % 3].say}</NewText>
					<Push />
					<Says>{quote[count % 3].who}</Says>
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
`;

const Says = styled.div`
	margin-bottom: 50px;
	font-size: 30px;
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
	font-size: 25px;
	margin: 10px 0;
	width: 300px;
	text-align: right;
`;

const Image = styled.img`
	width: 615px;
	height: 700px;
	object-fit: cover;
	position: absolute;
	bottom: 0;
	left: -180px;
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
`;

const Type = styled.div`
	width: 400px;
	font-size: 60px;
	text-align: right;
	font-style: oblique;
	color: #2443a7;
`;

const Text = styled.div`
	display: flex;
	justify-content: flex-end;
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
	padding: 40px 0;
	display: flex;
	justify-content: center;
`;
