function simpleCalculator(firstNumber, secondNumber, operation) {

    switch (operation) {
        case '+': console.log(firstNumber + secondNumber); break;
        case '-': console.log(firstNumber - secondNumber); break;
        case '*': console.log(firstNumber * secondNumber); break;
        case '/': console.log(firstNumber / secondNumber); break;
        case '**': console.log(firstNumber ** secondNumber); break;
        case '%': console.log(firstNumber % secondNumber); break;
    }

}
simpleCalculator(5, 6, '+');