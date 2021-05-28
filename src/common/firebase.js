import firebase from 'firebase/app'
import "firebase/firestore"

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PID,
    storageBucket: process.env.REACT_APP_SB,
    messagingSenderId: process.env.REACT_APP_MSID,
    appId: process.env.REACT_APP_APPID,
    measurementId:process.env.REACT_APP_MID
};

firebase.initializeApp(config);

export const database = firebase.firestore();
export default firebase;