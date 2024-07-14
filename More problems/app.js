window.addEventListener('load', solve);

function solve() {
    let firstNameInputElement = document.getElementById('first-name');
    let lastNameInputElement = document.getElementById('last-name');
    let fromInputElement = document.getElementById('from-date');
    let toInputElement = document.getElementById('to-date');
    let nextButton = document.getElementById('next-btn');

    nextButton.addEventListener('click', (event) => {

        let firstName = firstNameInputElement.value;
        let lastName = lastNameInputElement.value;
        let from = fromInputElement.value;
        let to = toInputElement.value;

        event.preventDefault();
        let arrayInputs = [firstNameInputElement, lastNameInputElement, fromInputElement, toInputElement];

        if (arrayInputs.some(el => el.value === '')) {
            return;
        }

        let fromDate = new Date(fromInputElement.value);
        let toDate = new Date(toInputElement.value);
        if (fromDate.getTime() > toDate.getTime()) {
            return;
        }

        let ulInfoList = document.querySelector('.info-list');
        let h3 = document.createElement('h3')
        h3.textContent = `Name: ${firstNameInputElement.value} ${lastNameInputElement.value}`;
        let p1 = document.createElement('p');
        p1.textContent = `From date: ${fromInputElement.value}`;
        let p2 = document.createElement('p');
        p2.textContent = `To date: ${toInputElement.value}`;
        let article = document.createElement('article');
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');

        let continueButton = document.createElement('button');
        continueButton.textContent = 'Continue';
        continueButton.classList.add('continue-btn');
        let li = document.createElement('li');
        li.classList.add('vacation-content');
        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(continueButton);
        ulInfoList.appendChild(li);
        nextButton.setAttribute('disabled', 'disabled');
        firstNameInputElement.value = '';
        lastNameInputElement.value = '';
        fromInputElement.value = '';
        toInputElement.value = '';

        editButton.addEventListener('click', () => {
            nextButton.removeAttribute('disabled');
            firstNameInputElement.value = firstName;
            lastNameInputElement.value = lastName;
            fromInputElement.value = from;
            toInputElement.value = to;
            li.remove();
        });

        continueButton.addEventListener('click', (e) => {

            e.currentTarget.parentElement.remove();
            let confirmUl = document.querySelector('.confirm-list');

            let h3 = document.createElement('h3')
            h3.textContent = `Name: ${firstName} ${lastName}`;
            let p1 = document.createElement('p');
            p1.textContent = `From date: ${from}`;
            let p2 = document.createElement('p');
            p2.textContent = `To date: ${to}`;
            let article = document.createElement('article');
            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);
            let confirmButton = document.createElement('button');
            confirmButton.textContent = 'Confirm';
            confirmButton.classList.add('confirm-btn');
            let cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancel';
            cancelButton.classList.add('cancel-btn');
            let li = document.createElement('li');
            li.classList.add('vacation-content');
            li.appendChild(article);
            li.appendChild(confirmButton);
            li.appendChild(cancelButton);
            confirmUl.appendChild(li);
            let status = document.getElementById('status');

            confirmButton.addEventListener('click', (e) => {
                e.currentTarget.parentElement.remove();
                nextButton.removeAttribute('disabled');
                let statusEl = document.getElementById('status');
                statusEl.textContent = 'Vacation Requested';
                statusEl.classList.add('vacation-confirmed');
            });

            cancelButton.addEventListener('click', (e) => {
                e.currentTarget.parentElement.remove();
                nextButton.removeAttribute('disabled');
                let statusEl = document.getElementById('status');
                statusEl.textContent = 'Cancelled Vacation';
                statusEl.classList.add('vacation-cancelled');
            });
            status.addEventListener('click', () => {
                window.location.reload();
            })


        });
    });


}




