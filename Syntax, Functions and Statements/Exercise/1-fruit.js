function calculateFruitPrice(fruit, weight, priceKg) {

    let weightInKg = weight / 1000;
    let price = weightInKg * priceKg;
    console.log(`I need $${price.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);

}
calculateFruitPrice('orange', 2500, 1.80);