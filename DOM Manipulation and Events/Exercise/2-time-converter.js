function attachEventsListeners() {

    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');
    let daysButtonElement = document.getElementById('daysBtn');
    let hoursButtonElement = document.getElementById('hoursBtn');
    let minutesButtonElement = document.getElementById('minutesBtn');
    let secondsButtonElement = document.getElementById('secondsBtn');

    daysButtonElement.addEventListener('click', (event) => {
        let value = daysInputElement.value;
        if (value) {
            hoursInputElement.value = value * 24;
            minutesInputElement.value = value * 24 * 60;
            secondsInputElement.value = value * 24 * 60 * 60;
        }
    });

    hoursButtonElement.addEventListener('click', (event) => {
        let value = hoursInputElement.value;
        if (value) {
            daysInputElement.value = value / 24;
            minutesInputElement.value = value * 60;
            secondsInputElement.value = value * 60 * 60;
        }
    });

    minutesButtonElement.addEventListener('click', (event) => {
        let value = minutesInputElement.value;
        if (value) {
            daysInputElement.value = value / 60 / 24;
            hoursInputElement.value = value / 60;
            secondsInputElement.value = value * 60;
        }
    });


    secondsButtonElement.addEventListener('click', (event) => {
        let value = secondsInputElement.value;
        if (value) {
            daysInputElement.value = value / 60 / 60 / 24;
            hoursInputElement.value = value / 60 / 60;
            minutesInputElement.value = value / 60;
        }
    });

}