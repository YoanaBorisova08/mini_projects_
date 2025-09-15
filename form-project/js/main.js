'use strict';

const firstNameEl = document.getElementById('first-name');
const lastNameEl = document.getElementById('last-name');
const usernameEl = document.getElementById('username');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const submitEl = document.querySelector('.btn--submit');

let firstName, lastName, username, email, password;
submitEl.addEventListener('click', function () {
  firstName = firstNameEl.value;
  lastName = lastNameEl.value;
  username = usernameEl.value;
  email = emailEl.value;
  password = passwordEl.value;
  if (firstName == '') console.log('Fill the first name field');
  else if (lastName == '') console.log('Fill the last name field');
  else if (username == '') console.log('Fill the username field');
  else if (email == '') console.log('Fill the email field');
  else if (password == '') console.log('Fill the password field');
  else {
    console.log('Everything is alrigth.');
  }
});
