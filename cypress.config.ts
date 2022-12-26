import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const cucumber = require("cypress-cucumber-preprocessor").default;
      const options = {
        typescript: require.resolve("typescript"),
      };
      on("file:preprocessor", cucumber(options));
    },
    baseUrl: "https://staging.enthu.com/",
    adminUrl: "https://admin-staging.enthu.net",
    googleLoginUrl: "https://accounts.google.com/o/oauth2/v2/auth/identifier?redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground&prompt=consent&response_type=code&client_id=36710680461-de4trgakh8pmmi5s4pph6nobnih5kfb7.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20openid&access_type=offline&flowName=GeneralOAuthFlow&hl=en",
    specPattern: ["**/*.*{feature, features}"],
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mocha",
        quite: true,
        overwrite: false,
        html: false,
        json: true,
      },
    },
    video: false,
    screenshotOnRunFailure: true,
    excludeSpecPattern: ["*.js", "*.ts", "*.md"],
    viewportWidth: 1360,
    viewportHeight: 790,
    defaultCommandTimeout: 10000,
    retries: 2,
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    projectId: "wftg5d"
  },
});
