function biggestElement(matrix) {

    let result = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < matrix.length; row++) {

        for (let index = 0; index < matrix[row].length; index++) {

            if (matrix[row][index] > result) {
                result = matrix[row][index];
            }

        }

    }

    console.log(result);

}
biggestElement([[20, 50, 10],
[8, 33, 145]]);