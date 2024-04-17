function sumNumbers(firstElement, lastElement) {

    let sum = 0;
    firstElement = Number(firstElement);
    lastElement = Number(lastElement);
    for (let index = firstElement; index <= lastElement; index++) {
        sum += index;
    }
    return sum;

}
sumNumbers('1', '5');
