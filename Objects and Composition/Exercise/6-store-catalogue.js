function storeCatalogue(array) {

    let products = {};

    for (const line of array) {
        let [name, price] = line.split(' : ');
        price = Number(price);
        products[name] = price;
    }

    products = Object.entries(products).sort((a, b) => a[0].localeCompare(b[0]));

    let firstLetter = products[0][0][0];
    console.log(firstLetter);

    for (const [name, price] of products) {

        if (firstLetter !== name[0]) {
            firstLetter = name[0];
            console.log(firstLetter);
        }

        console.log(`  ${name}: ${price}`);
    }

}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);