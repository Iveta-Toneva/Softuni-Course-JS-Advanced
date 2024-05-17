function arrayModifier(array) {

    array = array.filter((el, i) => i % 2 !== 0)
        .map(el => el * 2)
        .reverse();

    console.log(array.join(' '));

}
arrayModifier([10, 15, 20, 25]);