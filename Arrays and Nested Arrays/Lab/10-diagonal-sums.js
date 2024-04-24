function diagonalSums(matrix) {

    let firstSum = 0;
    let secondSum = 0;

    for (let index = 0; index < matrix.length; index++) {

        firstSum += matrix[index][index];
        secondSum += matrix[index][matrix.length - index - 1];

    }

    console.log(`${firstSum} ${secondSum}`);

}
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);