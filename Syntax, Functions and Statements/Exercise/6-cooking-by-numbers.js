function numberModifier(number, firstCommand, secondCommand, thirdCommand, forthCommand, fifthCommand) {

    let arrayCommands = [firstCommand, secondCommand, thirdCommand, forthCommand, fifthCommand];

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
numberModifier('9', 'dice', 'spice', 'chop', 'bake', 'fillet');