function printElements(array, step) {

    let resultArray = array.filter((el, i) => i % step === 0);

    return resultArray;

}
printElements(['5',
    '20',
    '31',
    '4',
    '20'],
    2);