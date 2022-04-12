import React from "react";
import styled from "styled-components";

const CardProps = ({ paragraph, title, image, name }) => {
	return (
		<Container>
			<Wrapper>
				<Hold>
					<Image src={image} />
					<Text>
						<Title>{name}</Title>
						<SunTitle>{title}</SunTitle>
					</Text>
				</Hold>
				<Paragraph>{paragraph}</Paragraph>
			</Wrapper>
		</Container>
	);
};

export default CardProps;

const Image = styled.img`
	border-radius: 50%;
	height: 80px;
	width: 80px;
	object-fit: cover;
	background-color: orange;
`;

const Paragraph = styled.div``;

const SunTitle = styled.div`
	font-size: 15px;
	background: orange;
	padding-right: 10px;
	padding-bottom: 3px;
`;

const Title = styled.div``;

const Hold = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
	font-size: 25px;
	width: 100%;
`;

const Text = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 25px;
	justify-content: center;
	margin-left: 30px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Container = styled.div`
	background: white;
	width: 280px;
	height: 250px;
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	padding: 70px 20px;
	margin: 20px;
`;
