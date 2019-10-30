import React, { Fragment, useState, useEffect, useContext } from "react";
import styled from 'styled-components';
import SliderComponent from '../../../components/SliderComponent'
import firebase, {firestore} from '../../../firebase'

import { withRouter, Link } from "react-router-dom";


const PageMain = props => {

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
