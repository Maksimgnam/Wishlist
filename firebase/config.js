




import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC039SgCrJC2tYjNgAv2nzdptnmyZkdEt8",
    authDomain: "wishlist-e3944.firebaseapp.com",
    projectId: "wishlist-e3944",
    storageBucket: "wishlist-e3944.appspot.com",
    messagingSenderId: "307406367242",
    appId: "1:307406367242:web:5d4afb1c514fdb16488df3",
    measurementId: "G-NG378SWMKT"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
export { app, auth }