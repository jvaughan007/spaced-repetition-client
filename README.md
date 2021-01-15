# Spaced Repetition Capstone

- [Live_App](https://spaced-repetition-client-bay.vercel.app/register)
- [Server_Side_Repo](https://github.com/jvaughan007/spaced-repetition-api)
- [Client_Side_Repo](https://github.com/jvaughan007/spaced-repetition-client)

## Description

An app which uses spaced repetition to help people memorize a foreign language. The app displays words in one language and the users will be asked to input the corresponding translation.

## Screenshots

![Registration_Route](./src/screenshots/registration.png)
![Login_Route](./src/screenshots/login.png)
![!Dashboard_Route](./src/screenshots/dashboard.png)
![Learning_Route](./src/screenshots/learn.png)
![Feedback_Example](./src/screenshots/feedback.png)

### Front-end technologies

Reactjs, HTML, CSS, JavaScript, HTML

### Back-end technologies

Node.js, Express

### Database

PostgreSQL

### Tested with

Cypress and Mocha

## Hosted on

Heroku and Vercel

## Setup

To setup the application

1. Fork and clone the project to your machine
2. `npm install`. This will also install the application *Cypress.io* for running browser integration tests

The project expects you have the Spaced repetition API project setup and running on http://localhost:8000.

Find instructions to setup the API here https://github.com/Thinkful-Ed/spaced-repetition-api.

## Running project

This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.

## Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.
