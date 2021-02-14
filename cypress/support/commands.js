import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { attachCustomCommands } from 'cypress-firebase';

const firebaseConfig = {
  "apiKey": "AIzaSyAJil9T4SD-mmfQnG-slWRdkE-KpGDW6Jo",
  "authDomain": "project-tracker-demo-2c5e1.firebaseapp.com",
  "projectId": "project-tracker-demo-2c5e1",
  "storageBucket": "project-tracker-demo-2c5e1.appspot.com",
  "messagingSenderId": "757974717960",
  "appId": "1:757974717960:web:b61089624cdebf881ba3bd",
  "measurementId": "G-DH1GRBPP9B"
}

firebase.initializeApp(firebaseConfig);
attachCustomCommands({ Cypress, cy, firebase });