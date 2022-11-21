const buttons = document.querySelector('.buttons-container');
const display = document.querySelector('.text');
const hold = document.querySelector('.hold');


let numbers = [];
let operation;;


document.addEventListener('keydown', e => {
    const key = e.keyCode;

    if (key > 47 && key < 58 || key > 95 && key < 106) {
        display.innerText += e.key;
    }
    if (key == 8) {
        del(display.innerText);
    }
    if (key == 13) {
        operate(display.innerText);
    }
    if (key == 107 || key == 109) {
        numbers.push(display.innerText);
        display.innerText += e.key;
    }
});

buttons.addEventListener('click', e => {
    const button = e.target;

    if (button.classList.contains('num')) {
        display.innerText += button.innerText;
    }
    if (button.classList.contains('operation')) {
        numbers.push(display.innerText);
        operation = button.innerText;
        hold.innerText += display.innerText;
        display.innerText = '';
    }
    if (button.classList.contains('equals')) {
        checkStr(display.innerText)
        console.log(numbers);
        display.innerText = operate(numbers, operation);
    }
    if (button.classList.contains('del')) {
        del(display.innerText);
    }
    if (button.classList.contains('clear')) {
        clear();
    }
});

function operate(arr, operation) {
    const num1 = Number(arr[0]);
    const num2 = Number(arr[1]);
    let result;

    if (operation == '+') {
        result = add(num1, num2);
    }
    if (operation == '-') {
        result = subtract(num1, num2);
    }
    if (operation == 'x') {
        result = multiply(num1, num2);
    }
    if (operation == '/') {
        result = divide(num1, num2);
    }

    hold.innerText = '';
    numbers = [];
    operation = '';
    return result;

}

function checkStr(displayValue) {
    if (displayValue === '') {
        return;
    }
    numbers.push(display.innerText.slice());
}

function del(expr) {
    const newExpr = expr.slice(0, expr.length - 1);
    display.innerText = newExpr;
    numbers.pop();
}

function clear() {
    numbers = [];
    operations = [];
    display.innerText = '';
    hold.innerText = '';
}

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
