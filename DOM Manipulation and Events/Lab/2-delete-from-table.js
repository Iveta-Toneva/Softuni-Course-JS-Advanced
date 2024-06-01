function deleteByEmail() {

    let rowsElement = Array.from(document.querySelectorAll('tbody tr'));
    let inputElement = document.getElementsByTagName('input')[0];
    let resultElement = document.getElementById('result');
    resultElement.textContent = '';

    for (const el of rowsElement) {
        let rowDataElement = el.querySelector('td:nth-child(2)');
        if (rowDataElement.textContent === inputElement.value) {
            el.remove();
            resultElement.textContent = 'Deleted.'
        }
    }

    if (resultElement.textContent !== 'Deleted.') {
        resultElement.textContent = 'Not found.';
    }

    inputElement.value = '';

}