function numbersSequence(length, numbersToSum) {

    let array = [1];

    for (let index = 1; index < length; index++) {
        let numbers = [];
        if (array.length < numbersToSum) {
            numbers = array.slice();
        } else {
            numbers = array.slice(index - numbersToSum);
        }

        let sum = 0;
        for (const number of numbers) {
            sum += number;
        }
        array.push(sum);

    }

    return array;

}
numbersSequence(6, 3);