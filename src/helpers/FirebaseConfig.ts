// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyARtZEktLIqrw0X7eKj2DjE3YfjSNdzXLI",
  authDomain: "hyper-echelone.firebaseapp.com",
  projectId: "hyper-echelone",
  storageBucket: "hyper-echelone.appspot.com",
  messagingSenderId: "238827173713",
  appId: "1:238827173713:web:96095c176990a88b38c570",
  measurementId: "G-0VGE7TXV59"
};

export const Firebase_app = initializeApp(firebaseConfig);
export const Firebase_auth = getAuth(Firebase_app);