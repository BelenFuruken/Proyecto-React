// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWl3NEE318qaQQOh-1YHEUsFkvsGe5gec",
  authDomain: "proyecto-react-19282.firebaseapp.com",
  projectId: "proyecto-react-19282",
  storageBucket: "proyecto-react-19282.appspot.com",
  messagingSenderId: "937602606533",
  appId: "1:937602606533:web:206982d27e4cb5c78597ac"
};

// Inicializamos Firebase y se pasa la configuracion como argumento
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);