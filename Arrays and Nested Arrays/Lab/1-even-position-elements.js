function evenPositionElements(array) {

    let result = array.filter((el, index) => index % 2 === 0)
        .join(' ');

    console.log(result);

}
evenPositionElements(['20', '30', '40',
    '50', '60']);