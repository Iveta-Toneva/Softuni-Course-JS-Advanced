function catalogue(array) {

    let products = {};

    for (const line of array) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        products[product] = price;
    }

    let sortedProducts = Object.entries(products)
        .sort((a, b) => a[0].localeCompare(b[0]));
        

    let firstLetter = sortedProducts[0][0][0];

    console.log(firstLetter);

    for (const [product,price] of sortedProducts) {

        if (product[0] !== firstLetter) {
            firstLetter = product[0];
            console.log(firstLetter);
        }

        console.log(`  ${product}: ${price}`);

    }

}
catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);