const buttons = document.querySelector('.buttons-container');
const display = document.querySelector('.text');


let numbers = [];


document.addEventListener('keydown', e => {
    const key = e.keyCode;

    if(key > 47 && key < 58 || key > 95 && key < 106){
        display.innerText += e.key;
    }


});

buttons.addEventListener('click', e => {
    const button = e.target;

    if (button.classList.contains('num')) {
        display.innerText += button.innerText;
    }
    if(button.classList.contains('operation')){
        numbers.push(display.innerText);
        display.innerText += button.innerText; 
        console.log(numbers);
    }
    if (button.classList.contains('equals')) {
        operate(display.innerText);
    }
    if (button.classList.contains('del')) {
        del(display.innerText);
    }
    if (button.classList.contains('clear')) {
        clear();
    }
});





function add(num1, num2) {
    return num1 + num2;
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

function operate(displayValue) {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const valueSplit = displayValue.split(/[-+]/);
    

    /* if (operation === '+') {
        add();
    }
    if (operation === '-') {
        subtract();
    }
    if (operation === 'x') {
        multiply();
    }
    if (operation === '-') {
        divide();
    } */
}

function del(displayText) {
    const newValue = displayText.slice(0, displayText.length - 1);
    display.innerText = newValue;
}

function clear() {
    numbers = [];
    display.innerText = '';
}
