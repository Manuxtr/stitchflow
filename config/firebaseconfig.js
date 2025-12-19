// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import ReactNativeAsyncStorage  from "@react-native-async-storage/async-storage"
import {getReactNativePersistence,initializeAuth} from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi7cVWYjxn3DmG82h0AxijLMzQ9ZvPlUE",
  authDomain: "stitctflow.firebaseapp.com",
  projectId: "stitctflow",
  storageBucket: "stitctflow.firebasestorage.app",
  messagingSenderId: "291168982240",
  appId: "1:291168982240:web:eae083ac36c413c165ac85"
};

// Initialize Firebase
const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp() ;
const db = getFirestore(app);
const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
})

export {auth,db}
