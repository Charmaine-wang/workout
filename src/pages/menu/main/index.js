import React, { Fragment, useState, useContext } from "react";
import styled from 'styled-components';
import SliderComponent from '../../../components/SliderComponent'
import firebase from '../../../firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { withRouter, Link } from "react-router-dom";

const PageMain = props => {

const [user, isLoading] = useAuthState(firebase.auth());
  if (isLoading) {
		return (
			<>
					<h1>Du loggas snart in</h1>
			</>
		);
	}

	console.log(user);

				return (
					<Fragment>
						<img src="/images/shoeImage.png" alt="shoes background" />

						<SliderComponent />
							<button onClick={() => {
								firebase.auth().signOut()
								window.location.href = '/login'
							}
								}  >logga ut</button>

					</Fragment>
				);
			};



export default withRouter(PageMain);
