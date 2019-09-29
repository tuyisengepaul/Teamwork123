let signInDivision=document.querySelector(".login-details");
let signUpBtn=document.querySelector(".sign-up-btn");
let signUpDivision=document.querySelector(".sign-up-details");
let signInBtn=document.querySelector(".sign-in-btn");
let LogInBtn=document.querySelector(".login-btn");

signUpDivision.setAttribute('class', 'hide');

signInBtn.addEventListener('click', function(){
signInDivision.setAttribute('class','login-details');
signUpDivision.setAttribute('class','hide');
});
signUpBtn.addEventListener('click', function(){
signUpDivision.setAttribute('class', 'sign-up-details');
signInDivision.setAttribute('class', 'hide');
});
// Click Sign In Button to LogIn.
LogInBtn.addEventListener('click', function(){
let selectElement = document.querySelector('#user').selectedIndex;
let user=document.getElementById("user").options;
let userType=user[selectElement].text;
if(userType=="Admin")
{
  
  window.location="admin.html";

}

else
{

window.location="employee.html";
}

});
