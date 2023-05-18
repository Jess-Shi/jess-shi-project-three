// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC86_A3f5t8dhawXKMm-emmODfyKsYF2Vs",
    authDomain: "spending-tracker-489a3.firebaseapp.com",
    databaseURL: "https://spending-tracker-489a3-default-rtdb.firebaseio.com",
    projectId: "spending-tracker-489a3",
    storageBucket: "spending-tracker-489a3.appspot.com",
    messagingSenderId: "928496573799",
    appId: "1:928496573799:web:9579337172dc8b433663c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;