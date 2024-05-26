function extract(idName) {

    let textElement = document.getElementById(idName);
    let pattern = /\((?<name>[a-z A-Z]*)\)/g;
    let matches = textElement.textContent.matchAll(pattern);
    let array = [];

    for (const match of matches) {
        array.push(match.groups.name);
    }

    return array.join(';');

}