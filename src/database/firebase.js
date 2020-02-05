import * as firebase from "firebase"

// Initialize Firebase
var config = {
	apiKey: "AIzaSyBFj26zZAxWdM6FXtXDDCPKDAcz3bYzg5A",
	authDomain: "hvl-gruppe20.firebaseapp.com",
	databaseURL: "https://hvl-gruppe20.firebaseio.com",
	projectId: "hvl-gruppe20",
	storageBucket: "hvl-gruppe20.appspot.com",
	messagingSenderId: "764160085618",
	appId: "1:764160085618:web:2aa5d92d29b045abc5bceb",
	measurementId: "G-FRZ2ZC9EED"
}
firebase.initializeApp(config)

export const database = firebase.database().ref("/posts")
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
