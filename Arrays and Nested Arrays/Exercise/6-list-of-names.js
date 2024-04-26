function namesSort(array) {

    array.sort((a, b) => a.localeCompare(b));

    for (let index = 0; index < array.length; index++) {

        console.log(`${index + 1}.${array[index]}`);

    }

}
namesSort(["John",
    "Bob",
    "Christina",
    "Ema"]);