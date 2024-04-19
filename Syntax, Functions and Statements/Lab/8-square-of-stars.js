function square(number) {

    if (!number) {
        for (let index = 1; index <= 5; index++) {
            let row = '';
            for (let index = 1; index <= 5; index++) {
                row += '* ';
            }
            console.log(row.trimEnd());
        }
    } else {
        for (let index = 1; index <= number; index++) {
            let row = '';
            for (let index = 1; index <= number; index++) {
                row += '* ';
            }
            console.log(row.trimEnd());
        }
    }

}
square(5);