// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage" 
import { GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5KWuuBkmESwW-WNWgr2Zc47egVWGlx8A",
  authDomain: "disneyplus-clone-cbf07.firebaseapp.com",
  projectId: "disneyplus-clone-cbf07",
  storageBucket: "disneyplus-clone-cbf07.appspot.com",
  messagingSenderId: "213369162671",
  appId: "1:213369162671:web:1603538177d1d02410bd5a",
  measurementId: "G-BMBZE3SY6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, provider, storage};
export default db;