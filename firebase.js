import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAheyc7xPsduqsWsaVpdqxNx4I7kdNO2NU",
  authDomain: "customer-support-chatbot-b20ea.firebaseapp.com",
  projectId: "customer-support-chatbot-b20ea",
  storageBucket: "customer-support-chatbot-b20ea.appspot.com",
  messagingSenderId: "309899227962",
  appId: "1:309899227962:web:f1b01c51148028e0d9d603",
  measurementId: "G-NP1XGLNXJR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
