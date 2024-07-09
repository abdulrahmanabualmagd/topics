//VARIABLES [camelCase]
let userName = "John Doe";

// CONSTANTS [UPPER_SNAKE_CASE]
const MAX_USERS = 5;

//FUNCTIONS [camelCase]
function getUserName() {
  // code
}
const calculateAge = (birthDate) => {
  // code
};

// CLASSES [PascalCase]
class UserProfile {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getUserInfo() {
    return `${this.name}, ${this.age} years old`;
  }
}

// Boolean Variables [ camelCase | start with is, has, or should]
let isUserLoggedIn = false;
let hasAdminPrivileges = true;
let shouldDisplayModal = true;

// Event Handlers [ camelCase | Prefix with on]
function onUserLogin() {
  // code
}
function onButtonClick() {
  // code
}

// Private Variables (ES6 Modules) [ camelCase | Prefix with an underscore]
let _privateVariable = "private";
function _internalMethod() {
  // code
}

// Class-Based Modules [PascalCase]
const User = require("./models/User");
module.exports = User;
// Module Instances [camelCase]
const express = require("express");

// Export Multiple Items [camelCase]
module.exports = { getUser, createUser };

// Callbacks and Promises
function fetchData(callback) {
  // use err as the first parameter
  callback(err, data);
}
getUser()
  .then((data) => {
    // code
  })
  .catch((err) => {
    // code
  });

// Environment Variables [UPPER_SNAKE_CASE]
const dbHost = process.env.DB_HOST;
const apiKey = process.env.API_KEY;

// File & Folder [kebab-case]
/*
project/
├── controllers/
│   └── user-controller.js
├── models/
│   └── user.js
├── services/
│   └── user-service.js
├── routes/
│   └── user-routes.js
└── app.js
*/
