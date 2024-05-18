function printElements(array, step) {

    let filterArray = array.filter((el, i) => i % step === 0);
    return filterArray;

}
printElements(['5',
    '20',
    '31',
    '4',
    '20'],
    2);