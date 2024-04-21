function greatestCommonDivisor(firstNumber, secondNumber) {

    let greatestDivisor = 0;
    for (let index = 1; index <= 10; index++) {

        if (firstNumber % index === 0 && secondNumber % index === 0) {
            greatestDivisor = index;
        }

    }
    console.log(greatestDivisor);

}
greatestCommonDivisor(15, 5);