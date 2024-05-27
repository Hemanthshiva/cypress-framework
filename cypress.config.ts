import { defineConfig } from "cypress";
import browserify = require("@cypress/browserify-preprocessor");
import resolve = require("resolve");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: 'hsdwg5',
  e2e: {
    setupNodeEvents(on, config) {
      // on("before:browser:launch", (browser, launchOptions) => {
      //   if (browser.name === "chrome") {
      //     launchOptions.args.push("--incognito=true");
      //   }
      //   return launchOptions;
      // });

      const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { basedir: config.projectRoot }),
      };
      on("file:preprocessor", cucumber(options));
    },
    env:{
      baseUrl: 'https://www.saucedemo.com/',
      apiBaseUrl: 'https://reqres.in/api'
    },
    // baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    defaultCommandTimeout: 5000,
    requestTimeout: 5000,
    retries: {
      runMode: 2,
      openMode: 0
    },
    video: false,
    specPattern: "cypress/e2e/**/**/*.{feature,spec.ts}",
  },
  reporter: 'cypress-mochawesome-reporter',
});
