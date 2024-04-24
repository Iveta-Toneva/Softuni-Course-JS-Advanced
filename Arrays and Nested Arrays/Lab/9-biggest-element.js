function biggestElement(matrix) {

    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (const array of matrix) {

        for (const number of array) {
            if (number > biggestNumber) {
                biggestNumber = number;
            }
        }
    }

    return biggestNumber;

}
biggestElement([[20, 50, 10],
[8, 33, 145]]);