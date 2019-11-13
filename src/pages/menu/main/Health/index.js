import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useAuth } from "../../../../authcontext";
import firebase, {firestore} from "../../../../firebase";

import ArrowBack from '../../../../components/ArrowBack'
import HealthComponent from '../../../../components/HealthComponent';
import BodyComponent from '../../../../components/BodyComponent';
import FadedBackground from '../../../../components/FadedBackground';
import Button from "../../../../components/Button"

const StyledHealth = styled.div`
	height: calc(100vh - 54px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: space-between;
`;

const HealthWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 10vh;
	width: 100%;
`;

const BodyWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`;

const BMIWrapper = styled.div`
	width: 100%;
	height: 10vh;
	background-color: rgba(0,0,0, 0.8);
	display: flex;
	flex-directin: row;
	justify-content: flex-end;
	align-items: center;
	padding: 0 34px;
	> p:nth-child(1) {
		font-size: 24px;
		color: white;
		opacity: 0.8;
		margin-right: 10px;
	}
	> p:nth-child(2) {
		font-size: 40px;
		color: white;
	}
`;

const PageHealth = () => {
const { authUser, authLoading } = useAuth();
const [length, setLength] = useState(null);
const [weight, setWeight] = useState(null);
  const [state, setState] = useState({
		length: "",
		weight: ""
	});


const handleChange = (event) => {
	// const value = event.target.value;
	//   setState({
	// 		...state,
	// 		[event.target.name]: value
	// 	});
			if (!length == "") {
			authUser.length = length
			}
			if (!weight == "") {
				authUser.weight = weight
			}

	event.preventDefault();

		firestore
			.collection("users")
			.doc(authUser.uid)
			.update({
				length: authUser.length,
				weight: authUser.weight
			});

 }

//  let BMI;

 	const BMI = Number(
		(authUser.weight / Math.pow(authUser.length, 2)) * 10000
	).toFixed(1);

useEffect(() => {


}, [authUser.length, authUser.weight]);



	return (
		<div>
			<FadedBackground opacity={"0.6"} />
			<ArrowBack />
			<StyledHealth>
				<HealthWrapper>
					<HealthComponent
						title={"Total activity today"}
						firstValue={"3.5" + " h"}
						secondValue={"9" + " km"}
					/>
					<HealthComponent
						title={"Calories burned"}
						secondValue={"570" + " kcal"}
					/>
					<HealthComponent
						title={"Rekommended hydration"}
						secondValue={"6" + " glases"}
					/>
				</HealthWrapper>

				<div>
					{/* <BodyWrapper> */}
					<BodyComponent
						onSubmit={handleChange}
					>
						<div>
							<p>Weight</p>

							<div>
								<input
									onChange={(e) => setWeight(e.target.value)}
									type="text"
									name="weight"
									placeholder={authUser.weight}
									id="weight"
								/>
								<p>kg</p>
							</div>
						</div>
						<div>
							<p>Length</p>
							<div>
								<input
									onChange={(e) => setLength(e.target.value)}
									type="text"
									name="length"
									placeholder={authUser.length}
									id="length"
								/>
								<p>cm</p>
							</div>

							<Button
								margin="0 0 0 0"
								btnWidth="100px"
								fontColor="white"
								bgColor="rgba(255,255,255, 0.3)"
								fontSize="20px"
								type="submit"
							>
								lenth
							</Button>
						</div>
					</BodyComponent>

					<BMIWrapper>
						<p> BMI </p>
						<p>{BMI} </p>
					</BMIWrapper>
				</div>
			</StyledHealth>
		</div>
	);
};

export default PageHealth;
