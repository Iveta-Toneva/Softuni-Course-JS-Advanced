function attachEventsListeners() {

    let inputUnitsElement = document.getElementById('inputUnits');
    let convertButtonElement = document.getElementById('convert');
    let outputUnitsElement = document.getElementById('outputUnits');
    let inputDistanceElement = document.getElementById('inputDistance');
    let outputDistanceElement = document.getElementById('outputDistance');

    convertButtonElement.addEventListener('click', (event) => {
        let distance = inputDistanceElement.value;
        let fromUnit = inputUnitsElement.value;
        let outputUnit = outputUnitsElement.value;
        let meeters = 0;

        switch (fromUnit) {

            case 'km': meeters = distance * 1000; break;
            case 'm': meeters = distance; break;
            case 'cm': meeters = distance / 100; break;
            case 'mm': meeters = distance / 1000; break;
            case 'mi': meeters = distance * 1609.34; break;
            case 'yrd': meeters = distance * 0.9144; break;
            case 'ft': meeters = distance * 0.3048; break;
            case 'in': meeters = distance * 0.0254; break;

        }

        let result = 0;

        switch (outputUnit) {
            case 'km': result = meeters / 1000; break;
            case 'm': result = meeters; break;
            case 'cm': result = meeters * 100; break;
            case 'mm': result = meeters * 1000; break;
            case 'mi': result = meeters / 1609.34; break;
            case 'yrd': result = meeters / 0.9144; break;
            case 'ft': result = meeters / 0.3048; break;
            case 'in': result = meeters / 0.0254; break;
        }

        outputDistanceElement.value = result;

    });

}