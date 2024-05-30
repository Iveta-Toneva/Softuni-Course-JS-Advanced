function search() {

   let listElements = document.querySelectorAll('ul#towns li');
   let searchElement = document.getElementById('searchText');
   let resultElement = document.getElementById('result');
   let matches = 0;
   resultElement.textContent = '';

   for (const el of listElements) {

      el.style.textDecoration = 'none';
      el.style.fontWeight = 'normal';

      if (el.textContent.includes(searchElement.value) && (searchElement.value)) {
         matches++;
         el.style.textDecoration = 'underline';
         el.style.fontWeight = 'bold';
      }

      resultElement.textContent = `${matches} matches found`;

   }
   
}
