function numbersSequence(length, elementsToSum) {

    let array = [1];

    for (let index = 1; index < length; index++) {
        let startIndex = Math.max(index - elementsToSum, 0);
        let elements = array.slice(startIndex, startIndex + elementsToSum);
        let sum = elements.reduce((acc, x) => acc + x);
        array.push(sum);
    }

    return array;

}
numbersSequence(6, 3);