let btn = document.getElementById('btn');
let btn1 = document.getElementById('btn1');
let popup = document.getElementsByClassName('popup');

console.log(btn);

function openPopup(){
    popup.classList.add('open-popup')
}

btn.addEventListener("click", openPopup)