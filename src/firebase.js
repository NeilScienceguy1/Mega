import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBGDyCUQXMLojwp0O5KN71AXT0W6IPF6Nk",
  authDomain: "megachat-75fc7.firebaseapp.com",
  projectId: "megachat-75fc7",
  storageBucket: "megachat-75fc7.appspot.com",
  messagingSenderId: "557428870512",
  appId: "1:557428870512:web:a34c2bf0b1eb78ca9953b5",
  measurementId: "G-B0QBVGQW64",
}).auth()


