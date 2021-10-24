import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { auth as authui } from "firebaseui";
import { updateUserState, userStateFetched } from "../redux/actions";

const config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: '',
  appId: "",
  measurementId: "",
};

firebase.initializeApp(config);

export const userListener = (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(updateUserState(user.uid));
    } else {
      dispatch(updateUserState("NOT_LOGGED_IN"));
    }
    dispatch(userStateFetched());
  });
};

export const db = firebase.firestore();
export const authUI = new authui.AuthUI(firebase.auth());
export default firebase;
