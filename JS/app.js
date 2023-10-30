let btn = document.getElementById('btn');
let btn1 = document.getElementById('btn1');
let popup = document.getElementById('popup');
let container = document.getElementById('container');
const email = document.getElementById("email");
const form = document.getElementById("form");

// FORM VALIDATION

btn.addEventListener("click", (e) => {
    e.preventDefault();

  if (checkInputs()) {
    openPopup();
  }

  form.reset();
});

function checkInputs() {
    // get the values

    const emailValue = email.value.trim();

    if (emailValue === "" ){
        setErrorFor(email, "Email address cannot be blank");
    }else if (!emailValid(emailValue)){
        setErrorFor(email, "Email is not valid");
        return false;
    }else{
      setErrorFor(email, ""); // Clear the error message if the email is valid
      return true;
    }
   
}

function setErrorFor(input, message) {
    const label = input.parentElement;
    const small = label.querySelector("small")

    // add error message inside small tag
    small.innerText = message;

    // add and remove error class
    if(message){
        email.classList.add("error-input");
    }else{
        email.classList.remove("error-input");
    }
}

function openPopup(){
    popup.classList.add('open-popup')
    container.classList.add('close-container')
}

// CLOSING THE popup

function closePopup(){
     popup.classList.remove("open-popup");
     container.classList.remove("close-container");
}

btn1.addEventListener("click", closePopup);


function emailValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
   }