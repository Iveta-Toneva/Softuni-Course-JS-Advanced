function validate() {

    let inputElement = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]+.[a-z]+/;
    inputElement.addEventListener('change', (event) => {

        if (!inputElement.value.match(pattern)) {
            event.currentTarget.classList.add('error');
        } else {
            event.currentTarget.classList.remove('error');
        }

    });
}