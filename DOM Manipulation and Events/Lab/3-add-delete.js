function addItem() {

    let ulElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    if (!inputElement.value) {
        return;
    }

    let aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = '[Delete]';
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    liElement.append(aElement);
    ulElement.append(liElement);

    aElement.addEventListener('click', (event) => {
        event.currentTarget.parentElement.remove();
    });

    inputElement.value = '';

}