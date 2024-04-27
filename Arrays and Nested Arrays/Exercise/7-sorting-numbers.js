function sortingNumbers(array) {

    let resultArray = [];

    array.sort((a, b) => a - b);

    while (array.length !== 0) {
        let smallest = array.shift();
        let biggest = array.pop();
        resultArray.push(smallest, biggest);
    }

    return resultArray;

}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);