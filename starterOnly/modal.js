  // DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalbg = document.querySelector(".bground");
const closeModal = document.querySelector(".close");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".js-submitBtn");

  // Form Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const emailName = document.getElementById("email");
const birthDate = document.querySelector("birthdate");
const number = document.getElementById("quantity");
//const cgu = document.getElementById(input[checkbox1 , checkbox2 ])

//-------------------------------------------------------//
//-------------------------------------------------------//
  //Pour afficher la nav bar
  const toggle = document.querySelector(".toggle");
  const navBar = document.querySelector(".main-navbar");

  toggle.addEventListener("click", () => {
    navBar.classList.toggle("open");
  })

//-------------------------------------------------------//
//-------------------------------------------------------//
  // Pour afficher le modal
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modale
closeModal.addEventListener("click" , () => {
  modalbg.style.display = "none";
})

  //Cette variable va nous permettre d'afficher le text d'erreur
const error = document.getElementsByClassName("hidden");

  // Variable Form
  //Les variables représenter dans le input en question
let first = "";
let name = "";
let email = "";
let birthday = "";
let numberGame = "";
let Gamecity = "";
let Cgu = "";

let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;
let isBirthdayValid = false;
let isNumberGameValid = false;
let isGameCityValid = false;
let isCguValid = false;

//------------------------------------------------------//
//------------------------------------------------------//
// Je crée les fonctions et vérifie que le champ remplie les conditions
// Fonction FirstName
function checkFirstName () {
  const firstNameError = document.querySelector(".js-firstNameError");
  if (first.length >= 2){
    firstNameError.classList.add("hidden");
    isFirstNameValid = true;
  } else if (first.length < 2){
    firstNameError.classList.remove("hidden");
    isFirstNameValid = false;
  }
}

// Fonction LastName
function checkLastName () {
  const lastNameError = document.querySelector(".js-lastNameError");
  if (name.length >= 2){
    lastNameError.classList.add("hidden");
    isLastNameValid = true;
  } else if (name.length < 2){
    lastNameError.classList.remove("hidden");
    isLastNameValid = false;
  }
}
// Fonction Email
//regex email pour accepter les charactères spéciaux chiffres et lettre avant et après le @
let regexEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// fonction de vérification du champs email
function checkEmail() {
  if (!email.value) {
    // si le champs est vide message d'erreur
    emailError.classList.remove("hidden");
  } else if (regexEmail.exec(email.value) == null) {
    //si se n'est pas conforme au regex email donc pas valide
    emailError.classList.remove("hidden");
  } else {
    //si tout est respecté pas de message d'erreur
    emailError.classList.add("hidden");
  }
}

// Fonction Birthday
function checkbirthday() {
  const birthdayError = document.querySelector(".js-birthdayError");
  if (birthday.value = null ){
  birthdayError.classList.add("hidden");
    isBirthdayValid = false;
  } else (birtday.value = !null)
  {
  birthdayError.classList.remove("hidden");
    isBirthdayValid = true;
  }
}

// Fonction Score
function checkNumberGame(){
  const numberGameError = document.querySelector(".js-numberGameError");
  if (numberGame.value){
  numberGameError.classList.add("hidden");
    isNumberGameValid = true;
  } else {
  numberGameError.classList.remove("hidden");
    isNumberGameValid = false
  }
}

// Fonction City
//tableau des boutons radios
let locationArray = [
  //création d'un variable qui récupère tout les boutons radios du DOM
  document.querySelector("#location1"),
  document.querySelector("#location2"),
  document.querySelector("#location3"),
  document.querySelector("#location4"),
  document.querySelector("#location5"),
  document.querySelector("#location6"),
];

//fonction de vérification des villes
function checkCity() {
  const gameCityError = document.querySelector(".js-gameCityError");
  if (
    !locationArray[0].checked &&
    !locationArray[1].checked &&
    !locationArray[2].checked &&
    !locationArray[3].checked &&
    !locationArray[4].checked &&
    !locationArray[5].checked
  ) {
    // si l'un des boutons n'est pas cochés donc message d'erreur
    gameCityError.classList.remove("hidden");
    isGameCityValid = false;
  } else {
    //si un bouton est coché plus d'erreur
    gameCityError.classList.add("hidden");
    isGameCityValid = true;
  }
}

// Fonction CGU
//fonction de vérification de la CGU cochée ou décochée
function checkCgu() {
  const cguError = document.querySelector(".js-cguError");
  if (!cgu.checked) {
    //si le bouton n'est pas coché alors erreur
    cguError.classList.remove("hidden");
  } else {
    //s'il est coché plus d'erreur
    cguError.classList.add("hidden");
  }
}

//------------------------------------------------------//
//------------------------------------------------------//
//Validation formulaire
firstName.addEventListener("input", (e) => {
  first = e.target.value;
})

lastName.addEventListener("input", (e) => {
  name = e.target.value;
})

emailName.addEventListener("input", (e) => {
  console.log(e.target.value);
})

// birthDate.addEventListener("input", (e) => {
//   birthday = e.target.value;
// })

number.addEventListener("input", (e) => {
  console.log(e.target.value);
  numberGame = e.target.value;
})

// emailName.addEventListener("input", (e) => {
//   console.log(e.target.value);
// })

// Appel des fonctions pour valider le formulaire
submitBtn.addEventListener("click" , () => {
  console.log("envoyer")
  checkFirstName();
  checkLastName();
  // checkEmail();
  checkbirthday();
  checkNumberGame();
  checkCity();
  checkCgu()
})

  //Ici on empeche l'envoie du formulaire grâce à la methode e.preventDefault();
form.addEventListener("submit", (e) => { //méthode pour empêcher le rafraichissement de la page formulaire car pas de php
  e.preventDefault();
})
