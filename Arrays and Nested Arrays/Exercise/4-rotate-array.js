function rotateArray(array, rotations) {

    for (let index = 0; index < rotations; index++) {
        let elementToMove = array.pop();
        array.unshift(elementToMove);

    }

    console.log(array.join(' '));

}
rotateArray(['1',
    '2',
    '3',
    '4'],
    2);