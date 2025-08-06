// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCqklux_Ssh4nN6G8u5rzP2Ek4bROVxhso',
  authDomain: 'react-dashboard-56663.firebaseapp.com',
  projectId: 'react-dashboard-56663',
  storageBucket: 'react-dashboard-56663.firebasestorage.app',
  messagingSenderId: '112313365653',
  appId: '1:112313365653:web:7beef43363efe1917d579c',
  measurementId: 'G-LQJQKEBJ9M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
