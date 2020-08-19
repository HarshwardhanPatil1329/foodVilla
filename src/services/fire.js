import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBCIKxw2ahIB3Pd1Iv1UNYmzxlVAereIHs",
  authDomain: "utility-logic-284815.firebaseapp.com",
  databaseURL: "https://utility-logic-284815.firebaseio.com",
  projectId: "utility-logic-284815",
  storageBucket: "utility-logic-284815.appspot.com",
  messagingSenderId: "246951211803",
  appId: "1:246951211803:web:8a7567a2fe2f6e714a19be",
  measurementId: "G-K75BC0MHJK",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;