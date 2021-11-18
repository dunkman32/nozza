import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// https://console.firebase.google.com/project/rebank-ge/overview
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'rebank-ge.firebaseapp.com',
  projectId: 'rebank-ge',
  storageBucket: 'rebank-ge.appspot.com',
  messagingSenderId: '343015533364',
  appId: '1:343015533364:web:27219e45562fe7769f5361',
  measurementId: 'G-27WPPS4JBC',
};
const fbInstance = initializeApp(firebaseConfig);
const db = getFirestore();

export { fbInstance, db };
