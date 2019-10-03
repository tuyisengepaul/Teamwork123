// Main Divisions
let allArticle = document.querySelector('.all-articles');
let newArticle = document.querySelector('.new-article');
let readArticle = document.querySelector('.read-article');
let myArticle = document.querySelector('.my-article-content');
let sharedArticle = document.querySelector('.shared-article');
let aboutUs = document.querySelector('.about-us-cnts');
let contactUs = document.querySelector('.contact-us-cnts');
let editMyArticle = document.querySelector('.edit-my-article');

// main Buttons and important links
let allArticleBtn = document.querySelector('.all-article-btn');
let newArticleBtn = document.querySelector('.new-article-btn');
let readArticleBtn = document.querySelector('.btn-article-ctn');
let myArticleBtn = document.querySelector('.my-article-btn');
let sharedArticleBtn = document.querySelector('.shared-article-btn');
let editMyArticleBtn = document.querySelector('.btn-article-ctn-edit');

newArticle.setAttribute('class', 'hide');
readArticle.setAttribute('class', 'hide');
myArticle.setAttribute('class', 'hide');
sharedArticle.setAttribute('class', 'hide');
editMyArticle.setAttribute('class', 'hide');
aboutUs.setAttribute('class', 'hide');
contactUs.setAttribute('class', 'hide');


allArticleBtn.addEventListener('click', () => {
  allArticle.setAttribute('class', 'all-articles');
  newArticle.setAttribute('class', 'hide');
  readArticle.setAttribute('class', 'hide');
  myArticle.setAttribute('class', 'hide');
  sharedArticle.setAttribute('class', 'hide');
  aboutUs.setAttribute('class', 'hide');
  contactUs.setAttribute('class', 'hide');
  editMyArticle.setAttribute('class', 'hide');
});
newArticleBtn.addEventListener('click', () => {
  allArticle.setAttribute('class', 'hide');
  newArticle.setAttribute('class', 'new-article');
  readArticle.setAttribute('class', 'hide');
  myArticle.setAttribute('class', 'hide');
  sharedArticle.setAttribute('class', 'hide');
  aboutUs.setAttribute('class', 'hide');
  contactUs.setAttribute('class', 'hide');
  editMyArticle.setAttribute('class', 'hide');
});
// Click Sign In Button to LogIn.
readArticleBtn.addEventListener('click', () => {
  allArticle.setAttribute('class', 'hide');
  newArticle.setAttribute('class', 'hide');
  readArticle.setAttribute('class', 'read-article');
  myArticle.setAttribute('class', 'hide');
  sharedArticle.setAttribute('class', 'hide');
  aboutUs.setAttribute('class', 'hide');
  contactUs.setAttribute('class', 'hide');
  editMyArticle.setAttribute('class', 'hide');
});

myArticleBtn.addEventListener('click', () => {
  allArticle.setAttribute('class', 'hide');
  newArticle.setAttribute('class', 'hide');
  readArticle.setAttribute('class', 'hide');
  myArticle.setAttribute('class', 'my-articles');
  sharedArticle.setAttribute('class', 'hide');
  aboutUs.setAttribute('class', 'hide');
  contactUs.setAttribute('class', 'hide');
  editMyArticle.setAttribute('class', 'hide');
});

sharedArticleBtn.addEventListener('click', () => {
  allArticle.setAttribute('class', 'hide');
  newArticle.setAttribute('class', 'hide');
  readArticle.setAttribute('class', 'hide');
  myArticle.setAttribute('class', 'hide');
  sharedArticle.setAttribute('class', 'shared-article');
  aboutUs.setAttribute('class', 'hide');
  contactUs.setAttribute('class', 'hide');
  editMyArticle.setAttribute('class', 'hide');
});


editMyArticleBtn.addEventListener('click', () => {
  allArticle.setAttribute('class', 'hide');
  newArticle.setAttribute('class', 'hide');
  readArticle.setAttribute('class', 'hide');
  myArticle.setAttribute('class', 'hide');
  sharedArticle.setAttribute('class', 'hide');
  aboutUs.setAttribute('class', 'hide');
  contactUs.setAttribute('class', 'hide');
  editMyArticle.setAttribute('class', 'edit-my-article');
});

