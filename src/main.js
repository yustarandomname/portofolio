import HMR from '@sveltech/routify/hmr'
import App from './App.svelte';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCW2sCaAtvDBVPjJY7Q8eluW-Z7sMbCkHM",
  authDomain: "portofolio-f6751.firebaseapp.com",
  databaseURL: "https://portofolio-f6751.firebaseio.com",
  projectId: "portofolio-f6751",
  storageBucket: "portofolio-f6751.appspot.com",
  messagingSenderId: "607314892836",
  appId: "1:607314892836:web:1719330e966680845ca0b1",
  measurementId: "G-TEQLSRC42G"
};

firebase.initializeApp(firebaseConfig);
const app = HMR(App, { target: document.body }, 'routify-app')

export default app;
