import styled from "styled-components";

export const StyledLayout = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	/* justify-content: space-evenly; */
	flex-direction: column;
	height: 100vh;
	width: 100%;
	background-color: #000000;
	animation-name: moveLogo;
	animation-duration: 3s;
	> svg {
		position: fixed;
		top: 340px;
	}

	@keyframes moveLogo {
		0% {
			svg {
			}
		}
		25% {
			> .one {
				transform: translateY(100px);
			}
		}
	}
`;
