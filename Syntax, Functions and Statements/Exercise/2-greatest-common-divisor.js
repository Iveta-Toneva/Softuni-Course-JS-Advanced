function greatestCommonDivisor(firstNumber, secondNumber) {

    let greatest = 0;

    for (let index = 1; index <= Math.max(firstNumber,secondNumber); index++) {

        if (firstNumber % index === 0 && secondNumber % index === 0) {
            greatest = index;
        }
    }

    console.log(greatest);

}
greatestCommonDivisor(5, 15);