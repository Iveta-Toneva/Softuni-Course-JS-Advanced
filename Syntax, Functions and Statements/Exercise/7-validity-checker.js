function validityChecker(x1, y1, x2, y2) {


    if (firstCheck(x1, y1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (secondCheck(x2, y2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (lastCheck(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }


    function lastCheck(x1, y1, x2, y2) {

        let result = Math.sqrt((Math.pow((x2 - x1), 2)) + Math.pow((y2 - y1), 2));

        return Number.isInteger(result);

    }

    function secondCheck(x2, y2) {

        let result = Math.sqrt((Math.pow((x2 - 0), 2)) + Math.pow((y2 - 0), 2));
        return Number.isInteger(result);
    }

    function firstCheck(x1, y1) {

        let result = Math.sqrt((Math.pow((x1 - 0), 2)) + Math.pow((y1 - 0), 2));
        return Number.isInteger(result);
    }

}
validityChecker(3, 0, 0, 4);