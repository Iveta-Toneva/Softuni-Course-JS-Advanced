function sumTable() {

    let elements = document.querySelectorAll('td:nth-of-type(2)');
    let arrayElements = Array.from(elements);
    arrayElements.pop();
    let sum = 0;
    for (const el of arrayElements) {
        sum += Number(el.textContent);
    }
    let sumElement = document.getElementById('sum');
    sumElement.textContent = sum;

}