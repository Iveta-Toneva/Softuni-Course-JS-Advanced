function editElement(element, string, replacer) {

    while (element.textContent.indexOf(string)!==-1) {
        element.textContent = element.textContent.replace(string, replacer);
    }

}