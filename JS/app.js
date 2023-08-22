let btn = document.getElementById('btn');
let btn1 = document.getElementById('btn1');
let popup = document.getElementById('popup');
let container = document.getElementById('container');

console.log(popup);

function openPopup(){
    popup.classList.add('open-popup')
    container.classList.add('close-container')
}

function closePopup(){
    popup.classList.add('close-popup')
    container.classList.add('open-container')
}

btn.addEventListener("click", openPopup);
btn1.addEventListener("click", closePopup);

