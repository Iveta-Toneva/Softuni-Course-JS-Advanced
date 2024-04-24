function arrayOrder(array) {

    let newArray = [];

    for (const number of array) {

        if (number < 0) {
            newArray.unshift(number);
        } else {
            newArray.push(number);
        }
    }

    for (const number of newArray) {
        console.log(number);
    }

}
arrayOrder([7, -2, 8, 9]);