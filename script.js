const buttons = document.querySelector('.buttons-container');
const display = document.querySelector('.display input');


const numbers = [];

buttons.addEventListener('click', e => {
    const button = e.target;

    if (button.classList.contains('num')) {
        display.innerText += button.innerText;
        numbers.push(button.innerText);
    }
    if (button.classList.contains('op')) {
        operate(button.innerText);
    }
    if(button.classList.contains('del')){
        del();
    }
    if(button.classList.contains('clear')){
        clear();
    }
})





function sum() {
    const value = [...arguments];
    let sum = 0;
    for (num of value) {
        sum += num;
    }
    return sum;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function operate(operation) {
    if (operation === '+') {
        sum();
    }
    if (operation === '-') {
        subtract();
    }
    if (operation === 'X') {
        multiply();
    }
    if (operation === '-') {
        divide();
    }
}

function del(){

}

console.log(operate('10+'))