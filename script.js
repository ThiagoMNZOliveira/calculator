const buttons = document.querySelector('.buttons-container');
const display = document.querySelector('.input');


const numbers = [];

buttons.addEventListener('click', e => {
    const button = e.target;

    if (button.classList.contains('num')) {
        display.value += button.innerText;
        numbers.push(button.innerText);
    }
    if (button.classList.contains('equals')) {
        operate(display.value);
    }
    if (button.classList.contains('del')) {
        del(display.value);
    }
    if (button.classList.contains('clear')) {
        clear();
    }
})





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

function del(displayValue) {
    const newValue = displayValue.slice(0, displayValue.length - 1);
    display.value = newValue;
}

function clear() {
    display.value = '';
}
