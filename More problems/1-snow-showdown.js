window.addEventListener("load", solve);

function solve() {


  let nameElement = document.getElementById('snowman-name');
  let heightElement = document.getElementById('snowman-height');
  let locationElement = document.getElementById('location');
  let creatorNameElement = document.getElementById('creator-name');
  let attributesElement = document.getElementById('special-attribute');
  let addButtonElement = document.querySelector('.add-btn');

  addButtonElement.addEventListener('click', (event) => {
    event.preventDefault();

    if (!nameElement.value || !heightElement.value || !locationElement.value || !creatorNameElement.value || !attributesElement.value) {
      return;
    }

    let name = nameElement.value;
    let height = heightElement.value;
    let location = locationElement.value;
    let creatorName = creatorNameElement.value;
    let attributes = attributesElement.value;

    let ulPreviewElement = document.querySelector('.snowman-preview');
    let liElement = document.createElement('li');
    liElement.classList.add('snowman-info');
    let articleElement = document.createElement('article');
    let firstPElement = document.createElement('p');
    firstPElement.textContent = `Name: ${name}`;
    let secondPElement = document.createElement('p');
    secondPElement.textContent = `Height: ${height}`;
    let thirdPElement = document.createElement('p');
    thirdPElement.textContent = `Location: ${location}`;
    let forthPElement = document.createElement('p');
    forthPElement.textContent = `Creator: ${creatorName}`;
    let fifthPElement = document.createElement('p');
    fifthPElement.textContent = `Attribute: ${attributes}`;

    articleElement.appendChild(firstPElement);
    articleElement.appendChild(secondPElement);
    articleElement.appendChild(thirdPElement);
    articleElement.appendChild(forthPElement);
    articleElement.appendChild(fifthPElement);

    let divElement = document.createElement('div');
    divElement.classList.add('btn-container');

    let editButtonElement = document.createElement('button');
    editButtonElement.textContent = 'Edit';
    editButtonElement.classList.add('edit-btn');

    let nextButtonElement = document.createElement('button');
    nextButtonElement.textContent = 'Next';
    nextButtonElement.classList.add('next-btn');

    divElement.appendChild(editButtonElement);
    divElement.appendChild(nextButtonElement);
    liElement.appendChild(articleElement);
    liElement.appendChild(divElement);
    ulPreviewElement.appendChild(liElement);


    nameElement.value = '';
    heightElement.value = '';
    locationElement.value = '';
    creatorNameElement.value = '';
    attributesElement.value = '';
    addButtonElement.setAttribute('disabled', 'disabled');

    editButtonElement.addEventListener('click', () => {

      liElement.remove();
      nameElement.value = name;
      heightElement.value = height;
      locationElement.value = location;
      creatorNameElement.value = creatorName;
      attributesElement.value = attributes;
      addButtonElement.removeAttribute('disabled');

    })

    nextButtonElement.addEventListener('click', () => {

      liElement.remove();
      let ulSnowListElement = document.querySelector('.snow-list');

      let liListElement = document.createElement('li');
      liElement.classList.add('snowman-content');
      let articleElement = document.createElement('article');
      let firstPElement = document.createElement('p');
      firstPElement.textContent = `Name: ${name}`;
      let secondPElement = document.createElement('p');
      secondPElement.textContent = `Height: ${height}`;
      let thirdPElement = document.createElement('p');
      thirdPElement.textContent = `Location: ${location}`;
      let forthPElement = document.createElement('p');
      forthPElement.textContent = `Creator: ${creatorName}`;
      let fifthPElement = document.createElement('p');
      fifthPElement.textContent = `Attribute: ${attributes}`;
      let sendButtonElement = document.createElement('button');
      sendButtonElement.textContent = 'Send';
      sendButtonElement.classList.add('send-btn');

      articleElement.appendChild(firstPElement);
      articleElement.appendChild(secondPElement);
      articleElement.appendChild(thirdPElement);
      articleElement.appendChild(forthPElement);
      articleElement.appendChild(fifthPElement);
      articleElement.appendChild(sendButtonElement);
      liListElement.appendChild(articleElement);
      ulSnowListElement.appendChild(liListElement);

      sendButtonElement.addEventListener('click', (event) => {

        let mainElement = document.querySelector('#hero');
        let imgElement = document.getElementById('back-img');
        let bodyElement = document.querySelector('.body');
        mainElement.remove();
        imgElement.style.display = 'inline';
        let backButtonElement = document.createElement('button');
        backButtonElement.classList.add('back-btn');
        backButtonElement.textContent = 'Back';
        bodyElement.appendChild(backButtonElement);
        backButtonElement.addEventListener('click', () => {
          window.location.reload();
        })

      });


    });

  });

}
