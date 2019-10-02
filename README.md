# Teamwork123
[![Coverage Status](https://coveralls.io/repos/github/tuyisengepaul/Teamwork/badge.svg?branch=develop)](https://coveralls.io/github/tuyisengepaul/Teamwork?branch=develop)

[![Build Status](https://travis-ci.org/tuyisengepaul/Teamwork.svg?branch=develop)](https://travis-ci.org/tuyisengepaul/Teamwork)

Teamwork is an ​internal social network for organizations’ employees. The goal of this application is to facilitate more interaction between colleagues and facilitate team bonding.

---
## Table of contents

[Project Links](#links) 

[Technologies](#technologies)

[Tools](#tools)
  [Front end tools](#Frontend Tools)
  [Back end tools](#Backend Tools)

[Getting started](#Getting started)
  [Prerequisite]
  [Step](#Steps)
  [Endpoints](#Endpoints)
  [Tests](#Running Unit Test)

[Acknowledgment](#acknowledgments)

[Author](#author)


---
 
## Links

UI for the Teamwork project being hosted to gh-pages can be found here [Teamwork UI](https://tuyisengepaul.github.io/Teamwork/UI/index.html).

Pivotal Tracker Stories can found here [Pivotal tracker](https://www.pivotaltracker.com/n/projects/2397926).

Application was deployed to Heroku. Use public URL []().

---

## Technologies


- [Node.js](https://nodejs.org/) Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express.js](https://expressjs.com) - Web application framework based on Node.js.
- [ESLint](https://eslint.org/) - ESLint is an open source project whose aim is to provide a pluggable linting utility for JavaScript.
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) styling guide.

---

## Tools

### Frontend Tools

- ```HTML``` - Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.
- ```CSS``` - Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML.
- ```Javascript``` - A Jvascript is an object-oriented computer programming language commonly used to create interactive effects within web browsers.

### Backend Tools

- [Postman](https://www.getpostman.com/) Postman is a collaboration platform for API development. 
- Testing
  - [Mocha](https://mochajs.org/) A javascript testing framework.
  - [Chai](https://chaijs.com) A test assertion library for Javascript.
- [Pivotal Tracker](https://www.pivotaltracker.com) Pivotal Tracker is a story-based project planning tool that takes its inspiration from agile software methods.
- [Heroku](https://www.heroku.com/) Heroku is a cloud platform as a service supporting several programming languages.Developers use Heroku to deploy, manage, and scale modern apps.
- [Travis CI](https://travis-ci.org/) is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub.
- [Coveralls](https://codeclimate.com/) Coveralls is a web service to help you track your code coverage over time, and ensure that all your new code is fully covered.

---

## Getting started

#### Prerequisitess

- You need to have Nodejs [environment](https://nodejs.org/en/)
- Text Editor [Microsoft Visual studio code](https://code.visualstudio.com/)
- Github bash [terminal](https://git-scm.com/downloads) 
- Postman API [development](https://www.getpostman.com/)

#### Steps
 1. Clone this project to your local machine
 2. Update packages by installing dependencies
    >npm install
 3. Start local server of application
    >npm run dev
 4. Use Postman to test all API endpoints

#### Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                 | 
| ------ | --------------------------------------- | ------------------------- | 
| POST   | Sign up for an account                  | `/api/v1/auth/signup`     |
| POST   | Sign in                                 | `/api/v1/auth/signin`     |
| GET    | Get All users (Only Admin)              | `/api/v1/auth/`           |
| POST   | Create an article                       | `/api/v1/articles`        | 
| GET    | Get All articles                        | `/api/v1/articles`        | 
| GET    | Get a specific article                  | `/api/v1/articles/:id`    | 
| PATCH  | Flag an article                         | `/api/v1/articles/:id/:flag`|
| PATCH  | Edit an article                         | `/api/v1/articles/:id`    | 
| DELETE | Deleting an article                     | `/api/v1/articles/:id`    |
| POST   | Post a comment                          | `/api/v1/commentes/:id`   | 
| PATCH  | Flag a comment                          | `/api/v1/commentes/:id`   |
| DELETE | Delete a comment                        | `/api/v1/commentes/:id`   | 


#### Running Unit Test
- Run test for all endpoints
  > npm test

## Acknowledgments

- [Andela](https://andela.com/)

## Author

- [Tuyisenge Jean Paul](tuyisengepaul200@gmail.com)



