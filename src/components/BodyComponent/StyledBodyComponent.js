import styled from 'styled-components'

export const StyledBodyInfo = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	> div {
		width: 50vw;
		height: 20vh;
		background-color: rgba(0, 0, 0, 0.8);
		border-bottom: 2px solid rgba(255, 255, 255, 0.1);
		padding: 8px 22px;
		> p {
			font-size: 22px;
			opacity: 0.7;
			color: white;
			padding: 8px 0px 3vh;
		}
		> div {
			display: flex;
			flex-direction: row;
			> button {
				background-color: red;
			}

			> p {
				font-size: 32px;
				color: white;
				padding: 2vh 8px;
			}
			> input {
				font-size: 36px;
				color: white;
				width: 84px;
				height: 70px;
				background-color: rgba(255, 255, 255, 0.12);
				padding: 1vh 10px;
				border: none;

				&::placeholder {
					color: white;
				}
			}

			> p:first-child {
				padding: 1vh 8px;
			}
		}
	}
`;
