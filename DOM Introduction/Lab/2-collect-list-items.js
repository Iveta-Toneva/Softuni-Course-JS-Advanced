function extractText() {

    let liElements = document.querySelectorAll('ul li');
    let textAreaElement = document.getElementById('result');
    let text = '';

    for (const element of liElements) {
        text += element.textContent + '\n';
    }
    
    textAreaElement.value = text;

}