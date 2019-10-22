import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TweenMax } from "gsap";


const StyledNavbar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100vw;
	position: absolute;
	height: 48px;
	/* left: 0px; */
	top: 764px;
	background: #FFFFFF;

	& > img {
		width: 7%;
		height: 45%;
	}

`;

const MainSVG = styled.svg`
	/* position: absolute;
	border: ridge rgb(127, 127, 127) 10vh;
	top: 0;
	left: 0;
	background: rgb(243, 243, 243); */
`;

const Navbar = () => {
  let [size, setSize] = useState(10);
	const margin = size * 2;
	const span = 100 - margin * 2;
	const [reset, setReset] = useState(false);
	useEffect(() => {
		setSize(size + Math.random() * size);
		setReset(false);
		TweenMax.to(".circle-shape", 1, {
			attr: {
				r: () => {
					setSize(10);
					return size + "%";
				},
				cx: () => {
					return margin + Math.random() * span + "%";
				},

				cy: () => {
					return margin + Math.random() * span + "%";
				}
			}
		});
		console.log(size);
	}, [reset]);

	return (
		<StyledNavbar>
			<img src="images/homeblack.png" alt="" />
			<img src="images/timeblack.png" alt="" />
			<img src="images/statblack.png" alt="" />
			<img src="images/heartblack.png" alt="" />
			<img src="images/setupblack.png" alt="" />

			{/* <MainSVG
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio
				width="100%"
				height="100%"
			>
				<defs>
					<filter id="fancy-goo">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="10"
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 -255  0 1 0 0 -255  0 0 1 0 -255  0 0 0 30 -9"
							result="goo"
						/>
						<feComposite in="SourceGraphic" in2="goo" operator="atop" />
					</filter>
				</defs>

				<g filter="url(#fancy-goo)">
					<circle className="circle-shape" fill="#000000" />
				</g>
			</MainSVG>
			<svg>
				<circle cx="100" cy="100" r="50" fill="red" id="cir" />
			</svg> */}

		</StyledNavbar>
	);
};

export default Navbar;
