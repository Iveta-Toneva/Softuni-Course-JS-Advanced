window.addEventListener("load", solve);

function solve() {

    let numberTicketsElement = document.getElementById('num-tickets');
    let seatingPreferenceElement = document.getElementById('seating-preference');
    let nameElement = document.getElementById('full-name');
    let emailElement = document.getElementById('email');
    let phoneElement = document.getElementById('phone-number');
    let purchaseButtonElement = document.getElementById('purchase-btn');
    let ulPreviewElement = document.getElementById('ticket-preview');

    purchaseButtonElement.addEventListener('click', () => {

        let arrayInputElements = [numberTicketsElement, seatingPreferenceElement, nameElement, emailElement, phoneElement];
        let arrayValuesInput = [numberTicketsElement.value, seatingPreferenceElement.value, nameElement.value, emailElement.value, phoneElement.value];

        if (arrayValuesInput.some(v => v === '')) {
            return;
        }

        let countPElement = document.createElement('P');
        countPElement.textContent = `Count: ${numberTicketsElement.value}`;
        let seatPElement = document.createElement('p');
        seatPElement.textContent = `Preference: ${seatingPreferenceElement.value}`;
        let namePElement = document.createElement('p');
        namePElement.textContent = `To: ${nameElement.value}`;
        let emailPElement = document.createElement('p');
        emailPElement.textContent = `Email: ${emailElement.value}`;
        let phonePElement = document.createElement('p');
        phonePElement.textContent = `Phone Number: ${phoneElement.value}`;
        let articleElement = document.createElement('article');
        articleElement.appendChild(countPElement);
        articleElement.appendChild(seatPElement);
        articleElement.appendChild(namePElement);
        articleElement.appendChild(emailPElement);
        articleElement.appendChild(phonePElement);
        let divElement = document.createElement('div');
        divElement.classList.add('btn-container');
        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        let nextButton = document.createElement('button');
        nextButton.classList.add('next-btn');
        nextButton.textContent = 'Next';
        divElement.appendChild(editButton);
        divElement.appendChild(nextButton);
        let liPreviewElement = document.createElement('li');
        liPreviewElement.classList.add('ticket-purchase');
        liPreviewElement.appendChild(articleElement);
        liPreviewElement.appendChild(divElement);
        ulPreviewElement.appendChild(liPreviewElement);

        purchaseButtonElement.setAttribute('disabled', 'disabled');
        numberTicketsElement.value = '';
        seatingPreferenceElement.value = '';
        nameElement.value = '';
        emailElement.value = '';
        phoneElement.value = '';


        editButton.addEventListener('click', (e) => {

            liPreviewElement.remove();
            purchaseButtonElement.removeAttribute('disabled');
            numberTicketsElement.value = arrayValuesInput[0];
            seatingPreferenceElement.value = arrayValuesInput[1];
            nameElement.value = arrayValuesInput[2];
            emailElement.value = arrayValuesInput[3];
            phoneElement.value = arrayValuesInput[4];

        });

        nextButton.addEventListener('click', () => {

            liPreviewElement.remove();

            let ulElement = document.getElementById('ticket-purchase');

            let buyButton = document.createElement('button');
            buyButton.classList.add('buy-btn');
            buyButton.textContent = 'Buy';
            let countPElement = document.createElement('P');
            countPElement.textContent = `Count: ${arrayValuesInput[0]}`;
            let seatPElement = document.createElement('p');
            seatPElement.textContent = `Preference: ${arrayValuesInput[1]}`;
            let namePElement = document.createElement('p');
            namePElement.textContent = `To: ${arrayValuesInput[2]}`;
            let emailPElement = document.createElement('p');
            emailPElement.textContent = `Email: ${arrayValuesInput[3]}`;
            let phonePElement = document.createElement('p');
            phonePElement.textContent = `Phone Number: ${arrayValuesInput[4]}`;
            let articleElement = document.createElement('article');
            articleElement.appendChild(countPElement);
            articleElement.appendChild(seatPElement);
            articleElement.appendChild(namePElement);
            articleElement.appendChild(emailPElement);
            articleElement.appendChild(phonePElement);
            articleElement.appendChild(buyButton);
            let liElement = document.createElement('li');
            liElement.classList.add('ticket-purchase');
            liElement.appendChild(articleElement);
            ulElement.appendChild(liElement);

            buyButton.addEventListener('click', (e) => {
                liElement.remove();
                let div = document.getElementsByTagName('div')[2    ];
                console.log(div);
                let h2El = document.createElement('h2');
                h2El.textContent = 'Thank you for your purchase!';
                let backButton = document.createElement('button');
                backButton.classList.add('back-btn');
                backButton.textContent = 'Back';
                div.appendChild(h2El);
                div.appendChild(backButton);

                backButton.addEventListener('click', () => {
                    window.location.reload();
                });

            });


        });


    });

}
