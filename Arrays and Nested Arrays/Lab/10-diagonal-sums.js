function diagonalsSums(matrix) {

    let array = [];

    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let index = 0; index < matrix.length; index++) {

        for (let inIndex = 0; inIndex < matrix[index].length; inIndex++) {

            if (index === inIndex) {
                firstDiagonal += matrix[index][inIndex];
            }


        }
        secondDiagonal += matrix[index][matrix.length - index - 1];

    }
    array.push(firstDiagonal, secondDiagonal);
    console.log(array.join(' '));


}
diagonalsSums([[20, 40],
[10, 60]]);