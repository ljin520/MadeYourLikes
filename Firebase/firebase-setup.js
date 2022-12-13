import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "----------------------------------",
  authDomain: "amazingclothes-705ac.firebaseapp.com",
  projectId: "amazingclothes-705ac",
  storageBucket: "amazingclothes-705ac.appspot.com",
  messagingSenderId: "591583759383",
  appId: "------------------------------------",
  // measurementId: "G-965ZKNWTEV"
};
let myApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(myApp);
export const auth = initializeAuth(myApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const storage = getStorage();
