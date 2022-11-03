  // DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalbg = document.querySelector(".bground");
const closeModal = document.querySelector(".close");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".js-submitBtn");

  // Message de remerciement
  const closeMessage = document.querySelector(".close_message");
  const bgMessage = document.querySelector(".bground_message");
  const btnMessage = document.querySelector(".close-btn")

  // Form Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const emailName = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const city = document.querySelector('input[name="location"]');
const numberOfParticipation = document.getElementById("quantity");
const cgu = document.getElementById("checkbox1")

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

// Close  Modal Message
closeMessage.addEventListener("click" , () => {
  bgMessage.style.display = "none";
})

// Button Fermer
btnMessage.addEventListener("click", () => {
  bgMessage.style.display = "none";
} )

//Cette variable va nous permettre d'afficher le text d'erreur
const error = document.getElementsByClassName("hidden");

//------------------------------------------------------//
//------------------------------------------------------//
//Validation formulaire
firstName.addEventListener("input", (e) => {
  first = e.target.value;
  //console.log(e.target.value);
})

lastName.addEventListener("input", (e) => {
  name = e.target.value;
  //console.log(e.target.value);
})

// emailName.addEventListener("input", (e) => {
//   //console.log(e.target.value);
// })


// numberOfParticipation.addEventListener("input", (e) => {
//   console.log(e.target.value);
//   numberGame = e.target.value;
// })

// cgu.addEventListener("input", (e) =>{
//   //console.log(e.target.value);
// } )

//------------------------------------------------------//
//------------------------------------------------------//
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
let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// fonction de vérification du champs email
function checkEmail() {
  const emailError = document.querySelector(".js-emailError")
  // console.log(emailName.value);
  // console.log(regexEmail.test(emailName.value))
  if (!emailName.value || !regexEmail.test(emailName.value) ) {
    // si le champs est vide message d'erreur
    emailError.classList.remove("hidden");
    isEmailValid = false;
  } else {
    //si tout est respecté pas de message d'erreur
    emailError.classList.add("hidden");
    isEmailValid = true;
  }
}

// Fonction Birthday
function checkbirthday() {
  let dateBirth = birthdate.value;
  //console.log(dateBirth);
  const birthdayError = document.querySelector(".js-birthdayError");
  //si la date de naissance n'est pas renseigné champs vide
  if (!birthDate.value){
    //console.log("toto");
  birthdayError.classList.remove("hidden");
    isBirthdayValid = false;
  }
  else
  {
    //console.log("toti")
    let birthYear = dateBirth.split("-")[0];//récupère l'année de naissance
    let currentYear = new Date().getFullYear(); // variable qui récupère la date actuelle
    let age = currentYear - birthYear;//date actuelle- date de naissance = age
    //console.log("response" , age)
    if (age <= 17) {
      //si l'age est inferieur ou égale à 17 ans donc erreur car il faut avoir 18 ans
    birthdayError.classList.remove("hidden");
      isBirthdayValid = false;
    } else {
      //si tout est bon on enlève le message d'erreur
      birthdayError.classList.add("hidden");
      isBirthdayValid = true;
    }
  }
}

// Fonction Score
function checkNumberGame(){
  const numberGameError = document.querySelector(".js-numberGameError");
  if (!numberOfParticipation.value){
  numberGameError.classList.remove("hidden");
    isNumberGameValid = false;
    console.log(numberOfParticipation + "valeur non complet")
  } else if (numberOfParticipation.value > 99){
    console.log(numberOfParticipation + " est au dessus de la limite");
    numberGameError.classList.remove("hidden");
    isNumberGameValid = false;
  } else {
  numberGameError.classList.add("hidden");
    isNumberGameValid = true;
    console.log(numberOfParticipation + " est correct");
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
    isCguValid = false;
  } else {
    //s'il est coché plus d'erreur
    cguError.classList.add("hidden");
    isCguValid = true;
  }
}

// Fonction qui ouvre la modal de remerciement
function modalGood() {
  bgMessage.style.display = block;
}


// Appel des fonctions pour valider le formulaire
function validForm(e) {
  e.preventDefault();//méthode pour empêcher le rafraichissement de la page formulaire car pas de php
    //j'ai crée des variables de validation pour appeler chaque fonction de champs vérifiés
    // let isFirstNameValid = checkFirstName();
    // let isLastNameValid = checkLastName();
    // let isEmailValid = checkEmail();
    // let isBirthdayValid = checkbirthday();
    // let isNumberGameValid = checkNumberGame();
    // let isGameCityValid = checkCity();
    // let isCguValid = checkCgu();
    // if (
    //   isFirstNameValid &&
    //   isLastNameValid &&
    //   isEmailValid &&
    //   isBirthdayValid &&
    //   isNumberGameValid &&
    //   isGameCityValid &&
    //   isCguValid
    // ) {
    //   // Si tous les champs sont validés on peut envoyer le formulaire sinon message d'erreur
    //   modalbg.style.display = "none";
    //   modalMessage.style.display = "block";
    //   modalGood(); //on appel la fonction de validation
    //   InitialisationFields(); // Puis on initialise
    // }
  }

// Initialisation de tous les champs du formulaire
function InitialisationFields() {
  firstName.value = null;
  lastName.value = null;
  emailName.value = null;
  birthDate.value = null;
  numberOfParticipation.value = null;
  city.checked = false;
  cgu.checked = false;
  firstNameError.style.display = "none";
  lastNameError.style.display = "none";
  emailError.style.display = "none";
  birthdayError.style.display = "none";
  numberGameError.style.display = "none";
  gameCityError.style.display = "none";
  cguError.style.style.display = "none";
}


submitBtn.addEventListener("click" , () => {
  //e.preventDefault();//méthode pour empêcher le rafraichissement de la page formulaire car pas de php
  console.log("envoyer")
  checkFirstName();
  checkLastName();
  checkEmail();
  checkbirthday();
  checkNumberGame();
  checkCity();
  checkCgu()
  if (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isBirthdayValid &&
    isNumberGameValid &&
    isGameCityValid &&
    isCguValid
  ) {
    // Si tous les champs sont validés on peut envoyer le formulaire sinon message d'erreur
    modalbg.style.display = "none";
    modalMessage.style.display = "block";
    modalGood(); //on appel la fonction de validation
    InitialisationFields(); // Puis on initialise
  }
})

  //Ici on empeche l'envoie du formulaire grâce à la methode e.preventDefault();
form.addEventListener("submit", (e) => { //méthode pour empêcher le rafraichissement de la page formulaire car pas de php
  e.preventDefault();
})
