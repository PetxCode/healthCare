import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import { BiMenu } from "react-icons/bi";

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const onToggle = () => {
		setToggle(!toggle);
	};

	return (
		<Head>
			<Head1>
				<Container>
					<Wrapper>
						{/* <Logo src="/healthLogo.png" /> */}
						<Div>Health Product</Div>
						{/* <Navigation>
							<Nav>
								<a>
									<Link to="/">
										<img src="/images/home-icon.svg" />
									</Link>
									<span>Home</span>
								</a>
							</Nav>
							<Nav>
								<a>
									<Link to="/">
										<img src="/images/movie-icon.svg" />
									</Link>
									<span>Courses</span>
								</a>
							</Nav>
							<Nav>
								<a>
									<Link to="/">
										<img src="/images/search-icon.svg" />
									</Link>
									<span>Search</span>
								</a>
							</Nav>
						</Navigation> */}

						<Navigation>
							<Button bg="#2443a7" cl="white">
								view Deshboard
							</Button>
							<Button bg="white" cl="#2443a7">
								Log Out
							</Button>
						</Navigation>

						<Cart>
							<Button bg="#2443a7" cl="white">
								view cart now
							</Button>
						</Cart>

						<Menu onClick={onToggle} />
					</Wrapper>
				</Container>
				{toggle ? <SideBar toggle={toggle} setToggle={setToggle} /> : null}
			</Head1>
		</Head>
	);
};

export default Header;

const Div = styled.div`
	margin-left: 20px;
	font-weight: bold;
	font-size: 20px;
`;

const Head1 = styled.div`
	/* position: relative; */
`;

const Head = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 11;
`;

const Cart = styled.div`
	display: none;

	@media screen and (max-width: 850px) {
		display: block;
	}
`;

const Menu = styled(BiMenu)`
	display: none;

	@media screen and (max-width: 850px) {
		display: block;
		margin-right: 20px;
		font-size: 60px;
		transition: all 350ms;
		transform: scale(1);

		:hover {
			transform: scale(1.05);
			cursor: pointer;
		}
	}
`;

const Button = styled.div`
	margin-right: 20px;
	padding: 12px 20px;
	background-color: ${({ bg }) => bg};
	color: ${({ cl }) => cl};
	border-radius: 2px;
	font-weight: bold;
	text-transform: uppercase;
	font-size: 15px;
	text-align: center;

	transition: all 350ms;
	transform: scale(1);
	:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 20px;
	align-items: center;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;

		img {
			width: 20px;
			height: 20px;
		}

		span {
			font-size: 13px;
			font-weight: bold;
			letter-spacing: 1.42px;
			position: relative;

			&:after {
				content: "";
				height: 2px;
				background: white;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform: scaleX(1);
				transform-origin: left center;
				transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;
			}
		}
		&:hover {
			span:after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}
`;

const Link = styled.div``;
const Nav = styled.div`
	display: flex;
	margin: 0 10px;

	a {
		display: flex;
		align-items: center;

		img {
			width: 25px;
			height: 25px;
			margin: 0 10px;
			transform: scale(1);
			transition: all 350ms;
			margin-top: 5px;
		}

		span {
			position: relative;
			transform: scale(1);
			transition: all 350ms;
			&:after {
				content: "";
				height: 3px;
				background-color: white;
				top: 20px;
				position: absolute;
				left: 0;
				right: 0;

				opacity: 0;
				transition: all 350ms;
				transform: scaleX(1.15);
				transform-origin: center;
			}
		}
		:hover {
			cursor: pointer;

			img {
				transform: scale(1.42);
			}

			span {
				transform: scale(1.05);
				font-weight: bold;
				letter-spacing: 1.15px;
				&:after {
					opacity: 1;
					transform: scale(1.05);
				}
			}
		}
	}
`;

const Navigation = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 850px) {
		display: none;
	}
`;

const Logo = styled.img`
	margin-left: 20px;
	width: 100px;
	height: 40px;
	object-fit: contain;
	transition: all 350ms;
	transform: scale(1);

	:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 80px;
	justify-content: space-between;
`;

const Container = styled.div`
	color: white;
	background-color: black;
	width: 100%;
	height: 80px;
	z-index: 1;
`;
