function colorize() {

    let elements = document.getElementsByTagName('tr');
    let arrayElements = Array.from(elements);
    arrayElements.forEach((el, i) => {

        if (i % 2 !== 0) {
            el.style.backgroundColor = 'teal';
        }
    });

}