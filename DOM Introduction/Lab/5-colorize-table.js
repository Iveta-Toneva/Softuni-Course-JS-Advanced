function colorize() {

    let rowElements = document.querySelectorAll('tr');
    let array = Array.from(rowElements);

    array.map((el, i) => {
        if (i % 2 !== 0) {
            el.style.backgroundColor = 'teal'
        };
    });

}   