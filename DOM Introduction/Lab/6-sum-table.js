function sumTable() {

    let tableElements = document.querySelectorAll('td');
    let sumElement = document.getElementById('sum');
    let array = Array.from(tableElements);
    let sum = 0;

    for (let index = 1; index < array.length - 1; index++) {

        if (index % 2 !== 0) {
            sum += Number(array[index].textContent);
        }

    }

    sumElement.textContent = sum;

}