import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { attachCustomCommands } from 'cypress-firebase';

const firebaseConfig = {
  apiKey: Cypress.env('FIREBASE_API_KEY'),
  authDomain: Cypress.env('FIREBASE_AUTH_DOMAIN'),
  projectId: Cypress.env('FIREBASE_PROJECT_ID'),
  storageBucket: Cypress.env('FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: Cypress.env('FIREBASE_MESSAGING_SENDER_ID'),
  appId: Cypress.env('FIREBASE_APP_ID'),
  measurementId: Cypress.env('FIREBASE_MEASUREMENT_ID')
}

firebase.initializeApp(firebaseConfig);
attachCustomCommands({ Cypress, cy, firebase });