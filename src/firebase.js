import firebase from 'firebase/app'
import 'firebase/firestore';
// import 'firebase/auth'
import 'firebase/firebase-auth'


  const firebaseConfig = {
		apiKey: "AIzaSyChhm6GjhGZNbH0aMpfd_-KFCozuHV4iCI",
		authDomain: "yrgo-workout-2019.firebaseapp.com",
		databaseURL: "https://yrgo-workout-2019.firebaseio.com",
		projectId: "yrgo-workout-2019",
		storageBucket: "yrgo-workout-2019.appspot.com",
		messagingSenderId: "568929735695",
		appId: "1:568929735695:web:977b267faf7b82d2f17f7a"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);

	export const firestore = firebase.firestore();
	export const auth = firebase.auth();
	// const providers = {	emailAndPasswordProvider: new firebase.auth.EmailAuthProvider()
	// }




	window.firebase = firebase

	export default firebase;
