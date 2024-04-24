function equalNeighbors(matrix) {

    let pairsCount = 0;

    for (let index = 0; index < matrix.length - 1; index++) {

        let currentArray = matrix[index];

        for (let inIndex = 0; inIndex < currentArray.length; inIndex++) {

            if (matrix[index][inIndex] === matrix[index + 1][inIndex]) {
                pairsCount++;
            }
            if (matrix[index][inIndex] === matrix[index][inIndex + 1]) {
                pairsCount++;
            }
        }
    }

    let lastArray = matrix.pop();
    for (let index = 0; index < lastArray.length - 1; index++) {

        if (lastArray[index] === lastArray[index + 1]) {
            pairsCount++;
        }

    }

    return pairsCount;

}
equalNeighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]);
