function modifyArray(array) {

    let resultArray = array.filter((el, i) => i % 2 !== 0)
        .map(el => el * 2)
        .reverse()
        .join(' ');

    return resultArray;

}
modifyArray([10, 15, 20, 25]);