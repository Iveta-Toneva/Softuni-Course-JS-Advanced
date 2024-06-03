function create(words) {

   let mainDivElement = document.getElementById('content');

   words.forEach(word => {

      let paragraphElement = document.createElement('p');
      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';
      let divElement = document.createElement('div');
      divElement.append(paragraphElement);


      divElement.addEventListener('click', (event) => {
         let paragraphElementToDisplay = event.currentTarget.querySelector('p');
         paragraphElementToDisplay.style.display = 'block';
      });

      mainDivElement.append(divElement);

   });

}