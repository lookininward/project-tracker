// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

console.log('support/index');

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Cypress.on('uncaught:exception', (err, runnable) => {
//   console.log('Error in uncaught exception:', err.message)
//   // returning false here prevents Cypress from
//   // failing the test
//   return false
// })

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

// console.log('firebase commands');
// console.log(firebaseConfig);

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