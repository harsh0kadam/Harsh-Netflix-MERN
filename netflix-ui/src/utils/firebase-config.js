import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCbwBu2tb7O1w6GBtHP-aiDqsU00y1BY7I",
  authDomain: "netflix-clone-5d0c8.firebaseapp.com",
  projectId: "netflix-clone-5d0c8",
  storageBucket: "netflix-clone-5d0c8.appspot.com",
  messagingSenderId: "330989296183",
  appId: "1:330989296183:web:9fed6ad2ec64acef3d3db2",
  measurementId: "G-7WXQ1NMS27"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
