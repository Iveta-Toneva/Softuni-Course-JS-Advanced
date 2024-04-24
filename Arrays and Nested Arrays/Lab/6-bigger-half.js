function biggerHalf(array) {

    array = array.sort((a, b) => a - b)
        .slice(array.length / 2);

    return array;

}
biggerHalf([4, 7, 2, 5]);