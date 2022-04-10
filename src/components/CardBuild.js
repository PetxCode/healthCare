import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardBuild = () => {
	return (
		<Container>
			<Card
				title="Reliable Service"
				text="We understand the importance of reliability and we are proud to offer all our curstomers the most reliable service."
				images="/assets/care.png"
			/>

			<Card
				title="Cost Effective."
				text="You will never have to worry to be in AJCare HMO because whatever is your pocket, we have the right plan for you!"
				images="/assets/money.png "
			/>

			<Card
				title="Instant
                Response."
				text="We provide instant and quick response to our customers Health concern, we do not see any case as a small or big case... "
				images="/assets/icons.png"
			/>
			<Card
				title="Insurance your Health."
				text="You are protected by the AjCare Health Insurance Plan so you never need to worry about your Health issue because we've got you covered."
				images="/assets/health1.png"
			/>
		</Container>
	);
};

export default CardBuild;

const Container = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 850px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
		justify-content: center;
	}
`;
