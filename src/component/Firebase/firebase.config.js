// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX_X67nTgUMT14VkIJB4P8LqO_o3AYXDY",
  authDomain: "socia-buzz.firebaseapp.com",
  projectId: "socia-buzz",
  storageBucket: "socia-buzz.appspot.com",
  messagingSenderId: "388699508507",
  appId: "1:388699508507:web:97ab0d8ed701b11970cdbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;