function previousDay(year, month, day) {

    let date = new Date(year, month - 1, day - 1);
    let yearResult = date.getFullYear();
    let monthResult = date.getMonth() + 1;
    let dayResult = date.getDate();
    console.log(`${yearResult}-${monthResult}-${dayResult}`);

}
previousDay(2016, 9, 30);