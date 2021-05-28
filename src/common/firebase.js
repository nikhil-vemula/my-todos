import firebase from 'firebase/app'
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyCw4gIrL9BkiZPqoy0HTNrxGXn30CCRff4",
    authDomain: "my-todos-2ea97.firebaseapp.com",
    projectId: "my-todos-2ea97",
    storageBucket: "my-todos-2ea97.appspot.com",
    messagingSenderId: 320712512916,
    appId: "1:320712512916:web:1cf4d6f57a716e71b2ab81",
    measurementId: "G-1V9RQ7WJMR"
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export default firebase;