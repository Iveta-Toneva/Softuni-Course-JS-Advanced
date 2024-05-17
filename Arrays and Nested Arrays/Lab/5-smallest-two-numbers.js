function smallestTwoNumbers(array) {

    array.sort((a, b) => a - b);
    let newArray = array.slice(0, 2);
    console.log(newArray.join(' '));

}
smallestTwoNumbers([30, 15, 50, 5]);