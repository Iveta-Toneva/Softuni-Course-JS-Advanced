function aggregateElements(array) {

    let sum = 0;
    let concatenation = '';
    let secondSum = 0;

    array.forEach(number => {
        sum += number;
        secondSum += 1 / number;
        concatenation += number;
    });

    console.log(sum);
    console.log(secondSum);
    console.log(concatenation);

}
aggregateElements([1, 2, 3]);