window.addEventListener("load", solve);

function solve() {

    let nameInputElement = document.getElementById('gem-name');
    let colorInputElement = document.getElementById('color');
    let caratsInputElement = document.getElementById('carats');
    let priceInputElement = document.getElementById('price');
    let typeInputElement = document.getElementById('type');
    let addButtonElement = document.getElementById('add-btn');


    addButtonElement.addEventListener('click', (event) => {

        if ((!nameInputElement.value) || (!colorInputElement.value) ||(!caratsInputElement.value) || (!priceInputElement.value) || (!typeInputElement.value)) {
            return;
        }

        let name = nameInputElement.value;
        let color = colorInputElement.value;
        let carats = caratsInputElement.value;
        let type = typeInputElement.value;
        let price = priceInputElement.value;

        let ulElement = document.getElementById('preview-list');
        let liElement = document.createElement('li');
        liElement.classList.add('gem-info');
        let articleElement = document.createElement('article');
        let h4Element = document.createElement('h4');
        h4Element.textContent = nameInputElement.value;
        let firstPElement = document.createElement('p');
        firstPElement.textContent = `Color: ${colorInputElement.value}`;
        let secondPElement = document.createElement('p');
        secondPElement.textContent = `Carats: ${caratsInputElement.value}`;
        let thirdPElement = document.createElement('p');
        thirdPElement.textContent = `Price: ${priceInputElement.value}$`;
        let forthPElement = document.createElement('p');
        forthPElement.textContent = `Type: ${typeInputElement.value}`;
        articleElement.appendChild(h4Element);
        articleElement.appendChild(firstPElement);
        articleElement.appendChild(secondPElement);
        articleElement.appendChild(thirdPElement);
        articleElement.appendChild(forthPElement);

        let saveButton = document.createElement('button');
        saveButton.textContent = 'Save to Collection';
        saveButton.classList.add('save-btn');

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit Information';
        editButton.classList.add('edit-btn');

        let cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.classList.add('cancel-btn');
        liElement.appendChild(articleElement);
        liElement.appendChild(saveButton);
        liElement.appendChild(editButton);
        liElement.appendChild(cancelButton);
        ulElement.appendChild(liElement);


        addButtonElement.setAttribute('disabled', 'disabled');
        nameInputElement.value = '';
        colorInputElement.value = '';
        caratsInputElement.value = '';
        priceInputElement.value = '';
        typeInputElement.value = '';


        editButton.addEventListener('click', (event) => {

            addButtonElement.removeAttribute('disabled');
            nameInputElement.value = name;
            colorInputElement.value = color;
            caratsInputElement.value = carats;
            priceInputElement.value = price;
            typeInputElement.value = type;
            liElement.remove();

        });

        saveButton.addEventListener('click', (event) => {

            let ulCollectionElement = document.getElementById('collection');
            let liCollectionElement = document.createElement('li');
            let pCollectionElement = document.createElement('p');
            pCollectionElement.classList.add('collection-item');
            let text = `${name}- Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;
            pCollectionElement.textContent = text;
            liElement.remove();
            addButtonElement.removeAttribute('disabled');
            liCollectionElement.appendChild(pCollectionElement);
            ulCollectionElement.appendChild(liCollectionElement);


        });

        cancelButton.addEventListener('click', (event) => {

            liElement.remove();
            addButtonElement.removeAttribute('disabled');

        });

    });

}
