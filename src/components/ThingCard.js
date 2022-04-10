import React from "react";
import Things from "./Things";
import styled from "styled-components";
const ThingCard = () => {
	return (
		<Div>
			<Pix />
			<Container>
				<Things
					img="/assets/hosp.png"
					title="Ease"
					subText="In partnership with our Agents, we are making it easier to
							withdraw money, send money and make bill payments even in the most
							remote areas."
				/>
				<Things
					img="/assets/amb.png"
					title="Speed"
					subText="Speed is everything when it comes to making payments, you can complete a transaction in a minute or less on Kudi at any of our Agent Points."
				/>
			</Container>
		</Div>
	);
};

export default ThingCard;

const Pix = styled.div`
	background-image: url("/assets/part.png");
	width: 100%;
	height: 200px;
	z-index: -10;
	background-position: center;
	background-size: contain;
`;

const Container = styled.div`
	width: 100%;
	justify-content: center;
	flex-wrap: wrap;
	display: flex;
	margin-top: -120px;
`;

const Div = styled.div`
	width: 100%;
	margin-bottom: 50px;
`;
