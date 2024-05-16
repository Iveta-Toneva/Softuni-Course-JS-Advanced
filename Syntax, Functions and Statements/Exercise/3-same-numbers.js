function areDigitsSame(number) {

    number = number.toString();
    let areSame = true;
    let sum = 0;

    for (let index = 0; index < number.length - 1; index++) {

        sum += Number(number[index]);

        if (number[index] !== number[index + 1]) {
            areSame = false;
        }

    }

    sum += Number(number[number.length - 1]);
    console.log(areSame);
    console.log(sum);

}
areDigitsSame(1234);