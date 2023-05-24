const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 36;

const makeBigger = () => {
    if (fontSize >= 70) return

    fontSize += 5;
    p.style.fontSize = fontSize + 'px';
};

const makeSmaller = () => {
    if (fontSize <= 21) return
    
    fontSize -= 5;
    p.style.fontSize = fontSize + 'px';
};

const changeColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    p.style.color = `rgb(${r},${g},${b})`
}

sizeDown.addEventListener('click', makeSmaller);
sizeUp.addEventListener('click', makeBigger);
colorBtn.addEventListener('click', changeColor)