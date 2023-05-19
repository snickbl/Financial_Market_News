import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDefWGKeW0OkcStoStahpwexmjaTaMtnX0",
    authDomain: "news-and-analysis.firebaseapp.com",
    projectId: "news-and-analysis",
    storageBucket: "news-and-analysis.appspot.com",
    messagingSenderId: "585890492273",
    appId: "1:585890492273:web:6c4da85fd6af6a91e6d0d0"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export {db}