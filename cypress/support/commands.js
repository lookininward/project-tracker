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

const firebaseConfig = {
  "apiKey": Cypress.env('FIREBASE_API_KEY'),
  "authDomain": Cypress.env('FIREBASE_AUTH_DOMAIN'),
  "projectId": Cypress.env('FIREBASE_PROJECT_ID'),
  "storageBucket": Cypress.env('FIREBASE_STORAGE_BUCKET'),
  "messagingSenderId": Cypress.env('FIREBASE_MESSAGING_SENDER_ID'),
  "appId": Cypress.env('FIREBASE_APP_ID'),
  "measurementId": Cypress.env('FIREBASE_MEASUREMENT_ID')
}

console.log('firebaseConfig', firebaseConfig);

firebase.initializeApp(firebaseConfig);
attachCustomCommands({ Cypress, cy, firebase });