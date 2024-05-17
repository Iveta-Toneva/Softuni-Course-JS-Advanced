function sumFirstAndLastElement(array) {

    array = array.map(Number);
    let result = array.shift() + array.pop();

    return result;

}
sumFirstAndLastElement(['20', '30', '40']);