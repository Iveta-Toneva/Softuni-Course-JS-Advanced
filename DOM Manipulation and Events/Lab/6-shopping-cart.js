function solve() {

   let addProductButtonElements = document.querySelectorAll('.add-product');
   let textAreaElement = document.querySelector('textarea');
   let checkOutButtonElement = document.querySelector('.checkout');
   let products = {};

   addProductButtonElements.forEach(el => {

      el.addEventListener('click', (event) => {

         let productElement = event.currentTarget.parentElement.parentElement;
         let productPrice = Number(productElement.querySelector('.product-line-price').textContent);
         let productName = productElement.querySelector('.product-title').textContent;
         textAreaElement.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

         if (products.hasOwnProperty(productName)) {
            products[productName] += productPrice;
         } else {
            products[productName] = productPrice;
         }
      });

   });

   checkOutButtonElement.addEventListener('click', (event) => {
      let productList = Object.keys(products).join(', ');
      let totalPrice = Object.values(products).reduce((ac, el) => {
         return ac + el;
      }, 0);
      textAreaElement.value += `You bought ${productList} for ${totalPrice.toFixed(2)}.`;
      addProductButtonElements.forEach(el => el.setAttribute('disabled', 'disabled'));
      event.currentTarget.setAttribute('disabled', 'disabled');
   });

}