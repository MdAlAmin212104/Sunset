// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO-Fp_esAM4_7GfqmADFizeZDyaOv8KPE",
  authDomain: "sunset-20cd7.firebaseapp.com",
  projectId: "sunset-20cd7",
  storageBucket: "sunset-20cd7.appspot.com",
  messagingSenderId: "491710948451",
  appId: "1:491710948451:web:efb1458c0db08773604456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth