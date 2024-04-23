function changeWordsToUppercase(string) {

    let wordsArray = [];
    let regEx = /\w+/g;

    let words = string.matchAll(regEx)

    for (const word of words) {
        wordsArray.push(word[0]);
    }

    wordsArray = wordsArray.map(word => word.toUpperCase());

    console.log(wordsArray.join(', '));

}
changeWordsToUppercase('Hi, how are you?');