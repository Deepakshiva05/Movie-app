import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAl9uS1Gl1C9x2nhoZI8mQ04AF9Un3APFA",
  authDomain: "cinecraft-login.firebaseapp.com",
  projectId: "cinecraft-login",
  storageBucket: "cinecraft-login.appspot.com",
  messagingSenderId: "555767667868",
  appId: "1:555767667868:web:95405c40e6e62564e4a159"
};


const app = initializeApp(firebaseConfig);

export const database = getAuth(app);