import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { firebaseAppConf } from "./.hidden";

export const app = initializeApp(firebaseAppConf);

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
