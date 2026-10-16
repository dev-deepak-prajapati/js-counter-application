const counterDisplay = document.querySelector('#counterDisplay');
const incrementBtn = document.querySelector('#incrementBtn');
const decrementBtn = document.querySelector('#decrementBtn');
const resetBtn = document.querySelector('#resetBtn');

let counter = 0;

function resetCounter() {
    counter = 0;
    counterDisplay.textContent = counter;
}
function incrementCounter() {
    counter++;
    counterDisplay.textContent = counter;
}
function decrementCounter() {
    counter--;
    counterDisplay.textContent = counter;
}

resetBtn.addEventListener('click', resetCounter);
incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
