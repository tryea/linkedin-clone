import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCyF3c6kQA7GSFEd_MIILloAPyM5bh2xa0",
    authDomain: "linkedin-clone-726b4.firebaseapp.com",
    projectId: "linkedin-clone-726b4",
    storageBucket: "linkedin-clone-726b4.appspot.com",
    messagingSenderId: "397119433690",
    appId: "1:397119433690:web:eca9f008c90751b67baee3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =  firebase.auth();


export { db, auth };