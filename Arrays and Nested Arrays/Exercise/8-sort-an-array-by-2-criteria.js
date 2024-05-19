function sortArray(array) {

    array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    array.forEach(element => console.log(element));

}
sortArray(['alpha',
    'beta',
    'gamma']);