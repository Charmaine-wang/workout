import React, { useState, useEffect } from "react";
import firebase, { firestore } from "./firebase";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(null);
	const [authLoading, setAuthLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged(user => {
			if(user){
				firestore.collection("users").doc(user.uid).get().then((extraUserData) => {
					console.log(extraUserData.data());
					setAuthUser({...user, ...extraUserData.data()});
					setAuthLoading(false);
				})
			} else {
					setAuthUser(null);
					setAuthLoading(false);
			}
		});
		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ authUser, authLoading }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
