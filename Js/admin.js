//######################Main Divisions

let allArticle=document.querySelector(".all-articles");
let newArticle=document.querySelector(".new-article");
let readArticle=document.querySelector(".read-article");
let myArticle=document.querySelector(".my-article-content");
let sharedArticle=document.querySelector(".shared-article");
let aboutUs=document.querySelector(".about-us-cnts");
let contactUs=document.querySelector(".contact-us-cnts");
let editMyArticle=document.querySelector(".edit-my-article");
let flaggedArticle=document.querySelector(".flagged-article-division");

//##################main Buttons and important links

let allArticleBtn=document.querySelector(".all-article-btn");
let newArticleBtn=document.querySelector(".new-article-btn");
let readArticleBtn=document.querySelector(".btn-article-ctn");
let myArticleBtn=document.querySelector(".my-article-btn");
let sharedArticleBtn=document.querySelector(".shared-article-btn");
let editMyArticleBtn=document.querySelector(".btn-article-ctn-edit");
let flaggedArticleBtn=document.querySelector(".flagged-article-btn");

 newArticle.setAttribute('class', 'hide');
 readArticle.setAttribute('class', 'hide');
 myArticle.setAttribute('class', 'hide');
 sharedArticle.setAttribute('class', 'hide');
 editMyArticle.setAttribute('class', 'hide');
 aboutUs.setAttribute('class', 'hide');
 contactUs.setAttribute('class', 'hide');
 flaggedArticle.setAttribute('class','hide');

 function flagged()
 {
 flaggedArticle.setAttribute('class','flagged-article-division');
 allArticle.setAttribute('class', 'hide')
 newArticle.setAttribute('class', 'hide');
 readArticle.setAttribute('class', 'hide');
 myArticle.setAttribute('class', 'hide');
 sharedArticle.setAttribute('class', 'hide');
 aboutUs.setAttribute('class', 'hide');
 contactUs.setAttribute('class', 'hide');
 editMyArticle.setAttribute('class', 'hide');
 }


 allArticleBtn.addEventListener('click', function(){

 allArticle.setAttribute('class', 'all-articles')
 newArticle.setAttribute('class', 'hide');
 readArticle.setAttribute('class', 'hide');
 myArticle.setAttribute('class', 'hide');
 sharedArticle.setAttribute('class', 'hide');
 aboutUs.setAttribute('class', 'hide');
 contactUs.setAttribute('class', 'hide');
 editMyArticle.setAttribute('class', 'hide');
 flaggedArticle.setAttribute('class','hide');

 });
 newArticleBtn.addEventListener('click', function(){
 allArticle.setAttribute('class', 'hide')
 newArticle.setAttribute('class', 'new-article');
 readArticle.setAttribute('class', 'hide');
 myArticle.setAttribute('class', 'hide');
 sharedArticle.setAttribute('class', 'hide');
 aboutUs.setAttribute('class', 'hide');
 contactUs.setAttribute('class', 'hide');
 editMyArticle.setAttribute('class', 'hide');
flaggedArticle.setAttribute('class','hide');

});
// Click Sign In Button to LogIn.
readArticleBtn.addEventListener('click', function(){

allArticle.setAttribute('class', 'hide')
newArticle.setAttribute('class', 'hide');
readArticle.setAttribute('class', 'read-article');
myArticle.setAttribute('class', 'hide');
sharedArticle.setAttribute('class', 'hide');
aboutUs.setAttribute('class', 'hide');
contactUs.setAttribute('class', 'hide');
editMyArticle.setAttribute('class', 'hide');
flaggedArticle.setAttribute('class','hide');
});

 myArticleBtn.addEventListener('click', function(){

 allArticle.setAttribute('class', 'hide')
 newArticle.setAttribute('class', 'hide');
 readArticle.setAttribute('class', 'hide');
 myArticle.setAttribute('class', 'my-articles');
 sharedArticle.setAttribute('class', 'hide');
 aboutUs.setAttribute('class', 'hide');
 contactUs.setAttribute('class', 'hide');
 editMyArticle.setAttribute('class', 'hide');
 flaggedArticle.setAttribute('class','hide');

 });

 sharedArticleBtn.addEventListener('click', function(){

 allArticle.setAttribute('class', 'hide')
 newArticle.setAttribute('class', 'hide');
 readArticle.setAttribute('class', 'hide');
 myArticle.setAttribute('class', 'hide');
 sharedArticle.setAttribute('class', 'shared-article');
aboutUs.setAttribute('class', 'hide');
contactUs.setAttribute('class', 'hide');
editMyArticle.setAttribute('class', 'hide');
flaggedArticle.setAttribute('class','hide');

});


editMyArticleBtn.addEventListener('Click', function(){

allArticle.setAttribute('class', 'hide')
newArticle.setAttribute('class', 'hide');
readArticle.setAttribute('class', 'hide');
myArticle.setAttribute('class', 'hide');
sharedArticle.setAttribute('class', 'hide');
aboutUs.setAttribute('class', 'hide');
contactUs.setAttribute('class', 'hide');
editMyArticle.setAttribute('class', 'edit-my-article');
flaggedArticle.setAttribute('class','hide');

})

