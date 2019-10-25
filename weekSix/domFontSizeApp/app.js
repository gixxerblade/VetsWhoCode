const plus = document.getElementById('fa-plus');
const minus = document.getElementById('fa-minus');
let font = document.getElementById('para');
let currentSize = 1;
let increaseFontSize = plus.addEventListener('click', function(){
    console.log(true);
    currentSize = currentSize + .02;
    font.style.fontSize = currentSize + 'em';    
});

let decreaseFontSize = minus.addEventListener('click', function(){
    currentSize = currentSize - .02;
    font.style.fontSize = currentSize + 'em';
})