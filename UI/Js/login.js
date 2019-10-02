let signInDivision = document.querySelector('.login-details');
let signUpBtn = document.querySelector('.sign-up-btn');
let signUpDivision = document.querySelector('.sign-up-details');
let signInBtn = document.querySelector('.sign-in-btn');
let LogInBtn = document.querySelector('.login-btn');

signUpDivision.setAttribute('class', 'hide');

signInBtn.addEventListener('click', () => {
  signInDivision.setAttribute('class', 'login-details');
  signUpDivision.setAttribute('class', 'hide');
});
signUpBtn.addEventListener('click', () => {
  signUpDivision.setAttribute('class', 'sign-up-details');
  signInDivision.setAttribute('class', 'hide');
});

LogInBtn.addEventListener('click', () => {
  let userEmail = document.getElementsByClassName('username')[0].value;
  let userPassword = document.getElementsByClassName('userpassword')[0].value;
  if (userEmail == 'Admin@teamwork.com' && userPassword === 'Admin') {
    window.location = 'admin.html';
  } else {
    window.location = 'employee.html';
  }
});
