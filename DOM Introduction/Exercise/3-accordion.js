function toggle() {

    let buttonElement = document.getElementsByClassName('button')[0];
    let extraTextElement = document.getElementById('extra');
    if (buttonElement.textContent === 'More') {
        buttonElement.textContent = 'Less';
        extraTextElement.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        extraTextElement.style.display = 'none';
    }

}