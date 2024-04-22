function numberModifier(numberAsString, command1, command2, command3, command4, command5) {

    let number = Number(numberAsString);
    let arrayCommands = [command1, command2, command3, command4, command5];

    for (const command of arrayCommands) {

        switch (command) {
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number++; break;
            case 'bake': number *= 3; break;
            case 'fillet': number *= 0.80; break;
        }
        console.log(number);
    }
}
numberModifier('32', 'chop', 'chop', 'chop', 'chop', 'chop');