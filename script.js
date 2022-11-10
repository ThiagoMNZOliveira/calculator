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

function division(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2){
    return num1 * num2;
}