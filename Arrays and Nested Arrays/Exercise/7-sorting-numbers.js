function sortingNumbers(array) {

    let sortArray = [];
    array.sort((a, b) => a - b);

    let rotations = 0;
    if (array.length % 2 === 0) {
        rotations = array.length / 2;
    } else {
        rotations = Math.floor(array.length / 2);
    }

    for (let index = 0; index < rotations; index++) {

        sortArray.push(array.shift());
        sortArray.push(array.pop());

    }

    if (array.length !== 0) {
        sortArray.push(array.pop());
    }

    return sortArray;

}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);