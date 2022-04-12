import React from "react";
import styled from "styled-components";
import Card from "./Card";
import CardBuild from "./CardBuild";
import CenterSider from "./CenterSider";
import Hero from "./Hero";
import Last from "./Last";
import PeoplleSays from "./PeoplleSays";
import PhoneBuild from "./PhoneBuild";
import PixSpace from "./PixSpace";
import TextProps from "./TextProps";
import ThingCard from "./ThingCard";

const Home = () => {
	return (
		<div>
			<Hero />
			<CardBuild />
			<TextProps text="With AjCare, you can be sure of 2 things. Across Ajegunle" />
			<ThingCard />
			<Gap />
			<CenterSider />
			<Gap />
			<PhoneBuild />
			<PixSpace />
			<PeoplleSays />
			<Last />
		</div>
	);
};

export default Home;

const Gap = styled.div`
	margin-top: 150px;

	@media screen and (max-width: 850px) {
		margin-top: 40px;
	}
`;

const Wrapper = styled.div``;
const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
