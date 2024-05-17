function biggerHalf(array) {

    array.sort((a, b) => a - b);
    let newArray = [];

    if (array.length % 2 === 0) {
        newArray = array.slice(array.length / 2);
    } else {
        newArray = array.slice(Math.floor(array.length / 2));
    }

    return newArray;

}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);