const aboutus = () => {
  allArticle.setAttribute('class', 'hide');
  newArticle.setAttribute('class', 'hide');
  readArticle.setAttribute('class', 'hide');
  myArticle.setAttribute('class', 'hide');
  sharedArticle.setAttribute('class', 'hide');
  aboutUs.setAttribute('class', 'about-us-cnts');
  contactUs.setAttribute('class', 'hide');
  editMyArticle.setAttribute('class', 'hide');
};
const contactus = () => {
  allArticle.setAttribute('class', 'hide');
  newArticle.setAttribute('class', 'hide');
  readArticle.setAttribute('class', 'hide');
  myArticle.setAttribute('class', 'hide');
  sharedArticle.setAttribute('class', 'hide');
  aboutUs.setAttribute('class', 'hide');
  contactUs.setAttribute('class', 'contact-us-cnts');
  editMyArticle.setAttribute('class', 'hide');
};
const read = () => {
  allArticle.setAttribute('class', 'hide');
  newArticle.setAttribute('class', 'hide');
  readArticle.setAttribute('class', 'read-article');
  myArticle.setAttribute('class', 'hide');
  sharedArticle.setAttribute('class', 'hide');
  aboutUs.setAttribute('class', 'hide');
  contactUs.setAttribute('class', 'hide');
  editMyArticle.setAttribute('class', 'hide');
};
const edit = () => {
  allArticle.setAttribute('class', 'hide');
  newArticle.setAttribute('class', 'hide');
  readArticle.setAttribute('class', 'hide');
  myArticle.setAttribute('class', 'hide');
  sharedArticle.setAttribute('class', 'hide');
  aboutUs.setAttribute('class', 'hide');
  contactUs.setAttribute('class', 'hide');
  editMyArticle.setAttribute('class', 'edit-my-article');
};

// ################################################################################
// #####################  Info, Error and Success Messages ########################
// ################################################################################

let closeNewArticle = document.getElementsByClassName('close')[0];
let closeUpdateArticle = document.getElementsByClassName('close')[1];
let closeDeleteArticle = document.getElementsByClassName('close')[2];
let closeFlagArticle = document.getElementsByClassName('close')[3];
let closeFlagComment = document.getElementsByClassName('close')[4];
let closeComment = document.getElementsByClassName('close')[5];
let closeQuery = document.getElementsByClassName('close')[6];

closeNewArticle.onclick = () => {
  let successBox = document.querySelector('.success-msg-new-article');
  successBox.style.display = 'none';
};
closeUpdateArticle.onclick = () => {
  let successBox = document.querySelector('.success-msg-update-article');
  successBox.style.display = 'none';
};
closeDeleteArticle.onclick = () => {
  let successBox = document.querySelector('.success-msg-delete-article');
  successBox.style.display = 'none';
};
closeFlagArticle.onclick = () => {
  let successBox = document.querySelector('.success-msg-flag-article');
  successBox.style.display = 'none';
};
closeFlagComment.onclick = () => {
  let successBox = document.querySelector('.success-msg-flag-comment');
  successBox.style.display = 'none';
};
closeComment.onclick = () => {
  let successBox = document.querySelector('.success-msg-comment');
  successBox.style.display = 'none';
};

closeQuery.onclick = () => {
  let successBox = document.querySelector('.success-msg-query');
  successBox.style.display = 'none';
};


let publishArticleBtn = document.querySelector('.publish');
publishArticleBtn.onclick = () => {
  document.querySelector('.success-msg-new-article').style.display = 'block';
};

const update = () => {
  document.querySelector('.success-msg-update-article').style.display = 'block';
};

const deleteArticle = () => {
  document.querySelector('.success-msg-delete-article').style.display = 'block';
};


const flagComment = () => {
  document.querySelector('.success-msg-flag-comment').style.display = 'block';
};
const flagArticle = () => {
  document.querySelector('.success-msg-flag-article').style.display = 'block';
};
const comment = () => {
  document.querySelector('.success-msg-comment').style.display = 'block';
};
const submitquery = () => {
  document.querySelector('.success-msg-query').style.display = 'block';
};

// / Additional Codes Related to Responsiveness

let menuIcon = document.getElementsByClassName('menu-icon')[0];
let closeMenuIcon = document.getElementsByClassName('close-menu-icon')[0];
let leftNavMenu = document.getElementsByClassName('left-division')[0];
menuIcon.onclick = () => {
  leftNavMenu.style.display = 'block';
  leftNavMenu.style.width = '30%';
  closeMenuIcon.style.display = 'block';
  menuIcon.style.display = 'none';
};
closeMenuIcon.onclick = () => {
  leftNavMenu.style.display = 'none';
  leftNavMenu.style.width = '0';
  closeMenuIcon.style.display = 'none';
  menuIcon.style.display = 'block';
};

// / Additional Codes Related to Responsiveness
// / Mobile Layout

let newMenu = document.querySelector('.menuIcon');
let closeMenu = document.querySelector('.closeMenuIcon');
newMenu.onclick = () => {
  leftNavMenu.style.display = 'block';
  leftNavMenu.style.width = '100%';
  closeMenu.style.display = 'block';
  newMenu.style.display = 'none';
};
closeMenu.onclick = () => {
  leftNavMenu.style.display = 'none';
  leftNavMenu.style.width = '0';
  closeMenu.style.display = 'none';
  newMenu.style.display = 'block';
};
