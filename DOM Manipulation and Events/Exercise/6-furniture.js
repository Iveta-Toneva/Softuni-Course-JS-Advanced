function solve() {

  let textareaInputElement = document.querySelector('textarea');
  let generateButtonElement = document.querySelector('button');
  let tableElement = document.querySelector('tbody');

  generateButtonElement.addEventListener('click', (event) => {

    let objects = JSON.parse(textareaInputElement.value);

    objects.forEach(object => {
      let imageElement = document.createElement('img');
      imageElement.src = object.img;
      let tdImageElement = document.createElement('td');
      tdImageElement.append(imageElement);
      let nameElement = document.createElement('p');
      nameElement.textContent = object.name;
      let tdNameElement = document.createElement('td');
      tdNameElement.append(nameElement);
      let priceElement = document.createElement('p');
      priceElement.textContent = object.price;
      let tdPriceElement = document.createElement('td');
      tdPriceElement.append(priceElement);
      let decorationElement = document.createElement('p');
      decorationElement.textContent = object.decFactor;
      let tdDecorationElement = document.createElement('td');
      tdDecorationElement.append(decorationElement);
      let inputElement = document.createElement('input');
      inputElement.type = 'checkbox';
      let tdElement = document.createElement('td');
      tdElement.append(inputElement);
      let rowElement = document.createElement('tr');
      rowElement.append(tdImageElement, tdNameElement, tdPriceElement, tdDecorationElement, tdElement);
      tableElement.append(rowElement);


    });

  });

  let buyButtonElement = document.querySelectorAll('button')[1];
  let textareaResultElement = document.querySelectorAll('textarea')[1];

  buyButtonElement.addEventListener('click', (event) => {

    let checkboxElements = document.querySelectorAll('td:last-child input');
    let furniture = [];
    let totalPrice = 0;
    let counter = 0;
    let totalFactor = 0;
    let avgFactor = 0;


    checkboxElements.forEach(el => {

      if (el.checked) {
        let row = el.parentElement.parentElement;
        let name = row.querySelector('td p').textContent;
        let price = Number(row.querySelectorAll('td p')[1].textContent);
        let factor = Number(row.querySelectorAll('td p')[2].textContent);
        furniture.push(name);
        totalPrice += price;
        counter++;
        totalFactor += factor;
      }

    });

    avgFactor = totalFactor / counter;

    textareaResultElement.value += `Bought furniture: ${furniture.join(', ')}\n`;
    textareaResultElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    textareaResultElement.value += `Average decoration factor: ${avgFactor}`;

  });

}