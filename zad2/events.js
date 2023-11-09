
let number = 0;
const zwieksz = document.getElementById('zwiekszanie')
const zmien = document.getElementById('zmiana')
const napis = document.getElementById('cyferka')

zwieksz.addEventListener('click', e => {
    number += 1;
    napis.innerText = number;
})

zmien.addEventListener('click', e => {
    napis.classList.toggle('color');
})
