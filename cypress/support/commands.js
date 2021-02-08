// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { attachCustomCommands } from 'cypress-firebase';

// const firebaseConfig = {
//   apiKey: Cypress.env('FIREBASE_API_KEY'),
//   authDomain: Cypress.env('FIREBASE_AUTH_DOMAIN'),
//   projectId: Cypress.env('FIREBASE_PROJECT_ID'),
//   storageBucket: Cypress.env('FIREBASE_STORAGE_BUCKET'),
//   messagingSenderId: Cypress.env('FIREBASE_MESSAGING_SENDER_ID'),
//   appId: Cypress.env('FIREBASE_APP_ID'),
//   measurementId: Cypress.env('FIREBASE_MEASUREMENT_ID'),
// }

const firebaseConfig = {
  "apiKey": "AIzaSyAJil9T4SD-mmfQnG-slWRdkE-KpGDW6Jo",
  "authDomain": "project-tracker-demo-2c5e1.firebaseapp.com",
  "projectId": "project-tracker-demo-2c5e1",
  "storageBucket": "project-tracker-demo-2c5e1.appspot.com",
  "messagingSenderId": "757974717960",
  "appId": "1:757974717960:web:b61089624cdebf881ba3bd",
  "measurementId": "G-DH1GRBPP9B"
}

console.log('support/commands');
console.log(firebaseConfig);

firebase.initializeApp(firebaseConfig);
attachCustomCommands({ Cypress, cy, firebase });