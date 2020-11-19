function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  window.scrollTo(0, 0);
}



// close modal 

function closeModal() {
  modalbg.style.display = "none";
};

document.querySelector("form").addEventListener("submit", validate);

function validate (e) {

  window.scrollY(0);

  e.preventDefault()
  var prenom = document.forms["reserve"]["first"]
  var name = document.forms["reserve"]["last"];
  var conditions = document.forms["reserve"]["conditions"];
  var quantity = document.forms["reserve"]["quantity"];
  var date = document.forms["reserve"]["birthdate"]

  document.getElementById('errorname').innerHTML=""; 
  document.getElementById('errorfirstname').innerHTML=""; 
  document.getElementById('errorConditions').innerHTML=""; 
  document.getElementById('errorDate').innerHTML=""; 
  document.getElementById('errorLocation').innerHTML=""; 

  if ( prenom.value == "" || prenom.value.length < 2) {
    document.getElementById('errorfirstname').innerHTML="Veuillez entrez un nom valide"; 
    prenom.focus();
    return false;
  }


  if ( name.value == "" || name.value.length < 2) {
    document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide"; 
    name.focus();
    return false;
  }


  if ( date.value == 0 ) {
    document.getElementById('errorDate').innerHTML="Vous devez entrer votre date de naissance.";
    date.focus();
    return false;
  }


  if ( quantity.value != 0 ) {
    
    var location1 = document.getElementById('location1');
    var location2 = document.getElementById('location2');
    var location3 = document.getElementById('location3');
    var location4 = document.getElementById('location4');
    var location5 = document.getElementById('location5');
    var location6 = document.getElementById('location6');


    if ( location1.checked == false & location2.checked == false & location3.checked == false & location4.checked == false & location5.checked == false & location6.checked == false) {
      document.getElementById('errorLocation').innerHTML="Vous devez choisir une villes";
    }
    return false
  }

  if (conditions.checked == false) {
    document.getElementById('errorConditions').innerHTML="Vous devez vérifier que vous acceptez les termes et conditions.";
    conditions.focus();
    return false;
  }
  

  else {
    document.getElementById("submitMessage").style.display = "block";  
    return true;
    }

}

function closeSubmitMessage() {
  document.querySelector("#submitMessage").style.display = "none";
  modalbg.style.display = "none";
  
}