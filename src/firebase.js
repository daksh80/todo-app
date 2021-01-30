import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseconfig = firebase.initializeApp({
    apiKey: "AIzaSyAkct5ieye5cRTPhLLjrnycF2Tx7yyCaDI",
    authDomain: "todo-app-41e81.firebaseapp.com",
    databaseURL: "https://todo-app-41e81-default-rtdb.firebaseio.com",
    projectId: "todo-app-41e81",
    storageBucket: "todo-app-41e81.appspot.com",
    messagingSenderId: "1089018675919",
    appId: "1:1089018675919:web:994ebcba944e7fd4896dba"
});
 export{ firebaseconfig as firebase};