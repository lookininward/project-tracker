import admin from 'firebase-admin';
import { plugin as cypressFirebasePlugin } from 'cypress-firebase';

/**
 * @type {Cypress.PluginConfig}
 */
export default (on, config) => {
  require('cypress-log-to-output').install(on);
  return cypressFirebasePlugin(on, config, admin);
}
