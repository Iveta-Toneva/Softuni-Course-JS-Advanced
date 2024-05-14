function sumNumbers(first, last) {

    let firstNumber = Number(first);
    let lastNumber = Number(last);
    let sum = 0;

    for (let index = firstNumber; index <= lastNumber; index++) {

        sum += index;
    }

    return sum;

}
sumNumbers('1', '5');