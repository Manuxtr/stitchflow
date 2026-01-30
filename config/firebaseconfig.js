import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: "stitctflow.firebaseapp.com",
    projectId: "stitctflow",
    storageBucket: "stitctflow.firebasestorage.app",
    messagingSenderId: "291168982240",
    appId: "1:291168982240:web:eae083ac36c413c165ac85"
};
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// let auth;
// if (getApps().length > 0) {
//     try {
//         auth = getAuth(app);
//     } catch (e) {
//         // If getAuth fails because it wasn't initialized yet
//         auth = initializeAuth(app, {
//             persistence: getReactNativePersistence(ReactNativeAsyncStorage)
//         });
//     }
// } else {
//     auth = initializeAuth(app, {
//         persistence: getReactNativePersistence(ReactNativeAsyncStorage)
//     });
// }

// const db = getFirestore(app);

// export { auth, db };



// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export { auth, db };

