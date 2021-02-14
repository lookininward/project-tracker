/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

import admin from 'firebase-admin';
import { plugin as cypressFirebasePlugin } from 'cypress-firebase';

/**
 * @type {Cypress.PluginConfig}
 */
export default (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  require('cypress-log-to-output').install(on);
  return cypressFirebasePlugin(
    on,
    {
      ...config,
      env: {
        ...(config.env || {}),
        TEST_UID: process.env.TEST_UID,
        FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
        FIREBASE_PROJECT_ID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      },
    },
    admin
  );
}
