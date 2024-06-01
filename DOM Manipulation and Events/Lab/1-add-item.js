function addItem() {

    const ulElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    
    if (inputElement.value) {
        let liElement = document.createElement('li');
        liElement.textContent = inputElement.value;
        ulElement.append(liElement);
        inputElement.value = '';
    }

}