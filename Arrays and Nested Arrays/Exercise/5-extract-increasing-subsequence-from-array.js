function increasingSubsequence(array) {

    let currentBiggest = 0;
    let newArray = [];

    array.forEach(element => {
        if (currentBiggest <= element) {
            currentBiggest = element;
            newArray.push(element);
        }
    });

    return newArray;

}
increasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);