The tests are written in cypress and feature are written in cucumber. We have used the `cypress-cucumber-preprocessor` plugin to get the features of cucumber.

### Requirements
- NodeJs >=10 <15
- Chrome Browser (Optional - run tests in chrome browser)
- Firefox Browser (Optional - run tests in firefox browser)

### Clone Repository
```shell script
git clone https://github.com/EnthuZiastic/e2e_ci
```

### Install dependencies
```
yarn install
```

#### Open Cypress Test Runner
```
yarn cypress open
```
This command opens cypress test runner in your machine which lists all the features included in our repository.

You can run any feature from the test runner also with multiple browser platform.

#### Run all tests
You can run the following command to run all tests:
```
yarn run test
```

After you run the tests, a test report is generated and can be rendered using the web browser. To view the report, open the file `cypress/reports/mochareports/report.html`


#### Run a single test, or a certain set of tests
You can use the tag @focus in the test scenario (one or more scenarios), or feature file to test the specific scenario (or scenarios) or feature.