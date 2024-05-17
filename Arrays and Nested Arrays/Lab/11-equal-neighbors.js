function equalNeighbors(matrix) {

    let pairsCount = 0;

    for (let index = 0; index < matrix.length; index++) {

        for (let inIndex = 0; inIndex < matrix[index].length; inIndex++) {

            let currentElement = matrix[index][inIndex];
            if (inIndex < matrix[index].length - 1) {
                if (currentElement === matrix[index][inIndex + 1]) {
                    pairsCount++;
                }
            }
            if (index < matrix.length - 1) {
                if (currentElement === matrix[index + 1][inIndex]) {
                    pairsCount++;
                }
            }

        }

    }

    console.log(pairsCount);

}
equalNeighbors([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]);