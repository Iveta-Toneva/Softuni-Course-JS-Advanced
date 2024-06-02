function focused() {

    let inputElements = Array.from(document.querySelectorAll('input'));

    inputElements.forEach(el => {
        el.addEventListener('focus', (event) => {
            event.currentTarget.parentElement.classList.add('focused');
        });
        el.addEventListener('blur', (event) => {
            event.currentTarget.parentElement.classList.remove('focused');
        });
    });

}