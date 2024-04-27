function magicMatrices(matrix) {

    let isMagic = true;
    let colSum = 0;

    for (let index = 0; index < matrix.length; index++) {
        colSum += matrix[index][0];
    }

    let rowSum = matrix[0].reduce((acc, x) => acc + x);

    for (let index = 0; index < matrix.length; index++) {

        let array = matrix[index];
        let rowSumArr = matrix[0].reduce((acc, x) => acc + x);


        if (rowSumArr !== rowSum) {
            isMagic = false;
            break;
        }

    }

    for (let index = 0; index < matrix.length; index++) {
        let colSumArr = 0;

        for (let inIndex = 0; inIndex < matrix.length; inIndex++) {

            colSumArr += matrix[inIndex][index];
        }


        if (colSumArr !== colSum) {
            isMagic = false;
            break;
        }
    }

    return isMagic;

}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);