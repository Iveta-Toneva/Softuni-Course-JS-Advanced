function encodeAndDecodeMessages() {

    let sendButtonElement = document.querySelector('button');
    let sendTextAreaElement = document.querySelector('textarea');
    let decodeButtonElement = document.querySelectorAll('button')[1];
    let readTextAreaElement = document.querySelectorAll('textarea')[1];

    sendButtonElement.addEventListener('click', (event) => {
        let text = sendTextAreaElement.value;
        let message = '';
        for (const letter of text) {
            message += String.fromCharCode((letter.charCodeAt() + 1));
        }
        sendTextAreaElement.value = '';
        readTextAreaElement.value = message;
    });


    decodeButtonElement.addEventListener('click', (event) => {
        let text = readTextAreaElement.value;
        let message = '';
        for (const letter of text) {
            message += String.fromCharCode((letter.charCodeAt() - 1));
        }
        readTextAreaElement.value = message;
    });

}