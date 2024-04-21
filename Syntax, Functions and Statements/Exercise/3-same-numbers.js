function digits(number) {

    let sum = 0;
    let areTheSame = true;
    let numberAsString = number.toString();
    let firstDigit = numberAsString[0];
    for (let index = 0; index < numberAsString.length; index++) {

        if (firstDigit !== numberAsString[index]) {
            areTheSame = false;
        }
        sum += Number(numberAsString[index]);
    }

    console.log(areTheSame);
    console.log(sum);
}
digits(1234);