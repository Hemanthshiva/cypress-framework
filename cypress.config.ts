import { defineConfig } from "cypress";
import browserify = require("@cypress/browserify-preprocessor");
import resolve = require("resolve");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: "nud36k",
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { basedir: config.projectRoot }),
      };
      on("file:preprocessor", cucumber(options));
    },
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    defaultCommandTimeout: 5000,
    requestTimeout: 5000,
    retries: {
      runMode: 2,
      openMode: 0
    },
    video: false,
    specPattern: "cypress/e2e/**/**/*.feature",
  },
  // reporter: 'cypress-mochawesome-reporter',
});
