function printDayNumber(day) {

    let number = 0;

    switch (day) {
        case 'Monday': number = 1; break;
        case 'Tuesday': number = 2; break;
        case 'Wednesday': number = 3; break;
        case 'Thursday': number = 4; break;
        case 'Friday': number = 5; break;
        case 'Saturday': number = 6; break;
        case 'Sunday': number = 7; break;
    }

    if (number !== 0) {
        console.log(number);
    } else {
        console.log('error');
    }

}
printDayNumber('Friday');