
# Lab: Class 06

## Basic-Authentication

### Deployment Link
- https://basic-authh.herokuapp.com/

### Author: Razan Alamleh
 - [test report](https://github.com/Razan-am/basic-auth/runs/3334916146?check_suite_focus=true)
 - [front end](https://basic-authh.herokuapp.com/status)

### Setup
- .env requirements
  - PORT - 8000

### Running the app
- npm start
  - Endpoint: /status
    - Returns Object

    ![status](./images/status.PNG)


### Tests
- Unit Tests: npm run test

### UML
![status](./images/uml.png)

### Notes
- pull request : https://github.com/Razan-am/basic-auth/pull/4
- How do I install the app or library?
  - Clone the repo to your local machine
  - in the terminal, `run npm i`
  - Create `.env` file with port name as the one in the `env samples` 
  - Create database called `auth` 
  - Seed the database for the auth model with post request 
  - send sign up post request with username and password  
  - send log in post request with user name and the password 
 

- How do I test the app or library?
1.  in the termenal run `npm run test`
2. in the browser hit `localhost:yourPortNumber/`
