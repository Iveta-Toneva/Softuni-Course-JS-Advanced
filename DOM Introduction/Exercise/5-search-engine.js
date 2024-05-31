function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let rowsElements = document.querySelectorAll('tr');
      let searchElement = document.getElementById('searchField');
      let array = Array.from(rowsElements);

      array.forEach((el, i) => {

         el.className = '';

         if (i !== 0 && el.textContent.includes(searchElement.value) && searchElement.value) {
            el.className = 'select';
         }

      });

   }
}