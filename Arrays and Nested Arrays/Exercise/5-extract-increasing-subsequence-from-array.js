function arrayFiltration(array) {

    let resultArray = [];

    let initialElement = array.shift();
    resultArray.push(initialElement);

    for (const number of array) {

        if (initialElement <= number) {
            resultArray.push(number);
            initialElement = number;
        }
    }

    return resultArray;

}
arrayFiltration([20,
    3,
    2,
    15,
    6,
    1,]);