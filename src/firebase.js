// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAXiJqvazVelmxqTxy88HTIgYhHGS9ashg',
  authDomain: 'realtor-clone-react-b5ae2.firebaseapp.com',
  projectId: 'realtor-clone-react-b5ae2',
  storageBucket: 'realtor-clone-react-b5ae2.appspot.com',
  messagingSenderId: '196470864510',
  appId: '1:196470864510:web:3b01a2e408087444e1762f',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
