// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDEGcBo6dm6oApZ2U4HsYpUNzXrtPUsyYE',
  authDomain: 'tinder-1-bb849.firebaseapp.com',
  projectId: 'tinder-1-bb849',
  storageBucket: 'tinder-1-bb849.appspot.com',
  messagingSenderId: '54383542494',
  appId: '1:54383542494:web:a0a792973b2cb9984d424f',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

export { auth, db }
