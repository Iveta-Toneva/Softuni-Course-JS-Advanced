function addAndRemoveElements(commandsArray) {

    let resultArray = [];
    let number = 1;

    for (const command of commandsArray) {

        switch (command) {

            case 'add': resultArray.push(number); break;
            case 'remove': resultArray.pop(); break;
        }
        number++;
    }

    if (resultArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(resultArray.join('\n'));
    }

}
addAndRemoveElements(['add', 'add', 'add', 'add']);