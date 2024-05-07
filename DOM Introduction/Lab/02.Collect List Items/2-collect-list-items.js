function extractText() {

    let textElement = document.getElementById('items');
    let textAreaElement = document.getElementById('result');
    textAreaElement.textContent = textElement.textContent;

}