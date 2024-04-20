function aggregateElements(array) {

    let sum = 0;
    let concat = '';
    let secondSum = 0;
    for (const number of array) {
        sum += number;
        concat += number;
        let division = 1 / number;
        secondSum += division;
    }
    console.log(sum);
    console.log(secondSum);
    console.log(concat);
    
}
aggregateElements([1, 2, 3]);