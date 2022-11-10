function sum() {
    const value = [...arguments];
    let sum = 0;
    for (num of value) {
        sum += num;
    }
    return sum;
}

