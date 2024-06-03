function lockedProfile() {

    let showMoreButtonElements = document.querySelectorAll('button');

    showMoreButtonElements.forEach(el => {

        el.addEventListener('click', (event) => {
            let radioInputElement = event.currentTarget.parentElement.querySelector('input[value=unlock]');
            let hiddenElement = event.currentTarget.parentElement.querySelector('div');

            if (radioInputElement.checked && event.currentTarget.textContent === "Show more") {
                hiddenElement.style.display = 'block';
                event.currentTarget.textContent = 'Hide it';

            } else {

                if (radioInputElement.checked) {
                    hiddenElement.style.display = 'none';
                    event.currentTarget.textContent = 'Show more';
                }

            }

        });
    });

}