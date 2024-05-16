function words(text) {

    let pattern = /\w+/g;
    let matches = text.matchAll(pattern);
    let wordsArray = [];

    for (const match of matches) {
        wordsArray.push(match[0].toUpperCase());
    }

    console.log(wordsArray.join(', '));

}
words('Hi, how are you?');