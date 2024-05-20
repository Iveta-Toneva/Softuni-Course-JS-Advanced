function magicMatrices(matrix) {

    let isMagic = true;
    let rowSumCheck = matrix[0].reduce((ac, v) => ac + v);
    let colSumCheck = 0;

    for (let index = 0; index < matrix.length; index++) {
        colSumCheck += matrix[index][0];
    }

    for (let index = 0; index < matrix.length; index++) {
        let rowSum = 0;
        let colSum = 0;
        for (let inIndex = 0; inIndex < matrix.length; inIndex++) {
            rowSum += matrix[index][inIndex];
            colSum += matrix[inIndex][index];

        }
        if (rowSum !== rowSumCheck) {
            isMagic = false;
            break;
        }
        if (colSum !== colSumCheck) {
            isMagic = false;
            break;
        }

    }

    console.log(isMagic);

}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);