function productsCalories(array) {

    let products = {};

    for (let index = 0; index < array.length; index++) {

        let product = array[index];
        let calories = Number(array[++index]);
        products[product] = calories;

    }

    console.log(products);

}
productsCalories(['Yoghurt', '48', 'Rise', '138',

    'Apple', '52']);