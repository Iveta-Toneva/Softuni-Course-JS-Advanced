function addAndRemoveElements(array) {

    let element = 0;
    let elementsArray = [];
    array.forEach(command => {

        element++;
        switch (command) {
            case 'add': elementsArray.push(element); break;
            case 'remove': elementsArray.pop(); break;
        }
    });

    if (elementsArray.length === 0) {
        console.log('Empty');
    } else {
        elementsArray.forEach(element => console.log(element));
    }

}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']);