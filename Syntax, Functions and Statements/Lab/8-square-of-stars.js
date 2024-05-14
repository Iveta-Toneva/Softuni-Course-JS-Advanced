function squareOfStars(number) {

    for (let index = 0; index < number; index++) {

        let row = '';

        for (let index = 0; index < number; index++) {

            row += '* ';

        }
        console.log(row.trimEnd());
    }

}
squareOfStars(5);