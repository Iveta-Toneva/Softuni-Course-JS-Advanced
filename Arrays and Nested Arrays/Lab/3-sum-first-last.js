function sumFirstAndLast(array) {

    array = array.map(Number);
    let firstElement = array.shift();
    let lastElement = array.pop();
    let sum = firstElement + lastElement;
    return sum;

}
sumFirstAndLast(['5', '10']);