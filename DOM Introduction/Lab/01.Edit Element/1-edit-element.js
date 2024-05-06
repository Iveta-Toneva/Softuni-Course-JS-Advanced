function editElement(ref, string, replacer) {

    while (ref.textContent.includes(string)) {
        ref.textContent = ref.textContent.replace(string, replacer);
    }

}