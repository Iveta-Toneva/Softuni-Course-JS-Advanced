function stringLength(first, second, third) {

    let sumLengths = first.length + second.length + third.length;
    let averageLength = Math.floor(sumLengths / 3);

    console.log(sumLengths);
    console.log(averageLength);

}
stringLength('chocolate', 'ice cream', 'cake');