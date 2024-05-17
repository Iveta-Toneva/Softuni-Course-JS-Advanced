function arrayPiece(array, firstElement, lastElement) {

    let newArray = array.slice(array.indexOf(firstElement), array.indexOf(lastElement) + 1);

    return newArray;

}
arrayPiece(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');