function aboutus()
{
allArticle.setAttribute('class', 'hide')
newArticle.setAttribute('class', 'hide');
readArticle.setAttribute('class', 'hide');
myArticle.setAttribute('class', 'hide');
sharedArticle.setAttribute('class', 'hide');
aboutUs.setAttribute('class', 'about-us-cnts');
contactUs.setAttribute('class', 'hide');
editMyArticle.setAttribute('class', 'hide');
flaggedArticle.setAttribute('class','hide');
}
function contactus()
{
allArticle.setAttribute('class', 'hide')
newArticle.setAttribute('class', 'hide');
readArticle.setAttribute('class', 'hide');
myArticle.setAttribute('class', 'hide');
sharedArticle.setAttribute('class', 'hide');
aboutUs.setAttribute('class', 'hide');
contactUs.setAttribute('class', 'contact-us-cnts');
editMyArticle.setAttribute('class', 'hide');
flaggedArticle.setAttribute('class','hide');
}
function read()
{
allArticle.setAttribute('class', 'hide')
newArticle.setAttribute('class', 'hide');
readArticle.setAttribute('class', 'read-article');
myArticle.setAttribute('class', 'hide');
sharedArticle.setAttribute('class', 'hide');
aboutUs.setAttribute('class', 'hide');
contactUs.setAttribute('class', 'hide');
editMyArticle.setAttribute('class', 'hide');
flaggedArticle.setAttribute('class','hide');
}
function edit()
{
allArticle.setAttribute('class', 'hide')
newArticle.setAttribute('class', 'hide');
readArticle.setAttribute('class', 'hide');
myArticle.setAttribute('class', 'hide');
sharedArticle.setAttribute('class', 'hide');
aboutUs.setAttribute('class', 'hide');
contactUs.setAttribute('class', 'hide');
editMyArticle.setAttribute('class', 'edit-my-article');
flaggedArticle.setAttribute('class','hide');
}
//##################################################################
//################################################################################
//#####################  Info, Error and Success Messages ########################
//################################################################################

let closeNewArticle = document.getElementsByClassName("close")[0];
let closeUpdateArticle = document.getElementsByClassName("close")[1];
let closeDeleteArticle = document.getElementsByClassName("close")[2];
let closeFlagArticle = document.getElementsByClassName("close")[3];
let closeFlagComment = document.getElementsByClassName("close")[4];
let closeComment = document.getElementsByClassName("close")[5];
let closeQuery = document.getElementsByClassName("close")[6];
// let closeNewArticle = document.getElementsByClassName("close")[0];

closeNewArticle.onclick = function() {
  let successBox=document.querySelector(".success-msg-new-article");
  successBox.style.display="none";
  //successBox.setAttribute('class','easyout');
}
closeUpdateArticle.onclick = function() {
  let successBox=document.querySelector(".success-msg-update-article");
  successBox.style.display="none";
}
closeDeleteArticle.onclick = function() {
  let successBox=document.querySelector(".success-msg-delete-article");
  successBox.style.display="none";
}
closeFlagArticle.onclick = function() {
  let successBox=document.querySelector(".success-msg-flag-article");
  successBox.style.display="none";
}
closeFlagComment.onclick = function() {
  let successBox=document.querySelector(".success-msg-flag-comment");
  successBox.style.display="none";
}
closeComment.onclick = function() {
  let successBox=document.querySelector(".success-msg-comment");
  successBox.style.display="none";
}
closeQuery.onclick = function() {
  let successBox=document.querySelector(".success-msg-query");
  successBox.style.display="none";
}



let publishArticleBtn=document.querySelector(".publish");
publishArticleBtn.onclick = function() {
	document.querySelector(".success-msg-new-article").style.display='block';
}

function update(){
	document.querySelector(".success-msg-update-article").style.display='block';
}

function deleteArticle()
{
	document.querySelector(".success-msg-delete-article").style.display="block";
}


function flagComment(){
	document.querySelector(".success-msg-flag-comment").style.display='block';
}
function flagArticle(){
	document.querySelector(".success-msg-flag-article").style.display='block';
}
function comment()
{
 	document.querySelector(".success-msg-comment").style.display='block';
}
function submitquery()
{
	document.querySelector(".success-msg-query").style.display='block';
}
/// Additional Codes Related to Responsiveness

let menuIcon=document.getElementsByClassName("menu-icon")[0];
let closeMenuIcon=document.getElementsByClassName("close-menu-icon")[0];
let leftNavMenu = document.getElementsByClassName("left-division")[0];
menuIcon.onclick = function() {
 leftNavMenu.style.display="block";
 leftNavMenu.style.width="30%";
 closeMenuIcon.style.display="block";
  menuIcon.style.display="none";
}
closeMenuIcon.onclick = function() {
 leftNavMenu.style.display="none";
 leftNavMenu.style.width="0";
 closeMenuIcon.style.display="none";
  menuIcon.style.display="block";
}
/// Additional Codes Related to Responsiveness
/// Mobile Layout

let newMenu=document.querySelector(".menuIcon");
let closeMenu=document.querySelector(".closeMenuIcon");
newMenu.onclick = function() {
 leftNavMenu.style.display="block";
 leftNavMenu.style.width="100%";
 closeMenu.style.display="block";
 newMenu.style.display="none";
}
closeMenu.onclick = function() {
 leftNavMenu.style.display="none";
 leftNavMenu.style.width="0";
 closeMenu.style.display="none";
 newMenu.style.display="block";
}

