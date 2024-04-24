function takePartOfArray(array, firstElement, lastElement) {

    let startIndex = array.indexOf(firstElement);
    let endIndex = array.indexOf(lastElement) + 1;
    let resultArray = array.slice(startIndex, endIndex);

    return resultArray;

}
takePartOfArray(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');