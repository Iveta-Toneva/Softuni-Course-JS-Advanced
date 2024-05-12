function extract(content) {

    let textElement = document.getElementById('content');
    let text = textElement.textContent;
    let result = [];
    let pattern = /[(]{1}(?<value>[\w ]+)[)]{1}/g;
    let matches = text.matchAll(pattern);
    for (const match of matches) {
        result.push(match.groups.value);
    }

    return result.join('; ');

}